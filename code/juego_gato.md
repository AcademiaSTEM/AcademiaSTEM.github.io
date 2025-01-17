```python
tablero = [' ' for _ in range(9)]

def imprimir_tablero():
    row1 = '| {} | {} | {} |'.format(tablero[0], tablero[1], tablero[2])
    row2 = '| {} | {} | {} |'.format(tablero[3], tablero[4], tablero[5])
    row3 = '| {} | {} | {} |'.format(tablero[6], tablero[7], tablero[8])

    print()
    print(row1)
    print(row2)
    print(row3)
    print()


def verificar_ganador():
    ganador = False
    for i in range(3):
        # Verificar filas
        if tablero[i*3] == tablero[i*3+1] == tablero[i*3+2] != ' ':
            ganador = True
            break
        # Verificar columnas
        if tablero[i] == tablero[i+3] == tablero[i+6] != ' ':
            ganador = True
            break
    # Verificar diagonales
    if tablero[0] == tablero[4] == tablero[8] != ' ':
        ganador = True
    if tablero[2] == tablero[4] == tablero[6] != ' ':
        ganador = True
    return ganador

def verificar_empate():
    empate = True
    for i in range(9):
        if tablero[i] == ' ':
            empate = False
            break
    return empate

# Juego de Piedra, Papel o Tijera para determinar quién inicia
from random import randint
ganador = False
while not ganador:
    print('Hagamos un cachipun. Pon papel, piedra o tijera')
    mano_computador = ''
    mano_jugador = input('> ').lower()
    numero = randint(1, 3)
    if numero == 1:
        mano_computador = 'papel'
    elif numero == 2:
        mano_computador = 'piedra'
    else:
        mano_computador = 'tijera'
    print('Mano jugador: ', mano_jugador)
    print('Mano computador:', mano_computador)
    if mano_computador == mano_jugador:
        print('Empate, juguemos de nuevo')
    elif mano_jugador == 'papel':
        if mano_computador == 'tijera':
            ganador = True
            print('Perdiste, la computadora inicia')
            turno_jugador = False
        else:
            ganador = True
            print('Ganaste, tú inicias')
            turno_jugador = True
    elif mano_jugador == 'piedra':
        if mano_computador == 'papel':
            ganador = True
            print('Perdiste, la computadora inicia')
            turno_jugador = False
        else:
            ganador = True
            print('Ganaste, tú inicias')
            turno_jugador = True
    elif mano_jugador == 'tijera':
        if mano_computador == 'papel':
            ganador = True
            print('Ganaste, tú inicias')
            turno_jugador = True
        elif mano_computador == 'piedra':
            ganador = True
            print('Perdiste, la computadora inicia')
            turno_jugador = False
        else:
            print('Empate, juguemos de nuevo')

# Seleccionar símbolo para el jugador y la computadora
jugador = input("Escoge X o O: ").upper()
if jugador == "X":
    computador = "O"
else:
    computador = "X"
print("Jugador {} y Computadora {}".format(jugador, computador))

# Juego de 3 en raya
print('Las casillas van desde el 1 al 9 de izquierda a derecha')
while True:
    imprimir_tablero()
    if turno_jugador:
        # Turno del jugador
        movimiento = input("Ingresa tu movimiento (1-9): ")
        if tablero[int(movimiento) - 1] == ' ':
            tablero[int(movimiento) - 1] = jugador
            if verificar_ganador():
                imprimir_tablero()
                print("Ganaste!")
                break
            elif verificar_empate():
                imprimir_tablero()
                print("Empate!")
                break
            turno_jugador = False
        else:
            print("Movimiento inválido, intenta de nuevo.")
            continue
    else:
     # Turno de la computadora
        import random
        movimiento_computador = random.randint(1, 9)
        while tablero[movimiento_computador - 1] != ' ':
            movimiento_computador = random.randint(1, 9)
        tablero[movimiento_computador - 1] = computador
        if verificar_ganador():
            imprimir_tablero()
            print('GANO LA PC')
            break
        turno_jugador = True
```