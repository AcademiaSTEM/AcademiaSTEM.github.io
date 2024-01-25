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