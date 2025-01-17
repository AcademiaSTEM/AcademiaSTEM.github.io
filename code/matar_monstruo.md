```python
from random import randint
vidas=3
mounstro_1=randint(1,2)
mounstro_2=randint(1,2)
mounstro_3=randint(1,2)
mounstro_4=randint(1,2)
print("MATA AL MONSTRUO")
print("atacar=perder 1 vida")
print("enter=lanzar moneda ganar 1 vida o perder 2 vidas")
print("vidas", vidas)

pasillo_1=input("monstruo 1")
if pasillo_1 == "atacar":
    vidas=vidas
    vidas=vidas-1
    print("vidas", vidas)
    if vidas <= 0:
        print("perdiste")
elif mounstro_1 == 2:
    print("salio", mounstro_1)
    vidas=vidas-2
    print("vidas", vidas)
    if vidas <= 0:
        print("perdiste")
else:
    print("salio", mounstro_1)
    vidas = vidas +1
    print("vidas", vidas)
    
if vidas > 0:
    pasillo_2=input("monstruo 2")
    if pasillo_2 == "atacar":
        vidas= vidas -1
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    elif mounstro_2 == 2:
        print("salio", mounstro_2)
        vidas=vidas-2
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    else:
        print("salio", mounstro_2)
        vidas = vidas +1
        print("vidas", vidas)
        
if vidas > 0:
    pasillo_3=input("monstruo 3")
    if pasillo_3 == "atacar":
        vidas= vidas -1
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    elif mounstro_3 == 2:
        print("salio", mounstro_3)
        vidas = vidas - 2
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    else:
        print("salio", mounstro_3)
        vidas = vidas +1
        print("vidas", vidas)
        
if vidas > 0:
    pasillo_4=input("monstruo 4")
    if pasillo_4 == "atacar":
        vidas= vidas -1
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    elif mounstro_4 == 2:
        print("salio", mounstro_4)
        vidas = vidas - 2
        print("vidas", vidas)
        if vidas <= 0:
            print("perdiste")
    else:
        print("salio", mounstro_4)
        vidas = vidas +1
        print("vidas", vidas)
if vidas >0:
    print("Ganaste")
```