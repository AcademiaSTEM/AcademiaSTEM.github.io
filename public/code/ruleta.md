```python
import random
import time

print("¡Bienvenido al juego de la ruleta!")

dinero = input("Ingresa el monto de dinero que quieres apostar.")

dinero = int(dinero)

apuesta = input("Elige tu número ganador(entre 0 y 10): ")

apuesta = int(apuesta)

if True:
    apuesta = int(apuesta)
    if 0 <= apuesta <= 10:
        resultado = random.randint(0, 10)
        print("La ruleta ha girado y el número ganador es:")
        time.sleep(1)
        print(resultado)

        if apuesta == resultado:
            print("¡Felicidades! Has ganado:")
            time.sleep(1)
            print(dinero*apuesta, "pesos.")
            print("Esperamos que te hayas divertido")
        else:
            print("Lo siento, has perdido tu dinero. Inténtalo de nuevo.")
    else:
        print("Por favor, ingresa un número válido entre 0 y 10.")
```