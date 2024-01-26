```python
import random
from random import randint

dinero = 10000
continuar= True
print ("Hola, bienvenido a pythonbet, tienes", dinero, "pesos")
print ("Buena suerte!! :3")

print("____________________________________________________________________")

print("Reglas")
print("Multiplica por 2 el dinero apostado")
print("Una vez se acabe tu saldo, no podrás volver a jugar")
print("No puedes apostar dinero que no tienes")

color=["Rojo","Negro"]

while continuar :
  print("____________________________________________________________________")
  respuesta=int(input("que quieres jugar? Introduce 1 (carta), 2 (color) o 3(Par o impar) o 4(Para salir)"))
  
  if respuesta==1:
    carta= int(input("Son cartas del 1 al 12, a que carta quieres apostar?"))
    while carta > 12 or carta < 0 :
      print ("Tiene que ser un carta entre 0 y 12")
      numero= int(input("Entonces, a que carta quieres apostar?"))
    bet= int(input("Cuanto quieres apostar?"))
    while bet > dinero or bet < 1 :
      print("No tienes esa cantidad de dinero")
      bet= int(input("Entonces, cuanto?"))
    Ran= randint(0,12)
    print("Ha salido el numero: ", Ran)
    if carta == Ran :
      dinero += 2*bet
      print("Ganaste", 2*bet, "pesos")
    else :
      dinero -= bet
      print ("Perdiste, vuelve a intentarlo!")
      print ("Ahora tienes", dinero , "pesos")
     
  if respuesta==2:
    color=["rojo","negro"]
    col=(input("A que color quieres apostar? (Rojo o Negro)  ").lower())
    while col not in color:
      print("Solo puedes apostar a Rojo o Negro")
      col=input("Entre rojo o negro, a que quieres apostar? (1: Rojo ; 2: Negro)" )
    bet= int(input("Cuanto quieres apostar?"))
    while bet > dinero or bet < 1 :
      print("No tienes esa cantidad de dinero")
      bet= int(input("Entonces, cuanto?"))
    C= random.choice(color)
    print( "Ha salido el color: ", C)
    if col == C :
      dinero += 2*bet
      print("Ganaste", 2*bet, "pesos")
    else :
      dinero -= bet
      print ("Perdiste, vuelve a intentarlo!")
    print ("Ahora tienes", dinero , "pesos")
    
  if respuesta==3:
     P=["par", "impar"]
     par=(input("Par o Impar: ").lower())
     while par not in P:
       print("Tienes que apostar Par o Impar")
       par=(input("Par o Impar: ").lower())
     bet= int(input("Cuanto quieres apostar? "))
     while bet > dinero or bet < 1 :
       print("No tienes esa cantidad de dinero")
       bet= int(input("Entonces, cuanto?"))
     PI=randint(0,49)
     print(" Ha salido el numero: ", PI)
     if PI%2==0 and par=="par":
       dinero += bet
       print("Ganaste", bet, "pesos")
     elif PI%2==1 and par=="impar":
       dinero += 2*bet
       print("Ganaste", bet, "pesos")
     else:
       dinero -= bet
       print ("Perdiste, vuelve a intentarlo!")
     print ("Ahora tienes", dinero , "pesos")
     
  if respuesta==4:
      continuar = False
      print('vuelve la proxima vez!')
    
  if dinero == 0 :
      continuar = False
      print ("Lo siento, perdiste todo tu dinero :c")
      print ("Porfavor abandone el juego")
```