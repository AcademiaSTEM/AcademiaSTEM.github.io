#### Inicio de sesión

Haciendo uso de `if/else` podemos realizar múltiples comparaciones, por ejemplo, validar los datos de un usuario para un inicio de sesión.
```python
correo = input('Correo: ')
password = input('Constraseña: ')

correo_valido = 'pepa@correo.pe'
password_valida = 'pepa123'

if correo == correo_valido:
    print('Correo correcto')
else:
    print('Correo invalido')

if password == password_valida:
    print('Contraseña correcta')
else:
    print('Contraseña incorrecta')
```

Pero al hacerlo de la manera anterior, validaremos la contraseña de usuarios que no están registrados e, incluso, podríamos llegar a revelar información sensible de la aplicación (Contraseña válida para correo inválido).

Por lo que en vez de utilizar dos `if` independientes, lo mejor será anidarlos (poner uno dentro del otro).
```python
correo = input('Correo: ')
password = input('Constraseña: ')

correo_valido = 'pepa@correo.pe'
password_valida = 'pepa123'

if correo == correo_valido:
    print('Correo correcto')
    if password == password_valida:
        print('Contraseña correcta')
        print('Inicio de sesión exitoso! 🐢')
    else:
        print('Contraseña incorrecta')
else:
    print('Correo invalido')
```

Si bien, el anidar los `if` nos permite resolver nuestro problema, también podemos apoyarnos en los operadores lógicos y `elif`.
```python
correo = input('Correo: ')
password = input('Constraseña: ')

correo_valido = 'pepa@correo.pe'
password_valida = 'pepa123'

if (correo == correo_valido and password == password_valida):
    print('Has iniciado sesión')
elif (correo != correo_valido):
    print('Usuario inválido')
elif (password != password_valida):
    print('Contraseña inválida')
```

Finalmente, dependiendo del orden en que se realicen las condiciones -en este caso las validaciones del _input_- esto puede afectar la calidad del código, haciendo que sea más directo y fácil de comprender.
```python
correo = input('Correo: ')
password = input('Constraseña: ')

correo_valido = 'pepa@correo.pe'
password_valida = 'pepa123'

if correo != correo_valido:
    print('Correo invalido')
elif password != password_valida:
    print('Cotraseña invalida')
else:
    print('Inicio de sesión exitoso! 🐢')
```

#### Operador de pertenencia (`in`)

Este operador permite verificar si un elemento -en este caso un texto- está en un conjunto -otro texto-, lo cual retorna `True` si el elemento se encuentra en el conjunto y `False` en caso contrario. Esto funciona tanto para caracteres individuales, como _string_ completos:
```python
print('e' in 'pepa')
print('u' in 'pepa')

print('mayo' in 'ketchup, mayo, mostaza')
print('ají' in 'ketchup, mayo, mostaza')
```

#### Transformar texto a mayúsculas y minúsculas

En la gran mayoría de los lenguajes de programación se hace distinción entre los caracteres en mayúsculas y minúsculas, es por esto que es muy conveniente poder transformar los textos para no tener que preocuparnos por el uso de mayúsculas/minúsculas en un texto.

Para esto se puede hacer uso de las funciones propias de _strings_:
- `upper()`: transforma un texto a mayúsculas.
- `lower()`: transforma un texto a minúsculas.
```python
texto = 'Todos sOMOs PePa LoveRs 🐢💖'
print('Mayúsculas:', texto.upper())
print('Minúsculas:', texto.lower())
```

---