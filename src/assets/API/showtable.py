import sqlite3

conn = sqlite3.connect('imagedetails.db')
print ("Opened database successfully");
cursor = conn.execute("SELECT * from imgdetails")
for row in cursor:
   print (row[0],row[1],row[2],'\n');
conn.close()