```python
respuesta10="si"
Pregunta10=input("Quieres jugar piedra papel o tijeras? ")
if Pregunta10==respuesta10:
    from random import randint
    numero=randint(1,3)
    if numero==1:
        mano_compu="piedra"
    if numero==2:
        mano_compu="papel"
    if numero==3:
        mano_compu="tijera"
        for i in range(10): 
            mi_mano=input("juquemos piedra,papel o tijera?, comencemos!,cual escoges? ")
            if mi_mano=="piedra" and mano_compu=="papel":
                print("perdiste, tire papel")
            elif mi_mano=="papel" and mano_compu=="piedra":
                print("ganaste, tire piedra")
            if mi_mano=="tijera" and mano_compu=="piedra":
                print("perdiste, tire piedra")
            elif mi_mano=="piedra" and mano_compu=="tijera":
                print("ganaste, tire tijera")
            if mi_mano=="tijera" and mano_compu=="papel":
                print("ganaste,tire papel")
            elif mi_mano=="papel" and mano_compu=="tijera":
                print("perdiste, tire tijeras")
            if mi_mano=="piedra" and mano_compu=="piedra":
                print("empate, tire piedra")
            if mi_mano=="papel" and mano_compu=="papel":
                print("empate, tire papel")
            if mi_mano=="tijera" and mano_compu=="tijeral":
                print("empate, tijeras")
```