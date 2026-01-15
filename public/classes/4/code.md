#### Separador de palabras

Utilizando el `for` para recorrer los caracteres de un texto, podemos identificar todas las palabras que este contiene. Lo importante, será utilizar una variables (`palabra`) para almacenar la información de la palabra que estamos revisando actualmente, una vez que encontremos un espacio o signo de puntuación, procederemos a mostrar la palabra que encontramos.

```python
texto = 'Hola mundo. Soy Pepa 🐢🌟'
palabra = ''

for carácter in texto:
    if carácter == ' ' or carácter == '.' or carácter == ',':
        if palabra != '':
            print(palabra)
        palabra = ''
    else:
        palabra = palabra + carácter

print(palabra)
```

----

## Código clase

#### Árbol de Navidad
```python
alto = 5

# Construimos el árbol de navidad
for i in range(alto):
    ancho_espacios = alto - i 
    ancho_árbol = i * 2 + 1
    print(i, ' ' * ancho_espacios, '#' * ancho_árbol)

# Construimos la base del árbol
ancho_base = 1
ancho_espacios = alto
print('b', ' ' * ancho_espacios, '#' * ancho_base)
```