#### Imprimir mensajes

Con la función `print` podemos imprimir texto en la consola del usuario.

```python
print('Hello world!')
```

En caso de utilizar más de un `print`, cada uno de estos será una nueva línea en la consola. Además, podemos intercambiar entre el uso de comillas simples (`'`) y comillas dobles (`"`).

```python
print('Hola soy Pepa')
print("Hola soy Luna")
```

Pero hay tener cuidado con las comillas, si no usamos las mismas para abrir y cerrar se producirá un error.

```python
print('Hola soy perro playero")
```
```bash
ERROR!
File "<string>", line 1
    print('Hola soy perro playero")
          ^
SyntaxError: unterminated string literal (detected at line 1)
```

#### Imprimir mensajes concatenados

Podemos utilizar el `print` para concatenar distintos textos en un mismo mensaje.
```python
print('Hola soy', 'Pepa 🐢')
```

También se pueden concatenar números y otros tipos de valores.
```python
print('Hoy es', 15, 'de enero')
print('Hoy fue mi primera clase de programación:', True)
```

#### Imprimir operaciones aritméticas

Con `print` es posible imprimir el resultado de operaciones aritméticas o matemáticas.
```python
print('2 y 2 son', 2 + 2)
print('La pizza salió $', 20000 / 4, 'por persona')
print('El mejor juego de celular es', 2 ** 10)
```

#### Recibir información del usuario

Para hacer nuestros programas más dinámicos, le podemos pedir información al usuario con `input`.
```python
nombre = ''
nombre = input('Dime tu nombre: ')
print('Hola', nombre, '😺')
```

Pero la información entregada por `input` siempre será un _string_, por lo que será necesario hacer _casting_ para poder utilizarla como corresponde.
```python
edad = 0
edad = int(input("Dime tu edad: "))
print('Por lo menos has vivido', edad + 365, 'días')
```

#### Revisar el tipo de dato

Si alguna vez no están seguros sobre el tipo de algún dato, pueden usar la función `type` para verificarlo.
```python
print(type(3 + 1.3))        # 3 + 1.3 = 4.3
print(type('holo' * 3))     # 'holo' * 3 = 'holoholoholo'
print(type(20 / 5))         # 20 / 5 = 4.0
print(type(True + True))    # True + True = 1 + 1 = 2
```

#### Probar código

Finalmente, no tengan miedo a probar lo que no saben. Aprovechen que pueden probar en un ambiente seguro y que no afectará sus computadores.

Por ejemplo, cuando revisamos las operaciones aritméticas, no estábamos seguros de qué pasaría si aplicábamos una doble negación a un número.
```python
print(--2)                  # 2
```

En caso de un error, recuerden que los errores se deben leer desde abajo hacia arría.
```python
print('10' + 1)
```
```bash
ERROR!
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
```
* Primero se nos indicará cuál fue el error: `TypeError: can only concatenate str (not "int") to str`
* Después en qué parte del código sucedió: `line 1`


## Material adicional

Para aquellos que quieran practicar con la programación en bloques, les recomendamos las siguientes páginas:
* [🧩 Blockly](https://blockly.games/?lang=es)
* [🥕 Coding for carrots](https://www.google.com/doodles/celebrating-50-years-of-kids-coding?doodle=32615474&platform=2&domain_name=google.com&hl=es)
* [🐦 La Hora del Código Chile: Condorito](https://www.horadelcodigo.cl/condorito/v2/juego/level1.html)
* [⛏️ La Hora del Código Chile: Minecraft](https://studio.code.org/s/mc/lessons/1/levels/1?lang=es-MX)
* [🕰️ La Hora del Código Chile: Más actividades](https://horadelcodigo.cl/tutoriales/)