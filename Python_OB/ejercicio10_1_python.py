from tkinter import *

def seleccionar():
    monitor.config(text="{}".format(opcion.get()))
def reset():
    opcion.set(None)
    monitor.config(text="")

ventana = Tk()
opcion = StringVar()
opcion.set(None)

label = Label(text="Hora de Alarma")
label.pack()
Radiobutton(ventana, text="8:00", variable=opcion,
            value='8:00', command=seleccionar).pack(anchor=W)
Radiobutton(ventana, text="9:00", variable=opcion,
            value='9:00', command=seleccionar).pack(anchor=W)
Radiobutton(ventana, text="10:00", variable=opcion,
            value='10:00', command=seleccionar).pack(anchor=W)
Radiobutton(ventana, text="11:00", variable=opcion,
            value='11:00', command=seleccionar).pack(anchor=W)

monitor = Label(ventana)
monitor.pack()
Button(ventana, text="Reset", command=reset).pack()

ventana.mainloop()

