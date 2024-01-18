#### Separar las palabras de una oración

Haciendo uso de `for` y variables para guardar la información, podemos separar las palabras e imprimirlas.
```python
palabra = ''
for carácter in 'Hola mundo Chao jefe':
    if carácter not in ' .,!?':
        palabra = palabra + carácter
    else:
        print(palabra)
        palabra = ''

print(palabra)
```

Pero existen comandos más avanzados de Python, podemos separar un texto en un conjunto de textos.
```python
for palabra in 'Hola mundo Chao jefe'.split(' '):
    print(palabra)
```