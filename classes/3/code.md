#### Dado

Utilizamos `randint` para obtener un número entero al alzar entre 1 y 6, inclusive.

```python
from random import randint

numero_dado = randint(1, 6)
print('El dado salio', numero_dado)
```

#### Bola 8

También podemos utilizar `random` para obtener un número decimal entre 0 y 1, inclusive. Después podemos utilizar probabilidades para encontrar la respuesta de la bola 8.

```python
from random import random

input('Hazme una pregunta y te responderé...')

numero_bola_8 = random()
if numero_bola_8 < 0.2:
    print('SI')
elif numero_bola_8 < 0.4:
    print('TAL VEZ')
elif numero_bola_8 < 0.6:
    print('NO')
elif numero_bola_8 < 0.8:
    print('NUNCA')
else:
    print('VUELVE A PREGUNTAR')
```

#### Cachipún

Primero haremos un cachipún donde el computador donde siempre saca "piedra".
```python
print('Hagamos un cachipun. Pon papel, piedra o tijera')

mano_jugador = input('> ')
mano_computador = 'piedra'

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

Ahora, haremos que el computador también elija algo al azar.
```python
from random import randint

print('Hagamos un cachipun. Pon papel, piedra o tijera')

mano_jugador = input('> ')
mano_computador = ''

numero = randint(1, 3)
if numero == 1:
    mano_computador = 'papel'
elif numero == 2:
    mano_computador = 'piedra'
else:
    mano_computador = 'tijera'

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