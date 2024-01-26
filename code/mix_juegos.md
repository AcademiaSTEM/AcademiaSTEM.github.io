```python
print('Holaaa 👋, bienvenido o bienvenida al juego, esta primera sección sera de preguntas de cultura general, ¿estás listo?')
print('')
pregunta1=input('1. ¿Cuál es el rio mas largo del mundo?\nRespuesta:')
if pregunta1== 'Amazonas' or pregunta1=='amazonas':
    print('correcto ✔️')
else:
    print('incorrecto es Amazonas ❌')
print('')

pregunta2=input('2. ¿Qué año llegó Cristóbal Colón a América?\nrespuesta:')
if pregunta2== '1492':
    print('correcto ✔️')
else:
    print('incorrecto ❌ es en el año 1492')
print('')

pregunta3=input('3. ¿Cuántos huesos tiene el ser humano?\nrespuesta:')
if pregunta3== '206':
    print('correcto ✔️')
else:
    print('incorrecto ❌ el ser humano tiene 206 huesos 🦴')
print('')

pregunta4=input('¿4. Cuál es el disco más vendido de la historia? 📀\nrespuesta:')
if pregunta4== 'Thriller' or pregunta4=='thriller':
    print('correcto ✔️')
else:
    print('incorrecto ❌ es el disco Thriller 📀')
print('')

print('Ahora la segunda sección sera adivinanzas, buena suerte 😉 ')
print('')

ad1=input('Adivinanza 1: "no es cama ni es león y desaparece en cualquier rincón" ¿Qué es?\nrespuesta:')
if ad1== 'Camaleón' or ad1=='camaleón':
    print('Bien hecho ✔️')
else:
    print('incorrecto ❌ es el Camaleón 🦎')
print('')

ad2=input('Adivinanza 2: "Qué es lo que cuanto más grande es menos se ve"\nrespuesta:')
if ad2== 'oscuridad' or ad2=='la oscuridad':
    print('Bien hecho ✔️')
else:
    print('incorrecto ❌ es la oscuridad ')
print('')

ad3=input('Adivinanza 3: "Es puerto y no de mar, es rico sin capital"\nrespuesta:')
if ad3== 'Puerto Rico' or ad3=='puerto rico':
    print('Exelente ✔️')
else:
    print('incorrecto ❌ es Puerto Rico ')
print('')
print('Finalmente la tercera y ultima sección sera adivinar el número secreto que esta entre el 1 y 15, buena suerte 😉')
print('')
from random import randint
numero_secreto = (randint(1,15))
while True:
  intento = int(input('ingresa el número:'))
  if intento == numero_secreto:
    print('¡¡Felicidades, adivinaste el número secreto 🥳!!')
    break
  elif intento<numero_secreto:
      print('El número secreto es mayor, intentalo de nuevo')
  else:
    print('el número secreto es menor, intentalo de nuevo')
print('')
print('Gracias por jugar, espero te haya gustado 😋')
```