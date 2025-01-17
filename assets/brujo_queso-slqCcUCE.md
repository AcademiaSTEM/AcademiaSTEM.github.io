```python
from random import randint
mate = ""
opcion = ""
persona = input("¿cual es tu nombre?: ")
print("Bienvenido", persona, "a la travesía del laberinto con el Brujo del Queso")
print('(≽^•⩊•^≼)୭ 🧀')
print("Empezarás esta travesía en un laberinto escapando del Brujo del Queso (un gato)")
camino1 = input("Ves al frente, te encuentras 3 caminos, elije uno de ellos, izquierda, derecha, adelante: ").lower()
if camino1 == 'izquierda':
    print("Te quedaste en un camino sin salida, el Brujo del Queso te hizo queso😿")
elif camino1 == 'derecha':
    mate = int(input("Ahora debes resolver el siguiente problema para avanzar 10 + 10 * 10: "))
    if mate == 110 :
        print("Correcto, puedes retomar el camino")
        camino2 = input("Te encontraste otros 2 caminos, izquierda y derecha, de vida o muerte: ").lower()
        if camino2 == 'izquierda':
            print("¿Por qué hiciste esto?, caíste en una trampa del Brujo del Queso, ahora tendrás que resolver un acertijo para sobrevivir.")
            print('¿Qué pesa más, un kilo de queso cabra, un kilo de cabra o ninguno?')
            respuesta = input('> ').lower()
            if 'ninguno' in respuesta:
                print('Has acertado, puedes continuar.')
                print("Brujo del queso: ¡Qué haces aquí papanatas!, te voy a hacer papilla en un cachipún")
                contador=0
                contador2=0
                print('¿Qué quieres jugar, piedra, papel o tijera?')
                jugador=input('> ').lower()
                computador=''
                resultado=''
                while contador<2:
                    compu=randint(1,3)
                    if compu==1:
                        computador='piedra'
                    if compu==2:
                        computador='tijera'
                    if compu==3:
                        computador='papel'
                    print('> El Brujo del Queso jugó', computador)
                    if jugador==computador:
                        resultado='empate'
                        jugador=input('empate,juega de nuevo: ')
                    if jugador=='papel'and computador=='piedra':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if jugador=='papel'and computador=='tijera':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='piedra'and computador=='tijera':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if jugador=='piedra'and computador=='papel':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='tijera'and computador=='piedra':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='tijera'and computador=='papel':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if resultado!= 'empate':
                        contador+=1
                    if resultado == 'ganaste':
                        contador2 += 1
                print('Resultado final:', persona, contador2, '|', 3 - contador2, 'El Brujo del Queso')
                    
                if contador2 > 1:
                    print('Has vencido al Brujo del Queso, las tinieblas desaparecen, las paredes de los laberintos empiezan a decender, la libertad es tuya siendo un legendario guerrero, además un salvador de gatitos.')
                else:
                    print('Parece que no había otra escapatoria aparte de la muerte, este fue tu destino, bueno, al menos lo intentaste, ¿no? ahora tendras que soportar el dolor de ser un queso.')
            else:
                print('Perdiste, la hora del queso ha llegado.')
        if camino2 == "derecha":
            print('¡¡Oh no!!, te encontraste con los gatitos del brujo del queso. ¿Qué harás? matarlos o intentar huir.')
            opcion = input("> ").lower()
            if ("matarlos" in opcion) or ('matar' in opcion):
                print("Eran demasiado, moriste")
            if "huir" in opcion:
                print("!!Oh rayos su papá llegó¡¡")
                print("Brujo del queso: ¡Qué haces aquí papanatas!, te voy a hacer papilla en un cachipun")
                contador=0
                contador2=0
                print('¿Qué quieres jugar, piedra, papel o tijera?')
                jugador=input('> ').lower()
                computador=''
                resultado=''
                while contador<2:
                    compu=randint(1,3)
                    if compu==1:
                        computador='piedra'
                    if compu==2:
                        computador='tijera'
                    if compu==3:
                        computador='papel'
                    print('> El Brujo del Queso jugó', computador)
                    if jugador==computador:
                        resultado='empate'
                        jugador=input('empate,juega de nuevo: ')
                    if jugador=='papel'and computador=='piedra':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if jugador=='papel'and computador=='tijera':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='piedra'and computador=='tijera':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if jugador=='piedra'and computador=='papel':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='tijera'and computador=='piedra':
                        resultado='perdiste'
                        jugador=input('perdiste una ronda: ')
                    if jugador=='tijera'and computador=='papel':
                        resultado='ganaste'
                        jugador=input('ganaste una ronda: ')
                    if resultado!= 'empate':
                        contador+=1
                    if resultado == 'ganaste':
                        contador2 += 1
                print('Resultado final:', persona, contador2, '|', 3 - contador2, 'El brujo del queso')
                    
                if contador2 > 1:
                    print('Has vencido al Brujo del Queso, las tinieblas desaparecen, las paredes de los laberintos empiezan a decender, la libertad es tuya siendo un legendario guerrero, además un salvador de gatitos.')
                else:
                    print('Parece que no habia otra escapatoria aparte de la muerte, este fue tu destino, bueno, al menos lo intentaste no? ahora tendras que soportar el dolor de ser un queso.')
        

    else:
        print("Incorrecto, el Brujo del Queso te hizo queso😿")
    print()
elif camino1 == "adelante":
    print('Encuentras otro camino, pero antes, tendrás que superar esta prueba, eligeré un número al azar del 1 al 5, si logras adivinarlo en 3 intentos, te permitiré avanzar.')
    print()
    brujo = randint(1,5)
    usuario = int(input('Ahora elige tu primer número: '))
    contador = 0
    while contador < 3:
        if usuario == brujo:
            print('Haz adivinado, puedes avanzar.')
            contador = 4
            print('Has logrado avanzar por los terrorificos pasillos del laberinto del brujo del queso, pero espera, hay una última pregunta antes de la batalla final, una adivinanza, resuélvela y te convertirás en una leyenda.')
            print('Aquí va: Dos gatos van caminando por un laberinto, uno de ellos cae en una trampa ¿Quién grita y pide auxilio?')
            input('> ')
            print('Eres tú, tú eres el que grita porque tú eres el que está en el laberinto del gato sobreviviente, el Brujo del Queso. De todas formas, ahora podrás avanzar al final.')
            print()
            print("Brujo del queso: ¡Qué haces aquí papanatas!, te voy a hacer papilla en un cachipún")
            contador3=0
            contador2=0
            print('¿Qué quieres jugar, piedra, papel o tijera?')
            jugador=input('> ').lower()
            computador=''
            resultado=''
            while contador3<2:
                compu=randint(1,3)
                if compu==1:
                    computador='piedra'
                if compu==2:
                    computador='tijera'
                if compu==3:
                    computador='papel'
                print('> El Brujo del Queso jugó', computador)
                if jugador==computador:
                    resultado='empate'
                    jugador=input('empate,juega de nuevo: ')
                if jugador=='papel'and computador=='piedra':
                    resultado='ganaste'
                    jugador=input('ganaste una ronda: ')
                if jugador=='papel'and computador=='tijera':
                    resultado='perdiste'
                    jugador=input('perdiste una ronda: ')
                if jugador=='piedra'and computador=='tijera':
                    resultado='ganaste'
                    jugador=input('ganaste una ronda: ')
                if jugador=='piedra'and computador=='papel':
                    resultado='perdiste'
                    jugador=input('perdiste una ronda: ')
                if jugador=='tijera'and computador=='piedra':
                    resultado='perdiste'
                    jugador=input('perdiste una ronda: ')
                if jugador=='tijera'and computador=='papel':
                    resultado='ganaste'
                    jugador=input('ganaste una ronda: ')
                if resultado!= 'empate':
                    contador3+=1
                if resultado == 'ganaste':
                    contador2 += 1
            print('Resultado final:', persona, contador2, '|', 3 - contador2, 'El brujo del queso')
            if contador2 > 1:
                print('Has vencido al Brujo del Queso, las tinieblas desaparecen, las paredes de los laberintos empiezan a decender, la libertad es tuya siendo un legendario guerrero, además un salvador de gatitos.')
            else:
                print('Parece que no habia otra escapatoria aparte de la muerte, este fue tu destino, bueno, al menos lo intentaste no? ahora tendras que soportar el dolor de ser un queso.')
            
        elif (contador == 2) and (usuario != brujo):
            print('¿No has logrado adivinar despúes de 3 intentos? que patán, has caido en las garras del Brujo del Queso.')
            contador = 4
        else:
            print('Incorrecto, intenta denuevo:')
            usuario = int(input('> '))
            contador += 1
else:
    print('Bobo, ese camino no existe, elige uno de los disponibles')
```