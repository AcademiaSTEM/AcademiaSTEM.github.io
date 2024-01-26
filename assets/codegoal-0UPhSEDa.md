```python
import time

equipo_humano = str(" ")
goles_humano = 0
goles_pc = 0

print("""    ¡Bienvenido a la final del PC UEFA CHAMPIONS LEAGUE!  """)
time.sleep(1)
print("En este emocionante partido tendremos a 2 grandes equipos")
print ()
equipo_humano = input("Nombra tu equipo: ")
print ()
print("¡Adelante! Ahora empieza el primer tiempo con: ")
time.sleep(1)
print("     PC Football Club vs ", equipo_humano)
print()

time.sleep(1)

print(
    "Los equipo salen a la cancha en un tenso encuentro, comienza el partido, y el balon es para",equipo_humano)
print()
time.sleep(1)

juego1 = input(
    "El delantero toma el balon y corre fuertemente hacia el arco, \
¿Que direccion tomas? ")

if juego1 == "derecha":
  print ()
  print('El jugador de', equipo_humano, 'posiciona el balon y es \
¡GOOOOOOL para', equipo_humano,'!')
goles_humano = goles_humano+1

if juego1 == "izquierda":
  print("El jugador ha perdido el balon y ahora es de PC Football club")
  time.sleep(1)
  proceder1 = input('¿Deseas atacar o defender? ')
  if proceder1 == "atacar":
    print ()
    print("Tarjeta amarrilla para", equipo_humano)

  else:
    print ()
    print("La defensa no sirvió para nada")
    time.sleep(1)
    print("PC Football Club llega hasta el arco y es GOOOOOOOL para el equipo local")
    goles_pc = goles_pc+1
  
print()
time.sleep(1)

print("Continuamos el partido con un fuerte remate de", equipo_humano)

print ()

juego2 = input("Nuevamente el delantero avanza con el balon, \
¿Con cuanta fuerza patea? ")

if juego2 == "mucha":
  print ()
  print("El jugador pierde el balon y lo recupera PC Football Club")
  
perdida = input("¿Deseas atacar o defender? ")
if perdida == 'atacar':
  print ()
  print('Casi gol para', equipo_humano)
  print('¡Excelente jugada!, falto un poco de finura en el termino de la jugada')
  
else:
  print ()
  print("¡Un jugador de tu equipo logró atrapar el balón!")

jugada_correr = input('¿Deseas correr al arco rival? ')
if jugada_correr == 'si':
  print ()
  print('¡GOOOOOOL de', equipo_humano,'!')
  goles_humano = goles_humano+1
  print("¡Excelente jugada!")
if jugada_correr == 'no':
  print("Pierdes la jugada:(")

print()
time.sleep(1)

print ("¡Finaliza el primer tiempo!")
time.sleep (1)
print ('el contador va', goles_humano, equipo_humano, 'VS', goles_pc, "PC Football Club")
print ()

time.sleep (2)

print ("Empieza el segundo tiempo y esta vez el balon es para PC Football Club")
print ()
time.sleep (1)

juego3 = input ("El equipo local decide empezar con un juego violento,\
¿que juego prefieres, violento o pacifico? ")

if juego3 == 'violento':
  print ()
  print (equipo_humano, 'le sigue el juego a PC Football Club y juega de forma violenta')
  time.sleep (1)
  print (equipo_humano, '¡Obtiene una ventaja considerable y llega al arco rival!')
  print ()
  time.sleep (2)
  print ("¡y es GOOOL para ", equipo_humano, '!')
  goles_humano = goles_humano+1
else:
  print ()
  print (equipo_humano, "Decide jugar pacificamente\
  y PC Football Club ¡aprovecha su ventaja!")
  time.sleep(1)
  print ()
  print ("¡y es GOOOOL para PC Football Club!")
  goles_pc = goles_pc+1
  print ()
  time.sleep (1)

print ("¡Este segundo tiempo a pasado volando! igual que los jugadores de ",equipo_humano)
print ()
time.sleep (2)

juego4 = input('Uno de tus jugadores se ha lesionado, ¿te gustaria cambiarlo? ')

if juego4 == 'si':
  print ()
  print ('El nuevo jugador ingresa con todo al campo de juego')
  time.sleep (1)
  print ()
  print ('toma el control y')
  print ("¡Es GOOOOOL de ", equipo_humano, '!')
  goles_humano = goles_humano+1
  
else: 
  print ()
  print ("El jugador de ",equipo_humano,'no logro alcanzar el balon a tiempo y')
  print ('Le regala la jugada a PC Football Club')
  time.sleep (1)
  print()
  print ('y es GOOOOOL de PC Football Club')
  goles_pc = goles_pc+1

time.sleep (2)
print ()

print ('Ya en los ultimos minutos del partido esperamos un último gol \
¡para terminar con broche de oro la jornada!')
time.sleep (1)
print ()

juego_final = input('Tus jugadores ya estan cansados, ¿Quieres presionarlos? ')

if juego_final == 'si':
  print ()
  print (equipo_humano, "usa sus ultimos esfuerzos y ¡llega al arco rival!")
  time.sleep (1)
  print ("!Pillan desprevenido al arquero de PC Football Club")
  print ()
  print ("¡y es GOOOOL para", equipo_humano,'!')
  goles_humano = goles_humano+1
else:
  print ()
  print ("los jugadores de ", equipo_humano,'estan cansados y\
  ¡PC Football Club aprovecha!')
  print ('PC Football Club corre fuertemente al arco de', equipo_humano)
  time.sleep(1)
  print ()
  print ('¡y es GOOOOOL de PC Football Club!')
  goles_pc = goles_pc+1

print ()
time.sleep(2)

print('¡TERMINO! ¡TERMINO! ¡TERMINOOOO!')
time.sleep(1)
print ( goles_humano, equipo_humano, 'VS', goles_pc, "PC Football Club")
print ()
time.sleep(1)
print ("¡Y así finaliza este emocionante partido!")
print ("muchisimas gracias por ser parte de esta transmision")
```