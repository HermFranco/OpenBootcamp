
from tkinter import *
master = Tk()
elemento = StringVar()
listbox = Listbox(master)
for item in ["Prueba 1", "Prueba 2", "Prueba 3", "Prueba 4", "Prueba 5", "Prueba 6", "Prueba 7", "Prueba 8", "Prueba 9", "Prueba 10"]:
 listbox.insert(END, item)
listbox.pack()
label = Label(text="Pruebas Exitosas")
label.pack()
master.mainloop()

