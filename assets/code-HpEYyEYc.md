#### Contando con `while`

En clases vimos cómo hacer un código que cuenta automáticamente hasta 5.
```python
i = 0

while i > 5:
    i = i + 1
    print(i)
    
print('TERMINO')
```

Pero, ¿qué pasa si empezamos a hacerle ciertas modificaciones?
* Si cambiamos el orden entre `i = i + 1` y `print(i)`, entonces ahora nuestro código contará desde el 0 hasta el 4.
    ```python
    i = 0

    while i < 5:
        print(i)
        i = i + 1
        
    print('TERMINO')
    ```

* En cambio, si quitamos el `i = i + 1`, entonces ahora el código nunca terminará y siempre imprimirá `0`.
    ```python
    i = 0

    while i < 5:
        print(i)
        
    print('TERMINO')
    ```

* También podemos modificar la condición de forma que nuestro código nunca termine de ejecutarse.
    ```python
    i = 0

    while True:
        i = i + 1
        print(i)
        
    print('TERMINO')
    ```

* O hacer que el ciclo nunca se ejecute (Nótese que ahora es `1 > 5` y no `1 < 5`).

    ```python
    i = 0

    while i > 5:
        i = i + 1
        print(i)
        
    print('TERMINO')
    ```

#### Validar la respuesta del usuario

Finalmente, vimos que utilizando `while`, podemos validar que el usuario nos entregue una respuesta dentro de un rango esperado, por ejemplo: las alternativas "a", "b", "c" y "d".
```python
respuesta = input('Indica tu respuesta (a, b, c, d): ')

while not (respuesta == 'a' or respuesta == 'b' or respuesta == 'c' or respuesta == 'd'):
    print('Debes ingresar: a, b, c, d')
    respuesta = input('Indica tu respuesta (a, b, c, d): ')

print('WIIIII 🚀')
```

#### Dado

Utilizamos `randint` para obtener un número entero al alzar entre 1 y 6, inclusive.

```python
from random import randint

numero_dado = randint(1, 6)
print('El dado dio', numero_dado)
```

#### Bola 8

También podemos utilizar `random` para obtener un número decimal entre 0 y 1, inclusive. Lo anterior lo podemos utilizar para con **probabilidades** encontrar la respuesta de la bola 8.

```python
from random import random

input('Hazme una pregunta y te responderé...')

probabilidad_bola_8 = random()
if probabilidad_bola_8 < 0.2:
    print('SI')
elif probabilidad_bola_8 < 0.4:
    print('TAL VEZ')
elif probabilidad_bola_8 < 0.6:
    print('NO')
elif probabilidad_bola_8 < 0.8:
    print('NUNCA')
else:
    print('VUELVE A PREGUNTAR')
```

#### Cachipún (Bonus)

Haciendo uso `if/elif/else`, podemos hacer un cachipún donde el computador donde siempre saca "piedra".
```python
print('Hagamos un cachipun. Pon papel, piedra o tijera')

mano_jugador = input('> ')
mano_computador = 'piedra'

print('Mano jugador:   ', mano_jugador)
print('Mano computador:', mano_computador)

if mano_jugador == mano_computador:
    print('EMPATE')
elif mano_jugador == 'papel':
    if mano_computador == 'tijera':
        print('PERDISTE')
    else:
        print('GANASTE')
elif mano_jugador == 'piedra':
    if mano_computador == 'papel':
        print('PERDISTE')
    else:
        print('GANASTE')
elif mano_jugador == 'tijera':
    if mano_computador == 'piedra':
        print('PERDISTE')
    else:
        print('GANASTE')
```

Ahora, utilizando el módulo `random`, haremos que el computador también elija algo al azar.
```python
from random import randint

print('Hagamos un cachipún. Pon papel, piedra o tijera')

mano_jugador = input('> ')
mano_computador = ''

numero = randint(1, 3)
if numero == 1:
    mano_computador = 'papel'
elif numero == 2:
    mano_computador = 'piedra'
else:
    mano_computador = 'tijera'

print('Mano jugador:   ', mano_jugador)
print('Mano computador:', mano_computador)

if mano_jugador == mano_computador:
    print('EMPATE')
elif mano_jugador == 'papel':
    if mano_computador == 'tijera':
        print('PERDISTE')
    else:
        print('GANASTE')
elif mano_jugador == 'piedra':
    if mano_computador == 'papel':
        print('PERDISTE')
    else:
        print('GANASTE')
elif mano_jugador == 'tijera':
    if mano_computador == 'piedra':
        print('PERDISTE')
    else:
        print('GANASTE')
``` 

---

## Código clase

#### Calcular Factorial

* Versión 1
    ```python
    numero = 5
    resultado = 1

    while numero >= 1:
        # Descomenta los prints para ver cómo se comporta el código en cada ciclo del while
        # print('>', 'num', numero, 'res', resultado)
        resultado = resultado * numero
        numero = numero - 1
        # print('<', 'num', numero, 'res', resultado)

    print('Resultado:', resultado)
    ```

* Versión 2
    ```python
    numero = 5
    resultado = 5

    while numero > 1:
        # Descomenta los prints para ver cómo se comporta el código en cada ciclo del while
        # print('>', 'num', numero, 'res', resultado)
        numero = numero - 1
        resultado = resultado * numero
        # print('<', 'num', numero, 'res', resultado)

    print('Resultado:', resultado)
    ```

#### Tirar un dado hasta que el usuario quiera que termine
```python
import random

tirar_dado = True
caras = 3

while tirar_dado:
    dado = random.randint(1, caras)
    print('Resultado', dado)

    print('Ingresa solo Enter para continuar')
    print('Ingresa algo y Enter para terminar')
    # Recibimos el input del usuario y comprobamos si es vació o no.
    tirar_dado = (input('> ') == '')
```