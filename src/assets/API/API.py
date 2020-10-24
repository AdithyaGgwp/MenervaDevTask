from flask import Flask,jsonify,request
from flask_cors import CORS #to resolve cross origin request
import sqlite3
import uuid #to generate unique id for filename
import os	#to extract extension


app = Flask(__name__)
app.config['UPLOAD_FOLDER']='gallery-images'
cors = CORS(app)



@app.route("/api/imglist",methods = ['GET']) #invoked by api call to api/imglist
def sendImgList():
	conn = sqlite3.connect('imagedetails.db')	#establishing DB connection
	cursor=conn.execute("SELECT * from imgdetails")	#storing result of query to cursor object
	respons=[]
	for row in cursor:
		#appending each row to response object
		respons.append({"name":row[0],"title":row[1],"description":row[2]})
	conn.close(); #closing connection to DB
	return jsonify(respons) #returning JSONified response

@app.route("/api/uploadimage",methods = ['POST']) #invoked by api call to api/uploadimage
def uploadImage():   
	conn = sqlite3.connect('imagedetails.db') #establishing DB connection
	file=request.files['image']				#extract image file from FormData object
	imagename=request.form['imagename']		#extract the name of uploaded image
	ext=os.path.splitext(imagename)[1]		#extract image extension
	uniquename=uuid.uuid4().hex+ext;		#create filename as unique id+extension
	title=request.form['title']				#extract title given by user
	description=request.form['description']	#extract description given by user

	#inserting image record from above data into the table
	conn.execute("INSERT INTO imgdetails VALUES(?,?,?);",(uniquename,title,description))
	conn.commit()
	conn.close()

	#uploading image file to local server side directory
	file.save(app.config['UPLOAD_FOLDER']+"/"+uniquename)
	
	#return response for verification	
	return {"ext":ext,"imagename":imagename,"title":title,"description":description,"Uname":uniquename};
	

if __name__ == "__main__":
    app.run()