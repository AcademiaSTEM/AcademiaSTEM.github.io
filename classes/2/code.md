#### Hacer varias comparaciones

Vimos que podemos aplicar varias comparaciones aritméticas a un mismo valor.
```python
x = 10
print(0 < x < 100)
```
Pero lo anterior no necesariamente funciona en todos los lenguajes de programación, por lo que a veces será necesario apoyarnos de los operadores lógicos.
```python
x = 10
print((0 < x) and (x < 100))
```

#### Validación de datos

Haciendo uso de `if/else` podemos realizar múltiples comparaciones, por ejemplo, validar los datos de un usuario.
```python
usuario_registrado = 'pepa@correo.pe'
contraseña_registrada = 'lechuga'

if (usuario == usuario_registrado):
    print('Usuario válido')
else:
    print('Usuario inválido')

if (contraseña == contraseña_registrada):
    print('Contraseña válida')
else:
    print('Contraseña inválida')
```
Pero al hacerlo de esta manera, validaremos la contraseña de usuarios que no están registrados e, incluso, podríamos llegar a revelar información sensible de la aplicación.

Por lo que en vez de utilizar dos `if` independientes, lo mejor será anidarlos (poner uno dentro del otro).
```python
usuario_registrado = 'pepa@correo.pe'
contraseña_registrada = 'lechuga'

if (usuario == usuario_registrado):
    print('Usuario válido')
    if (contraseña == contraseña_registrada):
        print('Contraseña válida')
    else:
        print('Contraseña inválida')
else:
    print('Usuario inválido')
```

Si bien, el anidar los `if` nos permite resolver nuestro problema, también podemos apoyarnos en los operadores lógicos y `elif`.
```python
usuario = input('Ingrese su usuario: ')   
contraseña = input('Ingrese su contraseña: ')

usuario_registrado = 'pepa@correo.pe'
contraseña_registrada = 'lechuga'

if (usuario == usuario_registrado and contraseña == contraseña_registrada):
    print('Has iniciado sesión')
elif (usuario != usuario_registrado):
    print('Usuario inválido')
elif (contraseña != contraseña_registrada):
    print('Contraseña inválida')
```

Finalmente, dependiendo del orden en que se realicen las condiciones -en este caso las validaciones del _input_- esto puede afectar la calidad del código, haciendo que sea más directo y fácil de comprender.
```python
usuario = input('Ingrese su usuario: ')   
contraseña = input('Ingrese su contraseña: ')

usuario_registrado = 'pepa@correo.pe'
contraseña_registrada = 'lechuga'

if (usuario != usario_registrado):
    print('Usuario inválido')
elif (contraseña != contraseña_registrada):
    print('Contraseña inválida')
else:
    print('Inicio de sesión')
```