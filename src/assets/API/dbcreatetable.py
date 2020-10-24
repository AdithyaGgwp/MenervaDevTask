import sqlite3

conn = sqlite3.connect('imagedetails.db')
print ("Opened database successfully");
conn.execute('''CREATE TABLE imgdetails
         (name TEXT PRIMARY KEY NOT NULL,
         title TEXT,
         description TEXT);''')
print ("Table created successfully");
conn.execute("INSERT INTO imgdetails \
	VALUES ('1.jpg', 'title1', 'description1')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('2.jpg', 'title2', 'description2')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('3.jpg', 'title3', 'description3')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('4.jpg', 'title4', 'description4')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('5.jpg', 'title5', 'description5')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('6.jpg', 'title6', 'description6')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('7.jpg', 'title7', 'description7')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('8.jpg', 'title8', 'description8')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('9.jpg', 'title9', 'description9')");
conn.execute("INSERT INTO imgdetails \
	VALUES ('10.jpg', 'title10', 'description10')");
conn.commit();
conn.close();