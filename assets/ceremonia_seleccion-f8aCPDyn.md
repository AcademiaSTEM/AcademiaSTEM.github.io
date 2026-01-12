```python
import datetime
import time

print("bienvenido joven mago... estás listo para comenzar la ceremonia de selección?")
respuesta = input("  ")
if respuesta == "si" or respuesta == "SI" :
    print("comencemos... Ingresa tu clasificación en el registro mágico:")
    print(" 1 -> muggle ( no he visto hp ) ")
    print (" 2 -> sangre pura  ( adoro hp) ")
    estatus = input("...")
    while estatus !="2":
        print("Este lugar no es para ti!!")
        estatus = input("Regresa cuando hayas despertado tu magia ")
        print(" Bienvenido a Hogwarts ")
        
     
     
     # Variables casas / Hogwarts ->
    recuentos_hogwarts = 0
    puntos_r = 0
    puntos_s = 0
    puntos_h = 0
    puntos_g = 0
     
     
#Pregunta1 lectura ->
    time.sleep(1.8)
    print("primero partiré con preguntas simples...")
    time.sleep(2)
    print("  ")
    print(" ¿Te gusta leer?  ")
    print(" Me encanta -> 1")
    print(" Me gusta -> 2")
    print(" Lo tolero -> 3")
    print(" Lo odio -> 4")
    recuentos_hogwarts = int( input(" ...") ) 
    print("   ")
    
    #Ravenclaw 1.0
    if recuentos_hogwarts == 1:
        puntos_r = puntos_r +1 
        puntos_g =puntos_g -1
        
    #Slytherin 1.0    
    elif recuentos_hogwarts == 2:
        puntos_s = puntos_s +1 
    
    #Hufflepuff 1.0
    elif recuentos_hogwarts == 3:
        puntos_h = puntos_h +1 
        
    #Gryffindor 1.0
    elif recuentos_hogwarts == 4:
        puntos_g = puntos_g +1 
        puntos_r = puntos_r -1
    
    else:
        print("No elegiste una alternativa válida")
        
    
    
#Pregunta2 Helado
    time.sleep(1.8)
    print(" ¿Cual es tu helado favorito?  ")
    print(" Chocolate -> 1")
    print(" Frutos Del Bosque -> 2")
    print(" Pistacho -> 3")
    print(" Vainilla -> 4")
    recuentos_hogwarts = int( input(" ... ") )
    
    
    #Gryffindor 2.0
    if recuentos_hogwarts == 1:
        puntos_g = puntos_g +2
        puntos_h = puntos_h +1 
        
    #Ravenclaw 2.0
    elif recuentos_hogwarts == 2:
        puntos_r = puntos_r +2
        puntos_s = puntos_s +1 
        
    #Slytherin 2.0
    elif recuentos_hogwarts == 3:
        puntos_s = puntos_s +2 
        puntos_h = puntos_h +1 
    
     #Hufflepuff 2.0
    elif recuentos_hogwarts == 4:
        puntos_h = puntos_h +2 
        puntos_g = puntos_g +1 
    
#Pregunta3 Deportes
    time.sleep(1.8)
    print(" ¿Cual es tu deporte soñado?  ")
    print(" Ballet -> 1")
    print("patinaje sobre hielo -> 2")
    print(" Basquetbol -> 3")
    print(" Tiro con arco -> 4")
    print(" Volleyball -> 5")
    recuentos_hogwarts = int( input(" ... ") )
    
    #Slytherin 3.0
    if recuentos_hogwarts == 1:
        puntos_s = puntos_s +2
        puntos_h = puntos_h +1
        
    #Gryffindor 3.0
    elif recuentos_hogwarts == 2:
        puntos_s = puntos_s +2
        puintos_r = puntos_r +1
        
    #Ravenclaw 3.0
    elif recuentos_hogwarts == 3:
        puntos_g = puntos_g +2
        
    #Hufflepuf 3.0
    elif recuentos_hogwarts == 4:
        puntos_r = puntos_r +2
        puntos_g = puntos_g +1
        
        
    #Hufflepuf 3.0
    elif recuentos_hogwarts == 5:
        puntos_h = puntos_h +1
    
        
    
#Pregunta4 compleja
    time.sleep(1.8)
    print(" Encontraste una biblioteca en ruinas. ")
    time.sleep(1.5)
    print(" Hay muchos libros ")
    time.sleep(1.5)
    print(" Oh no!! ")
    print(" La biblioteca está colapsando. ")
    print(" Hay que huir!")
    time.sleep(2.5)
    print(" No hay tiempo para asegurar todos los libros.")
    time.sleep(1.8)
    print("  ")
    print(" ¿¿Cual rescataras??")
    print(" Un libro de encantamientos antiguos -> 1 ")
    print(" Un recetario que asegura ser la clave de la felicidad - > 2 ")
    print(" Un libro de pociones -> 3")
    recuentos_hogwarts = int( input(" ... ") )
    #Ravenclaw 5.0
    if recuentos_hogwarts == 1:
        puntos_r = puntos_r +3 
        puntos_s = puntos_s +2
        puntos_g = puntos_g +-1
        
    #Hufflepuf 5.0
    elif recuentos_hogwarts == 2:
        puntos_h = puntos_h +3 
        puntos_g = puntos_g +1 
        puntos_r = puntos_r -1
        puntos_s = puntos_s -1 
        
    #Slytherin 5.0
    elif recuentos_hogwarts == 3:
        puntos_s = puntos_s +3 
        puntos_r = puntos_r +2
        puntos_g = puntos_g -2
        
    else:
        print("No elegiste una alternativa valida")
    
    
    
#Pregunta5 elemento
    time.sleep(1.8)
    print("si tuvieras que escoger un elemento natural que te represente, ¿cúal sería?")
    print(" agua -> 1 ")
    print(" aire -> 2 ")
    print(" fuego -> 3 ")
    print(" tierra -> 4 ")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 3:
        puntos_g = puntos_g +2 
        puntos_h = puntos_h +1 
        
    elif recuentos_hogwarts == 2:
        puntos_h = puntos_h +2 
        puntos_r = puntos_r +1 
        
    elif recuentos_hogwarts == 4:
        puntos_s = puntos_s +2
        puntos_h = puntos_h +1 
        puntos_r = puntos_r +1 
        puntos_g = puntos_g -1 
        
    elif recuentos_hogwarts == 1:
        puntos_r = puntos_r +2 
        puntos_s = puntos_s +1 
        
    else:
        print("No elegiste una alternativa valida")    
        
    
    
#Pregunta6 materias
    time.sleep(1.8)
    print("¿cual es tu materia favorita?")
    print(" arte -> 1 ")
    print(" quimica -> 2 ")
    print(" deporte -> 3 ")
    print(" biología -> 4 ")
    print(" economía -> 5 ")
    print(" debate -> 6 ")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 1:
        puntos_h = puntos_h +2 
        puntos_g = puntos_g +1 
        
    elif recuentos_hogwarts == 2:
        puntos_s = puntos_s +2 
        puntos_r = puntos_r +1 
        
    elif recuentos_hogwarts == 3:
        puntos_g = puntos_g +2
        puntos_s = puntos_s +1 
        puntos_h = puntos_h -1 
        puntos_r = puntos_r -1 
        
    elif recuentos_hogwarts == 4:
        puntos_h = puntos_h +2 
        puntos_g = puntos_g +1
        puntos_s = puntos_s -1
        
    elif recuentos_hogwarts == 5:
        puntos_r = puntos_r +2 
        puntos_s = puntos_s +1 
        
    elif recuentos_hogwarts == 6:
        puntos_r = puntos_r +2 
        puntos_s = puntos_s +1 
        
    else:
        print("No elegiste una alternativa válida")
        
        
#Pregunta7 animales
    time.sleep(1.8)
    print(" ¿cuál es tu mascota ideal? ")
    print("  perro -> 1 ")
    print("  gato -> 2 ")
    print(" tortuga -> 3 ")
    print(" no me gustan los animales -> 4 ")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 1:
        puntos_g = puntos_g +2 
        puntos_h = puntos_h +1 
        
    elif recuentos_hogwarts == 2:
        puntos_r = puntos_r +2 
        puntos_s = puntos_s +1 
        
    elif recuentos_hogwarts == 3:
        puntos_h = puntos_h +2
        puntos_s = puntos_s -1 
        
    elif recuentos_hogwarts == 4:
        puntos_s = puntos_s +2 
        puntos_h = puntos_h -1 
        
    else:
        print("No elegiste una alternativa válida")
        
        
        
 #Pregunta8 bebidas calientes
    time.sleep(1.8)
    print(" Es un lluviosos día de invierno.")
    time.sleep(1.7)
    print(" Incluso las lechuzas se refugian en el calor de su hogar.")
    time.sleep(1.8)
    print("  ")
    print(" ¿¿Que bebida muggle elegirás para calentarte?? ")
    print(" Un espeso chocolate caliente -> 1 ")
    print(" Un dulce y cremoso Chai Latte -> 2 ")
    print(" Un humeante café de grano recién hecho -> 3 ")
    print(" Una acogedora taza de té negro -> 4 ")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 1:
        puntos_g = puntos_g +2 
        puntos_h = puntos_h +1 
        
    elif recuentos_hogwarts == 2:
        puntos_h = puntos_h +2 
        puntos_r = puntos_r +1 
        
    elif recuentos_hogwarts == 3:
        puntos_s = puntos_s +2
        puntos_h = puntos_h +1 
        puntos_r = puntos_r +1 
        puntos_g = puntos_g -1 
        
    elif recuentos_hogwarts == 4:
        puntos_r = puntos_r +2 
        puntos_s = puntos_s +1 
        
    else:
        print("No elegiste una alternativa valida")
        
        
#Pregunta9 vacaciones
    time.sleep(1.8)
    print("¿Donde serían tus vacaciones ideales?")
    print(" En un bosque -> 1 ")
    print(" En el campo -> 2 ")
    print(" En la playa -> 3 ")
    print(" En la selva -> 4 ")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 1:
        puntos_s = puntos_s +2 
        puntos_r = puntos_r +1 
        
    elif recuentos_hogwarts == 2:
        puntos_h = puntos_h +2 
        puntos_g = puntos_g +1 
        
    elif recuentos_hogwarts == 3:
        puntos_r = puntos_r +2
        puntos_s = puntos_s +1 
        
    elif recuentos_hogwarts == 4:
        puntos_g = puntos_g +2 
        puntos_h = puntos_h +1 
        
    else:
        print("No elegiste una alternativa valida")
        
        
#Pregunta10 Patronus
    time.sleep(1.8)
    print(" En las últimas semanas se han detectado ataques de dementores de Azkaban ")
    time.sleep(1.8)
    print(" Investigando una plaza abandonada comienzas a sentirte mareado ")
    time.sleep(1.8)
    print(" Corre!! ")
    time.sleep(2)
    print(" No has visto a los dementores pero está claro que son ellos! ")
    time.sleep(1.5)
    print(" Tropiezas con una roca.  Muy tarde. ")
    print(" Los dementores te alcanzaron.")
    time.sleep(3)
    print("  ")
    print(" Prepara tu Patronus")
    print(" Un fénix -> 1")
    print(" Un ciervo -> 2")
    print(" Un lobo  -> 3")
    print(" Un tejón -> 4")
    recuentos_hogwarts = int( input(" ... ") )
    
    if recuentos_hogwarts == 1:
        puntos_s = puntos_s +2 
        puntos_g = puntos_g +1
        puntos_r = puntos_r +1
        
    elif recuentos_hogwarts == 2:
        puntos_g = puntos_g +2 
        puntos_r = puntos_r +1 
        
    elif recuentos_hogwarts == 3:
        puntos_r = puntos_r +2
        puntos_h = puntos_h +1 
        
    elif recuentos_hogwarts == 4:
        puntos_h = puntos_h +2 
        puntos_s = puntos_s -1 
        
    else:
        print("No elegiste una alternativa válida")
        
    
    
#casa final->    
    if puntos_g > puntos_h and puntos_s and puntos_r:
        casa_final = 'Griffindor'
        
    elif puntos_h > puntos_g and puntos_s and puntos_r:
        casa_final = 'Hufflepuff'
    
    elif puntos_r > puntos_h and puntos_s and puntos_h:
        casa_final = 'Ravenclaw' 

    elif puntos_s > puntos_h and puntos_r and puntos_r:
        casa_final = 'Slytherin'
      
      
      
#texto final
    print(" Bueno mi joven mago.. gracias por responder a todas mis preguntas")
    time.sleep(2)
    print(" La decisión ya está tomada. Ahora te daré mi veredicto final...")
    time.sleep(3.5)
    print(" Bienvenido a...")
    time.sleep(5)
    print("  ")
    print (casa_final)
        
else:
    print ("este quiz no es para tí")
```