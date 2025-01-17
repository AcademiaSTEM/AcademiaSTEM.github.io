```python
a= 'chilenos'
b= 'amazonas'
c= 'india'
d= 'chronos'
e= 'cero'
f= 'mickey mouse'
g= 'napoleon bonaparte'
h= 'daltonismo'
puntos = ''

a = input('¿como se le llama a la gente de chile?')
if(a=='chilenos'):
    print('felicidades!! ganaste un punto 👍')
elif(a !='chilenos'):
    print('vaya... te equivocaste, era chilenos')
b = input('¿cual es el rio mas largo del mundo?')
if(b=='amazonas'):
    print('felicidades!! ganaste un punto 👍')
elif(b !='amazonas'):
    print('vaya... te equivocaste, era el rio amazonas')
c = input('¿cual es el pais con la poblacion más grande?')
if(c== 'india'):
    print('felicidades!! ganaste un punto 👍')
elif(c !='india'):
    print('vaya... te equivocaste, era india')
d = input('¿cual era el nombre de el padre de zeus y sus hermanos?')
if(d== 'chronos'):
    print('felicidades!! ganaste un punto 👍')
elif(d != 'chronos'):
    print('vaya... te equivocaste, era chronos')
e = input('¿a cuantos grados se puede congelar el agua?, escribelo con palabras')
if (e=='cero'):
    print('felicidades!! ganaste un punto 👍')
elif(e != 'cero'):
    print('vaya... te equivocaste, era 0')
f= input('¿como se llama la mascota de disney?')
if(f=='mickey mouse'):
    print('felicidades!! ganaste un punto 👍')
elif(f !='mickey mouse'):
    print('vaya... te equivocaste, era mickey mouse')
g = input('¿como se llamaba el lider de Francia en la epoca de revolucion francesa?')
if(g== 'napoleon bonaparte'):
    print('felicidades!! ganaste un punto 👍')
elif(g != 'napoleon bonaparte'):
    print('vaya... te equivocaste, era napoleon bonaparte')
h = input('¿como se llama la deficiencia en la vision de los colores?')
if(h=='daltonismo'):
    print('felicidades!! ganaste un punto 👍')
elif(h != 'daltonismo'):
    print('vaya... te equivocaste, era daltonismo')
puntos = int(input('¿cuantos puntos tuviste?:  '))
if(puntos > 4):
    print('ganaste el quiz, felicidades!! ヾ(≧▽≦*)o')
elif(puntos < 4):
    print('oh vaya... perdiste el quiz (┬┬﹏┬┬)')
elif(puntos == 4):
    print('pasaste el quiz por poco ༼ つ ◕_◕ ༽つ')
```