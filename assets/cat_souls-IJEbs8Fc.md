```python
import time
eleccion = 0
print("En un castillo lejano, rodeado por montañas y bosques oscuros, un rey se encontraba preocupado.")
time.sleep(2)
print("Un dragón feroz había comenzado a aterrorizar las aldeas cercanas, exigiendo tributos y dejando un rastro de destrucción a su paso.")
time.sleep(2)
print("El rey, desesperado, reunió a todos los caballeros del reino, esperando que alguno tuviera el valor de enfrentarse a la bestia.")
time.sleep(2)
print("Pero ninguno se atrevió. El dragón era temido por todos, su furia y su fuego parecían invencibles.\n")
time.sleep(4)
print("Mientras el rey reflexionaba, sus ojos se posaron sobre un pequeño gatito que merodeaba por los pasillos del castillo.")
time.sleep(2)
print('El rey, sorprendido, dijo: "El dragón debe ser detenido, y tú, pequeño, serás el elegido."')
time.sleep(2)
print('"Aunque no tienes la fuerza de un caballero, tu astucia y rapidez podrían ser tu mayor ventaja. Toma esta espada."')
print("El gatito, sin emitir palabra, aceptó la espada que le ofrecía el rey y partió en silencio hacia la cueva del dragón.\n")
time.sleep(3)
print("El gatito llega al oscuro bosque que rodea la cueva del dragón y encuentra dos caminos:")
time.sleep(2)
print("1. Tomar el camino iluminado que parece más tranquilo.")
print("2. Tomar el camino oscuro que muestra huellas recientes del dragón.")
time.sleep(4)
while (eleccion != "1") and (eleccion != "2"):
    eleccion = input("¿Qué hará el gatito? Ingresa 1 o 2: ")
    
    if eleccion == "1":
        print("\nEl gatito toma el camino iluminado. Aunque parece tranquilo, un misterioso sonido lo pone alerta.")
        print("Continuará...")
        time.sleep(2)
    elif eleccion == "2":
        print("\nEl gatito toma el camino oscuro. El ambiente es aterrador, pero las huellas indican que está en el camino correcto.")
        print("Continuará...")
        time.sleep(2)
    else:
        print("\n¡Elección no válida! El gatito se queda pensando y el tiempo pasa...")
        continue
#Desarollo del caballero gatuno
pot = 0
print("El caballero gatuno despues de un largo viaje llega al calabozo, donde batallara al dragon, donde encuentra dos caminos")
time.sleep(5)
print("A su izquierda encuentra un camino subterraneo que lo llevara directo al dragon y por la derecha encuentra un camino misterioso que no sabe adonde lleva. ¿Que camino deberia elegir el caballero gatuno?")
time.sleep(2)
camino = 0
sosura = 0
dragon = 0
mago = 0
while (camino != "derecha") and (camino != "izquierda"):
    camino = str.lower(input("Izquierda o Derecha:"))
    if camino == "derecha":
        print("El caballero gatuno, entra por el misterioso camino en la derecha.")
        time.sleep(2)
        print("El camino es oscuro y peligroso pero el caballero logra llegar a una oscura sala")
        print("Deberia explorar la sala?")
        while (sosura != "si") and (sosura != "no"):
            sosura = str.lower(input("Si o No:"))
            if sosura == "si":
                print("El caballero explora la oscura sala y encuentra a un raton comerciante, este vende posiciones con capacidades curativas")
                time.sleep(2)
                print("Si usamos todas nuestras monedas podremos comprar la posicion. Compras 1 poscion?")
                while (pot != "si") and (pot != "no"):
                    pot = str.lower(input("Si o No:"))
                if pot == "si":
                    print("-Talvez esta poscion sera util mas adelante-")
                    time.sleep(2)
                elif pot == "no":
                    continue
                else:
                    print("Intenta nuevamente :/")
                    continue
            elif sosura == "no":
                continue
            else:
                print("Intenta nuevamente :/")
                continue
                
    if (camino == "izquierda") or (sosura == "no") or (pot == "no") or (pot == "si"):
        print("El caballero despues de evadir unas trampas llega donde se encuentra el dragon")
        time.sleep(2)
        print("Nuestro caballero se encuentra con el durmiente dragon y sabe que tiene que hacer, se acerca silenciosamente al cuello del dragon, levanta su espada y cierra sus ojos.")
        time.sleep(4)
        print("Que deberiamos hacer con el dragon?")
        while (dragon != "asesinar") and (dragon != "perdonar"):
            dragon = str.lower(input("Asesinar o Perdonar:")) 
            if dragon == "asesinar":
                print("El gato corta la cabeza del dragon sin mayor dificultad, pero al hacerlo se hace un corte sobre su pobre patita")
                time.sleep(2)
                print("Solo si este tubiera una poscion magica...")
                if pot == "si":
                    time.sleep(3)
                    print("Un segundo... si tenemos una!")
                    time.sleep(2)
                    print("-El gato cura su herida y ahora puede utilizar su espada eficientemente-")
                time.sleep(2)
                print("RAYOS! La salida fue cellada!")
                print("Vez a un poderoso mago cubriendo la unica salida...")
                print("Te acercas al mago?")
                while (mago != "si") and (mago != "no"):
                    mago = str.lower(input("Si o No:"))
                    if mago == "no":
                        time.sleep(2)
                        print("-Esperas en el lugar.. No ocurre nada-")
                        mago = 0
                        mago = str.lower(input("Si o No:"))
                    elif mago == "si":
                        print("Al acercarte al mago, este te encierra dentro de un area.")
                        time.sleep(2)
                        print("-Tus instintos señalan que estaras obligado a conbatirlo-")
                        #-----------------------------------------------------------------------------------------------------------------
                        import random
                        pcwins = 0
                        userwins = 0
                        print("-Tendrás que lograr 3 ataques efectivos!-")
                        
                        while (pcwins != 3) and (userwins != 3):
                            cachi = str.lower(input("Ingresa uno de tus ataques: Arañar, Espadazo o Finta: "))
                           #piedra= arañar papel=espadazo tijera=fintA
                            rcachi = random.randint(1, 3)
                        
                            if cachi == "arañar":
                                cachi = 1
                            elif cachi == "espadazo":
                                cachi = 2
                            elif cachi == "finta":
                                cachi = 3
                            else:
                                print("Ataque no válido. Intenta de nuevo.")
                                continue
                        # PIEDRA=ESCUDO  PAPEL=Prisma aRCOIRIS TIJERA:FlechasMAGICas
                            if rcachi == 1:
                                rcachi_str = "Escudo"
                            elif rcachi == 2:
                                rcachi_str = "Prisma Arcoiris"
                            elif rcachi == 3:
                                rcachi_str = "Flechas Mágicas"
                        
                            print("El mago usa:")
                            print(rcachi_str, "!")
                        
                            if cachi == rcachi:
                                print("Ambos ataques se contrarrestan completamente.")
                            elif (cachi == 1 and rcachi == 3) or (cachi == 2 and rcachi == 1) or (cachi == 3 and rcachi == 2):
                                print("¡El ataque es efectivo!")
                                userwins += 1
                            else:
                                print("¡AUCH! Su contrataque fue efectivo.")
                                pcwins += 1
                        
                            print("Golpes efectivos")
                            print(userwins, "<-Gato", "------ Mago->", pcwins)
                        
                            if pcwins == 3:
                                print("Sientes como tu visión se niebla...")
                                time.sleep(2)
                                print("Sabes que pronto morirás...")
                                time.sleep(2)
                                print("-Estás determinado a ganar-")
                                time.sleep(2)
                                print("Te levantas del piso listo para otra ronda...")
                                time.sleep(2)
                                print("Tu corazon esta lleno de determinacion")
                                pcwins = 0
                                userwins = 0
                            
                        if userwins == 3:
                            print("-ENEMIGO DERRIBADO-")
                            print("Escapas del calobozo y te diriges al castillo para proclamar tu recompensa")
                    else:
                        print("Intenta nuevamente :/")
                        continue        
        #----------------------------------------------------------------
            if dragon == "perdonar":
                print("-Tienes un mal presentimiento de esta eleccion-")
                time.sleep(2)
                print("El gato decide abandonar la sala del dragon ya que su mision perdio el punto")
                time.sleep(2)
                print("Escuchas como el dragon se despierta a tus espaldas")
                time.sleep(2)
                print("Sientes como un calor inmenso te abraza")
                time.sleep(2)
                print("En tus ultimos segundos de vida comprendes que el dragon te prendio en llamas y que deberias haberle cortado la cabeza cuando tubiste la oportunidad")
                print("GAME OVER")
            else:
                print("Intenta nuevamente :/")
                continue
    else:
        print("Eso no es un camino :/")
        continue
```