```python
import time
from random import random, randint
AlternativasCorrectas = 0
AlternativasIncorrectas = 0
print("PC: ¡BIENVENIDOS SEAN AL PROGRAMA MÁS ENTRETENIDO DE LA HISTORIA! Aquí podrán disfrutar de tres minijuegos breves. El primer juego es un desafío de conocimientos generales, donde tú y tu equipo tendrán que responder 10 preguntas sobre entretenimiento. Si lo logran, pasarán al segundo juego, donde tendrán que poner a prueba su intuición y su suerte. El objetivo es adivinar la suma de cuatro dados que se lanzarán al azar. Al final, habrá un duelo de cachipún contra la PC. ¿Piedra, papel o tijera?.")
print()
print("Presiona la tecla ´enter´ para avanzar al primer juego")
print()
print()
Confirmación = input()
print()
print("PC: BIENVENIDOOOOOS A ESTE QUIZ CORTITO DE 10 PREGUNTAS")
print()
time.sleep(3)
print("TEMA: Entretenimiento.")
print()
time.sleep(3)
print("INSTRUCCIONES GENERALES: Aquí podrán demostrar cuánto saben de cine, música, videojuegos y más. Para jugar, deben formar equipos de dos o más personas. Cada equipo tendrá que responder 10 preguntas con cuatro opciones cada una (A, B, C o D). Si un jugador se equivoca, pasa el turno al siguiente. Si logran responder todas las preguntas con menos de tres errores, ¡son los ganadores! Pero si fallan más de tres veces, es game over.")
print("Presiona la tecla ´enter´ para continuar")
print()
print()
Confirmación = input()
print()
while AlternativasCorrectas < 9:
    AlternativasCorrectas = 0
    AlternativasIncorrectas = 0
    print("1. ¿De qué color es el icónico personaje de animación Shrek?. Opción A: Azúl. Opción B: Amarillo. Opción C: Café. Opción D: Verde. ")
    Pregunta1 = input("La respuesta correcta es: ")
   
    while not (Pregunta1 == 'a' or Pregunta1 == 'b' or Pregunta1 == 'c' or Pregunta1 == 'd' or Pregunta1 == 'A' or Pregunta1 == 'B' or Pregunta1 == 'C' or Pregunta1 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta1 = input('Intentalo de nuevo: ')
        print()
    if (Pregunta1 ==  "D" or Pregunta1 == "d"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, Shrek es de color verde.")
        print()
       
    print("2. ¿Cómo se llama el videojuego más vendido de la historia?. Opción A: Fortnite. Opción B: GTA. Opción C: Minecraft. Opción D: Mario. ")
    Pregunta2 = input("La respuesta correcta es: ")
    while not (Pregunta2 == 'a' or Pregunta2 == 'b' or Pregunta2 == 'c' or Pregunta2 == 'd' or Pregunta2 == 'A' or Pregunta2 == 'B' or Pregunta2 == 'C' or Pregunta2 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta2 = input('Intentalo de nuevo: ')
        print()
    if (Pregunta2 ==  "C" or Pregunta2 == "c"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, Minecraft es el videojuego más vendido de la historia.")
        print()
    print("3. ¿Cómo se llama el tercer disco de Soda Stereo? Opción A: Signos Opción B: Dynamo. Opción C: Nada Personal. Opción D: Canción Animal.")
    Pregunta3 = input("La respuesta correcta es: ")
    while not (Pregunta3 == 'a' or Pregunta3 == 'b' or Pregunta3 == 'c' or Pregunta3 == 'd' or Pregunta3 == 'A' or Pregunta3 == 'B' or Pregunta3 == 'C' or Pregunta3 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta3 = input('Intentalo de nuevo: ')
    if (Pregunta3 ==  "A" or Pregunta3 == "a"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, El tercer disco de Soda Stereo se llama Signos")
        print()
       
    print("4. ¿Quién es el enemigo del Supervillano Duende Verde? Opción A: Iron Man Opción B: Hulk. Opción C: Spider Man. Opción D: Blue Bettle.")
    Pregunta4 = input("La respuesta correcta es: ")
    while not (Pregunta4 == 'a' or Pregunta4 == 'b' or Pregunta4 == 'c' or Pregunta4 == 'd' or Pregunta4 == 'A' or Pregunta4 == 'B' or Pregunta4 == 'C' or Pregunta4 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta4 = input('Intentalo de nuevo: ')
    if (Pregunta4 ==  "C" or Pregunta4 == "c"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, El enemigo del Duende Verde es Spider Man.")
        print()
       
    print("5. A la banda chilena Los Prisioneros se les conoce por cantar sobre: Opción A: Desamor. Opción B: Protesta social. Opcion C: Infidelidades. Opción D: Fiestas y diversión.  ")
    Pregunta5 = input("La respuesta correcta es: ")
    while not (Pregunta5 == 'a' or Pregunta5 == 'b' or Pregunta5 == 'c' or Pregunta5 == 'd' or Pregunta5 == 'A' or Pregunta5 == 'B' or Pregunta5 == 'C' or Pregunta5 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta5 = input('Intentalo de nuevo: ')
    if (Pregunta5 ==  "B" or Pregunta5 == "b"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, Algo muy característico de Los Prisioneros son sus letras sobre protesta social.")
        print()
    print("6. ¿Qué es Fernanfloo? Opción A: Periodista. Opción B: Artista urbano. Opción C: Un crack. Opción D: Youtuber  ")
    Pregunta6 = input("La respuesta correcta es: ")
    while not (Pregunta6 == 'a' or Pregunta6 == 'b' or Pregunta6 == 'c' or Pregunta6 == 'd' or Pregunta6 == 'A' or Pregunta6 == 'B' or Pregunta6 == 'C' or Pregunta6 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta6 = input('Intentalo de nuevo: ')
    if (Pregunta6 ==  "D" or Pregunta6 == "d" or Pregunta6 == "C" or Pregunta6 == "c"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta. Fernanfloo es un youtuber crack.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, Fernanfloo es un reconocido youtuber de El Salvador.")
        print()
       
    print("7. ¿Quién ha sido considerado por años el Rey del Pop? Opción A: Bad Bunny. Opción B: Michael Jackson. Opción C: Bruno Mars. Opción D: Justin Bieber.")
    Pregunta7 = input("La respuesta correcta es: ")
    while not (Pregunta7 == 'a' or Pregunta7 == 'b' or Pregunta7 == 'c' or Pregunta7 == 'd' or Pregunta7 == 'A' or Pregunta7 == 'B' or Pregunta7 == 'C' or Pregunta7 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta7 = input('Intentalo de nuevo: ')
    if (Pregunta7 ==  "B" or Pregunta7 == "b"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, Michael Jackson ha sido considerado el Rey del Pop durante decádas.")
        print()
   
    print("8. ¿De qué banda popular es la canción Highway to Hell?. Opción A: The Beatles. Opción B: Black Sabbath. Opción C: One Direction. D: AC/DC.")
    Pregunta8 = input("La respuesta correcta es: ")
    while not (Pregunta8 == 'a' or Pregunta8 == 'b' or Pregunta8 == 'c' or Pregunta8 == 'd' or Pregunta8 == 'A' or Pregunta8 == 'B' or Pregunta8 == 'C' or Pregunta8 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta8 = input('Intentalo de nuevo: ')
    if (Pregunta8 ==  "D" or Pregunta8 == "d"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, La canción Highway to Hell es de la banda australiana AC/DC.")
        print()
       
    print("9. ¿Cúal de los siguientes videojuegos fué el ganador del Game Of The Year (GOTY) 2023?. Opción A: Baldur's Gate 3. Opción B: Marvel's Spider-Man 2. Opción C: Alan Wake 2. Opción D: The Legend of Zelda: Tears of the Kingdom.")
    Pregunta9 = input("La respuesta correcta es: ")
    while not (Pregunta9 == 'a' or Pregunta9 == 'b' or Pregunta9 == 'c' or Pregunta9 == 'd' or Pregunta9      == 'A' or Pregunta9 == 'B' or Pregunta9 == 'C' or Pregunta9 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta9 = input('Intentalo de nuevo: ')
    if (Pregunta9 ==  "A" or Pregunta9 == "a"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, El juego ganador del GOTY 2023 se llama Baldur's Gate 3.")
        print()
       
    print("10. ¿Quién fúe el primer superhéroe de los cómics? Opción A: Titán. Opción B: Superman. Opción C: Iron Man. Opción D: Spider Man.")
   
    Pregunta10 = input("La respuesta correcta es: ")
    while not (Pregunta10 == 'a' or Pregunta10 == 'b' or Pregunta10 == 'c' or Pregunta10 == 'd' or Pregunta10      == 'A' or Pregunta10 == 'B' or Pregunta10 == 'C' or Pregunta10 == 'D'):
        print('Debes ingresar: A, B, C o D')
        Pregunta10 = input('Intentalo de nuevo: ')
    if (Pregunta10 ==  "B" or Pregunta10 == "b"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, El primer superhéroe de los cómics es el Hombre De Acero, alias Superman.")
        print()
   
    print("PREGUNTA BONUS: ¿Cuál de estos villanos tiene una Mega mente? Opción A: Megamente. Opción B: Humpty Dumpty. Opción C: Rumpelstiltskin. Opción D: Sid Phillips.")
    PreguntaBonus = input("La respuesta correcta es: ")
    while not (PreguntaBonus == 'a' or PreguntaBonus == 'b' or PreguntaBonus == 'c' or PreguntaBonus == 'd' or PreguntaBonus      == 'A' or PreguntaBonus == 'B' or PreguntaBonus == 'C' or PreguntaBonus == 'D'):
        print('Debes ingresar: A, B, C o D')
        PreguntaBonus = input('Intentalo de nuevo: ')
    if (PreguntaBonus ==  "A" or PreguntaBonus == "a"):
        AlternativasCorrectas = AlternativasCorrectas + 1
        print("Tu respuesta es... Correcta.")
        print()
    else:
        AlternativasIncorrectas = AlternativasIncorrectas + 1
        print("Tu respuesta es... Incorrecta, 'Megamente' tiene una mega mente.")
        print()
       
    time.sleep(3)
       
    print("Alternativas correctas: ", AlternativasCorrectas)
    print("Alternativas incorrectas: ", AlternativasIncorrectas)
    print()
    if (AlternativasCorrectas < 9):
        time.sleep(4)
        print("Lamentamos decirte que tu equipo ha perdido el Quiz, vuelve a intentarlo hasta tener menos de 2 preguntas incorrectas.")
        print("Presiona la tecla ´enter´ para reintentar")
        Confirmación = input()
        print()
    else:
        time.sleep(4)
        print("Nos alegra decirte que tu equipo ha ganado el Quiz!!!.")
       
print("Presiona la tecla ´enter´ para avanzar al segundo minijuego")
Confirmación = input()

print()  
print()
print()
print("PC: Lanzaremos cuatro dados de seis caras. ¿Puedes predecir la suma de los resultados?")
print("Usuario: Pongamoslo a prueba.")
       
       
resultado_final = 1
Respuesta = 0
while Respuesta != resultado_final:
    print("PC: ¿Cuál crees que será el resultado final? ")
    Respuesta = int(input())
    while not (Respuesta < 25 and Respuesta > 3):
        print('Debes ingresar números del  4 al 24 debido a la lógica de los dados, intentalo de nuevo ')
        print("PC: ¿Cuál crees que será el resultado final? ")
        Respuesta = int(input())
    numero_dado1 = randint(1, 6)
    print()
    print ("Primer dado:", numero_dado1)
    numero_dado2 = randint(1, 6)
    print ("Segundo dado:", numero_dado2)
    resultado =  numero_dado1 + numero_dado2
    print("El resultado es: " + str(resultado))
    print()
    numero_dado3 = randint(1, 6)
    print ("Tercer dado:", numero_dado3)
    numero_dado4 = randint(1, 6)
    print ("Cuarto dado:", numero_dado4)
    resultado2 =  numero_dado3 + numero_dado4
    print("El resultado es: " + str(resultado2))
    print()
   
   
    resultado_final = resultado + resultado2
    print("El resultado final es: " + str(resultado_final))
    print()
   
    if (Respuesta != resultado_final):
        print("Tu predicción ha sido incorrecta. El resultado final es: ")
        print(int(resultado_final))
        print("Intentalo de nuevo.")
    else:
        print("PC: NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO, LUEGO DE 314159265359 INTENTOS, ME HAS GANADO.")
        print()
print("Presiona la tecla ´enter´ para para avanzar al tercer minijuego")
Confirmación = input()
       
       
print("PC: ¡Juguemos Cachipún hasta la tercera!")
VictoriaPC = 0
VictoriaU= 0
while VictoriaU < 3 and VictoriaPC < 3:
   
    NúmeroCachipúnUsuario = input("¿Piedra Papel o Tijera? ")
    while not (NúmeroCachipúnUsuario == 'Piedra' or NúmeroCachipúnUsuario == 'piedra' or NúmeroCachipúnUsuario == 'Papel' or NúmeroCachipúnUsuario == 'papel' or NúmeroCachipúnUsuario == 'Tijera' or NúmeroCachipúnUsuario == 'tijera'):
        print('Debes ingresar piedra papel o tijera. Intentalo de nuevo: ')
        NúmeroCachipúnUsuario = input("¿Piedra Papel o Tijera? ")
    if (NúmeroCachipúnUsuario == "Piedra" or NúmeroCachipúnUsuario == "piedra"):
        NúmeroCachipúnUsuario = 1
    if (NúmeroCachipúnUsuario == "Papel" or NúmeroCachipúnUsuario == "papel"):
        NúmeroCachipúnUsuario = 2
    if (NúmeroCachipúnUsuario == "Tijera" or NúmeroCachipúnUsuario == "tijera"):
        NúmeroCachipúnUsuario = 3
   
    NúmeroCachipúnPC = randint(1,3)
    if (NúmeroCachipúnPC == 1):
        print("PC: Piedra")
    elif (NúmeroCachipúnPC == 2):
        print("PC: Papel")
    elif (NúmeroCachipúnPC == 3):
        print("PC: Tijera")
     
    if (VictoriaPC == 3):
        print("Ha ganado la PC.")
    if (VictoriaU == 3):
        print("Ha ganado el usuario.")
       
    if (NúmeroCachipúnUsuario == 1 and NúmeroCachipúnPC == 2):
        VictoriaPC = VictoriaPC + 1
        print("Punto para la PC.")
       
    elif (NúmeroCachipúnUsuario == 2 and NúmeroCachipúnPC == 1):
        VictoriaU = VictoriaU + 1
        print("Punto para el usuario.")
    elif (NúmeroCachipúnUsuario == 2 and NúmeroCachipúnPC == 3):
        VictoriaPC = VictoriaPC + 1
        print("Punto para la PC.")
    elif (NúmeroCachipúnUsuario == 3 and NúmeroCachipúnPC == 2):
        VictoriaU = VictoriaU + 1
        print("Punto para el usuario.")
    elif (NúmeroCachipúnUsuario == 3 and NúmeroCachipúnPC == 1):
        VictoriaPC = VictoriaPC + 1
        print("Punto para la PC.")
    elif (NúmeroCachipúnUsuario == 1 and NúmeroCachipúnPC == 3):
        VictoriaU = VictoriaU + 1
        print("Punto para el usuario.")
    elif (NúmeroCachipúnUsuario ==  NúmeroCachipúnPC):
        print("Empate.")
       
    print(VictoriaU)
    print(VictoriaPC)
if (VictoriaPC == 3):
        print("Ha ganado la PC.")
if (VictoriaU == 3):
        print("Ha ganado el usuario.")  

print("Presiona la tecla ´enter´ para recibir tu premio.")
Confirmación = input()
print()
time.sleep(3)
print("Era broma, no hay premio pero felicidades igualmente.")
```