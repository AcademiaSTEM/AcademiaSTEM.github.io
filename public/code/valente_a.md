```python
from random import randint
puntaje_visita=(0)
puntaje_local=(0)
EQUIPO_GANADOR=''
APUESTA_USUARIO1=input('QUE EQUIPO CREES QUE GANA?')
turno1= (randint(1,3))
if turno1==2:
    print("Vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno1==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
    
print ("empezamos de nuevo en el medio campo.....")
turno2= (randint (1,3))
if turno2==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno2==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
print ("Va avanzando este gran partido y estamos cerca de medio tiempo damas y caballeros")
turno3= (randint (1,3))
if turno3==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno3==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
     print('ambos equipos la fallan, epicamente*')
     print(puntaje_local, puntaje_visita)
    
print ("a nada de terminar el primer tiempo, ultima jugada antes de medio tiempo")
turno4= (randint (1,3))
if turno4==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno4==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
    
print('medio tiempo')


print('y volvemos del medio tiempo señoras y señores')
turno5= (randint (1,3))
if turno5==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno5==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)

print('avanzando los dos equipos se preparan pero uno solo o ninguno le van a achuntar')
turno6= (randint (1,3))
if turno6==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno6==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
    
print('ya nos vamos acercando al final de este gran partido')
turno7= (randint (1,3))
if turno7==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno7==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
    
print('ULTIMA JUGADA, ULTIMO MOMENTO, ACA SE DEFINE TODO Y......:')
turno8= (randint (1,3))
if turno8==2:
    print("vaaaa le pega yyyyyyYYYYYY GOOOOOOOOOOOOOOOOOOOOOL del equipo visitante una jugada increible")
    puntaje_visita = puntaje_visita+1
    print(puntaje_local, puntaje_visita)
elif turno8==1:
    print ("Vaaaa le pega yyyyyyYYYYYY GOOOLAZOOOOO SEÑORAS Y SEÑORES EL EQUPO LOCAL LA HIZO")
    puntaje_local = puntaje_local+1
    print(puntaje_local, puntaje_visita)
else:
    print('ambos equipos la fallan, epicamente*')
    print(puntaje_local, puntaje_visita)
if puntaje_local<puntaje_visita:
    EQUIPO_GANADOR='VISITA'
    print(' Y EL GANADOR ES EL EQUIPO VISITA Q MOMENTO TAN HERMOSO DAMAS Y CABALLEROS GOOOOOOOLLLLL')
elif puntaje_local>puntaje_visita:
    EQUIPO_GANADOR='LOCAL'
    print(' Y EL GANADOR ES EL EQUIPO LOCAL Q MOMENTO TAN HERMOSO DAMAS Y CABALLEROS GOOOOOOOLLLLL')
else:
    EQUIPO_GANADOR='EMPATE'
    print('Y ESTE PARTIDO TERMINA EN EMPATE QUE MOMENTO MAS GLORIOSO DAMAS Y CABALLEROS')
    
if APUESTA_USUARIO1!=EQUIPO_GANADOR:
    print('QUE MAL, FALLASTE, PERDISTE -200 COINS')
else:
    print('FELICIDADES, LE ATINASTE, GANASTE +500 COINS')
```

```python
from random import random

input("BIENVENIDO A LA BOLA 8, PUEDES HACERME 3 PREGUNTAS Y YO TE RESPONDERE")

prediccion=random()
print ('prediccion', prediccion)

if prediccion<0.1:
    print("YES")
elif prediccion<0.2:
    print('NAH')
elif prediccion<0.3:
    print('TAL VES')
elif prediccion< 0.4:
    print('ES POCO PROBABLE, PERO PUEDE PASAR')
elif prediccion< 0.5:
    print('ES MUY PROBABLE, PERO NO CERTERO')
elif prediccion< 0.6:
    print('NO VA A OCURRIR JAMAS')
elif prediccion<0.7:
    print('PUEDE PASAR O NO, PERO X AHORA NO VA A PASAR')
elif prediccion<0.8:
    print('PRONTO')
else:
    print(random(), "ESA ES LA PROBABILIDAD")
    
input("HAZME, OTRA PREGUNTA, QUEDAN 2, CON MI SABIDURIA TE RESPONDERE")
prediccion2=random()
print ('prediccion2', prediccion2)

if prediccion2<0.1:
    print("YES")
elif prediccion2<0.2:
    print('NAH')
elif prediccion2<0.3:
    print('TAL VES')
elif prediccion2< 0.4:
    print('ES POCO PROBABLE, PERO PUEDE PASAR')
elif prediccion2< 0.5:
    print('ES MUY PROBABLE, PERO NO CERTERO')
elif prediccion2< 0.6:
    print('NO VA A OCURRIR JAMAS')
elif prediccion2<0.7:
    print('PUEDE PASAR O NO, PERO X AHORA NO VA A PASAR')
elif prediccion2<0.8:
    print('PRONTO')
else:
    print(random(), "ESA ES LA PROBABILIDAD")
    
input("ULTIMA PREGUNTA")
prediccion3=random()
print ('prediccion3', prediccion3)

if prediccion3<0.1:
    print("YES")
elif prediccion3<0.2:
    print('NAH')
elif prediccion3<0.3:
    print('TAL VES')
elif prediccion3< 0.4:
    print('ES POCO PROBABLE, PERO PUEDE PASAR')
elif prediccion3< 0.5:
    print('ES MUY PROBABLE, PERO NO CERTERO')
elif prediccion3< 0.6:
    print('NO VA A OCURRIR JAMAS')
elif prediccion3<0.7:
    print('PUEDE PASAR O NO, PERO X AHORA NO VA A PASAR')
elif prediccion3<0.8:
    print('PRONTO')
else:
    print(random(), "ESA ES LA PROBABILIDAD")
input('ESTAS SATISFECHO CON MI SABIDURIA?')
print("GRACIAS X SU TIEMPO, HASTA LA PROXIMA BYE")
```