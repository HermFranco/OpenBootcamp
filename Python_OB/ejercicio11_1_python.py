import sqlite3

db_conn = sqlite3.connect('alumnos.db')
db_cursor = db_conn.cursor()

db_cursor.execute("CREATE TABLE Alumnos(Id INT, Nombre TEXT, Apellido TEXT)")

db_cursor.execute("INSERT INTO Alumnos VALUES(1,'Herman', 'Franco')")
db_cursor.execute("INSERT INTO Alumnos VALUES(2,'Sergio', 'Pérez')")
db_cursor.execute("INSERT INTO Alumnos VALUES(3,'Max', 'Verstappen')")
db_cursor.execute("INSERT INTO Alumnos VALUES(4,'Lewis', 'Hamilton')")
db_cursor.execute("INSERT INTO Alumnos VALUES(5,'Sebastian', 'Vettel')")
db_cursor.execute("INSERT INTO Alumnos VALUES(6,'Carlos', 'Sainz')")
db_cursor.execute("INSERT INTO Alumnos VALUES(7,'Charles', 'Leclerc')")
db_cursor.execute("INSERT INTO Alumnos VALUES(8,'George', 'Russel')")

db_conn.commit()

db_cursor.execute("SELECT * FROM Alumnos WHERE Nombre = 'Max'")

filas = db_cursor.fetchall()

print(filas)



db_cursor.close()
db_conn.close()

