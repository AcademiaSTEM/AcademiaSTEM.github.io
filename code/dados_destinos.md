```python
from random import randint
import time
print('Bienvenidos a "Tres dados, tres destinos"')
time.sleep(5)
x = input('¿Quieres jugar? (si o no): ')
if x != 'si':
    print('Ok, vuelva pronto')
    print('')
elif x =="si":
    time.sleep(1)
    print('Empecemos                                                                                                                     ')
    time.sleep(1)
    print('Este gran juego consiste en un tablero de 30 casillas. Para ganar, tienes que llegar a la casilla 30 antes que tu contrincante, cada numero del dado es equivalente a las casillas que avanzas (o retrocedes). Para lograr este objetivo, tendrás que elegir entre 3 dados. ¡Suerte!                                                                                                          ')
    time.sleep(10)
    print('')

    j1 = input('Ingrese el nombre del primer jugador: ')
    j2 = input('Ingrese el nombre del segundo jugador: ')
    print('')
    time.sleep(1)
    p1 = 0
    p2 = 0
    print('Los valores de los dados son los siguientes:')
    time.sleep(1)
    print ("Dado 1 = -1 y 3")
    print ("Dado 2 = -3 y 6")
    print ("Dado 3 = -10 y 12                                              ")
    time.sleep(8)
    print('')
    print('¡Consejo! Sólo utiliza el número del dado')
    print('')
    while p1 < 30 and p2 < 30:
        dado1 = randint (-1, 3)
        dado2 = randint (-1, 3)
        dado3 = randint (-3, 6)
        dado4 = randint (-3, 6)
        dado5 = randint (-10, 12)
        dado6 = randint (-10, 12)
       
        print (j1, "...")
        d_seleccionado1 = int(input("¿Qué dado quieres utilizar?: "))
        if d_seleccionado1 == 1:
            p1 = p1 + dado1
            print (j1, 'ha salido', dado1, ',tu puntaje es', p1)
        elif d_seleccionado1 == 2:
            p1 = p1 + dado3
            print (j1, 'ha salido', dado3, ',tu puntaje es', p1)
        elif d_seleccionado1 == 3:
            p1 = p1 + dado5
            print (j1, 'ha salido', dado5, ',tu puntaje es', p1)
        #time.sleep(2)
       
        print (j2, "...")
        d_seleccionado2 = int(input("¿Qué dado quieres utilizar?: "))
        if d_seleccionado2 == 1:
            p2 = p2 + dado2
            print (j2, 'ha salido', dado2, ',tu puntaje es', p2)
        elif d_seleccionado2 == 2:
            p2 = p2 + dado4
            print (j2, 'ha salido', dado4, ',tu puntaje es', p2)
        elif d_seleccionado2 == 3:
            p2 = p2 + dado6
            print (j2, 'ha salido', dado6, ',tu puntaje es', p2)
     
        #time.sleep(2)
   
    if p1>=30:
        print(j1, 'Eres el ganador del juego ¡Felicitaciones!')
    elif p2>=30:
        print(j2, 'Eres el ganador del juego ¡Felicitaciones!')
```