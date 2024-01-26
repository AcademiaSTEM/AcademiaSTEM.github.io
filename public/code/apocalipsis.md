```python
contador = 0
import time
import datetime
print("bienvenid@ a una historia interactiva, en esta, deberas sobrevivir en un apocalipsis")
time.sleep(1)
print("tienes cuatro vidas elije con mucho cuidado")
time.sleep(1)
print("Estas en tu casa cuando todo inicia por lo que tienes que encontrar algo con lo que puedas defenderte, asi que buscas por la casa y encuentras")
time.sleep(1)
print ("un cuchillo de mantequilla, un ladrillo y una pistola")
variable_1 = input ("¿que elegiras? (solo puedes elegir uno)")
respuesta_1 = "pistola"
respuesta_2 = "ladrillo"
time.sleep(1)
if variable_1 == respuesta_1:
    contador = contador + 1
    print("bien ahora puedes cuidarte sol@") 
elif variable_1 == respuesta_2:
   print("se rompe de inmediato y no pudiste defenderte -1 vida")
else:
    print ("no te sirvio y no pudiste defenderte -1 vida")
time.sleep(1)
print("ahora con tu arma lista decides salir de tu casa y buscar un lugar seguro")
time.sleep(2)
print("sin embargo en el camino te encontraste a un grupo de personas armadas que estan atacando a alguien")
time.sleep(1)
print("(⚠ten cuidado a partir de ahora puedes encontrarte con compañeros, los cuales pueden ayudarte en diferentes acciones⚠)")
variable_2 = input ("¿lo defiendes?")
respuesta_2 = "no"
time.sleep(2)
if variable_2 == respuesta_2:
    contador = contador + 1
    print("fue cruel pero lograste mantenerte viv@")
else:
    print ("te superaron en numero y te dejaron muy herid@ (la persona que atacaban no sobrevivio)")
    time.sleep (1)
print("al seguir tu camino encontraste un edificio abandonado")
variable_3 = input ("¿entraras?")
respuesta_3 = "si"
if variable_3 == respuesta_3:
    print("encontraste a Emma, una chica con conocimiento medico, ¡ahora tienes una compañera y tienes un lugar seguro donde dormir!")
    contador = contador + 1
else:
    print ("no pudiste dormir y te encuentras muy debil")
time.sleep(2)
print ("al dia siguiente decides seguir explorando y encuentras una casa abandonada con una caja fuerte en una esquina")
variable_4 = input ("¿la abriras?")
if variable_4 == variable_3:
    print ("Emma te ayudo y encontro la contraseña, ahí encontraron algunas armas utiles")
    contador = contador + 1
elif variable_4 == "no":
    print("no encontraron nada util en los alrededores")
else:
    print("no pudiste encontrar la contraseña, tal ves hubo un compañero que no encontraste")
time.sleep(2)

if contador == 0:
    print ("perdiste todas tus vidas")
else:
    contador == contador > 0
    print ("te quedaron estas vidas" , contador)
    print ("sobreviviste por esta vez ¡felicidades!")
```