```python
casino, de martin solar, jeronimo garcia y simon torres
Martin Solar<solarsiumxd@gmail.com>
​
Daniela Alejandra Concha Defilippi​
	
No suele recibir correo electrónico de solarsiumxd@gmail.com. Por qué es esto importante
	
from random import randint
import time
import random
plata = 1000
perdidas = 0
juegosecreto = 1
dueñodecasino = 1
numerodeplata = randint(1, 1000)
print ("casino!")
time.sleep(1)
print("este casino es interactivo, presiona un numero y enter para escoger")
time.sleep(1)
print ("tienes", plata)
time.sleep(1)
while plata > 0 and dueñodecasino == 1:
    apuesta = int(input("cuanto apuestas?"))
    if apuesta == numerodeplata:
        time.sleep(5)
        print("veo que tuviste suerte")
        plata = plata * 100000000000000000
        time.sleep(1)
        print("tienes", plata)
        time.sleep(1)
        int(input("cuanto apuestas?"))
    if apuesta < 1:
        time.sleep(5)
        print ("te crees gracioso?")
    elif apuesta > plata:
        time.sleep(2)
        print ("te faltan", apuesta - plata)
       
    else:
        time.sleep(1)
        dados = 1
        print("dados = ", dados)
        time.sleep(1)
        rueda = 2
        print ("rueda =", rueda)
        time.sleep(1)
        maquina = 3
        print ("maquina =", maquina)
        time.sleep(1)
        cartas = 4
        print ("cartas =", cartas)
        ruedadelafortuna = 5
        time.sleep(1)
        print("rueda de la fortuna = 5")
        time.sleep(1)
        carreradecaballos = 6
        print("carrera de caballos =", carreradecaballos)
        time.sleep(1)
        futbol = 7
        print("futbol =", futbol)
        juegodemesa = 8
        time.sleep(1)
        print("juego de mesa =", juegodemesa)
        time.sleep(1)
        poker = 9
        print("poker =", poker)
        time.sleep(1)
        if juegosecreto == 2:
            adivinaelnumero = 10
            print("adivina el numero =", adivinaelnumero)
        juego = int(input("elige aqui"))
        if juego == 3:
           
            print('LAS MAQUINAS!')
            time.sleep(2)
            SLOT1 = randint(1, 7)
            SLOT2 = randint(1, 7)
            SLOT3 = randint(1, 7)
            print('TIRANDO...')
            time.sleep(4)
            print('[', SLOT1, '] [', SLOT2, '] [', SLOT3, ']')
            if SLOT1 == SLOT2 and SLOT2 == SLOT3:
                print("GANASTE")
                time.sleep(1)
                plata = plata + apuesta
                print("tienes", plata)
            else:
                print("PERDISTE")
                time.sleep(1)
                plata = plata - apuesta
                print("tienes", plata)
                perdidas = perdidas + 1
       
        if juego == 2:
            colorfinal= randint(1, 2)
            print("la rueda")
            time.sleep(1)
            print("rojo = 1")
            time.sleep(1)
            print("negro = 2")
            time.sleep(1)
            color = int(input("elige un color: "))
            print("Girando la rueda")
            time.sleep(5)
            if colorfinal == color:
                print("GANASTE")
                time.sleep(1)
                plata = plata + apuesta
                print("tienes", plata)
            else:
                print("PERDISTE")
                plata = plata - apuesta
                print("tienes", plata)
                perdidas = perdidas + 1
           
        if (juego == 1):
            print ("has elegido dados")
            time.sleep(1)
            print("tiras 2 dados, si sale un 7 ganas")
            time.sleep(1)
            tiro = int(input("tira los dados! (con 1)"))
            if tiro == 1:
                dado1 = randint(1, 6)
                dado2 = randint(1, 6)
                print("tirando dados...")
                time.sleep(1)
                print(".")
                time.sleep(1)
                print(".")
                time.sleep(1)
                print(".")
                time.sleep(3)
                print(dado1)
                if dado1 + dado2 == 7:
                    time.sleep(5)
                else:
                    time.sleep(3)
                print(dado2)
                time.sleep(3)
                if dado1 + dado2 == 7:
                    print ("GANASTE!")
                    plata = plata + apuesta
                    time.sleep(1)
                    print("tienes", plata)
                else:
                    print("PERDISTE")
                    plata = plata - apuesta
                    time.sleep(1)
                    print("tienes", plata)
                    perdidas = perdidas + 1
        if juego == 9:
            cash = int(input("cuanto apuestas? "))
            cash2 = cash
           
            deck = []
            mano = []
            mano2 = []
            mesa = []
            mm = []
            mm2 = []
            mmc = []
            mm2c = []
            num = ""
            puntos = []
            puntos2 = []
            puntosfinal = 0
            puntosfinal2= 0
            for i in range(13):
                if i == 0:
                    num = "A"
                elif i == 10:
                    num = "J"
                elif i == 11:
                    num = "Q"
                elif i == 12:
                    num = "K"
                else:
                    num = str(i + 1)
               
                deck.append(num + " ♦")
                deck.append(num + " ♥")
                deck.append(num + " ♠")
                deck.append(num + " ♣")
               
            print("tus cartas son: ")
            mano.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mano[0])
            mano.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mano[1])
            print("|",mano[0],"|",mano[1],"|")
            mano2.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mano2[0])
            mano2.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mano2[1])
           
            print("cartas en mesa: ")
            mesa.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mesa[0])
            mesa.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mesa[1])
            mesa.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mesa[2])
            print("|",mesa[0],"|",mesa[1],"|",mesa[2],"|")
            apuesta = int(input("cuanto quieres apostar "))
            while apuesta > cash:
                print("no tienes ese dinero")
                apuesta = int(input("cuanto quieres apostar "))
            # if apuesta == 0:
            # print("te retiraste")
            cash -= apuesta
            cash2 -= apuesta
            apuestatotal = apuesta*2
            print("dinero a apostar actual: ",apuestatotal)
            print("dinero restante: ", str(cash))
            mesa.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mesa[3])
            print("nueva carta en la mesa")
            print("|",mesa[0],"|",mesa[1],"|",mesa[2],"|",mesa[3],"|")
           
            apuesta = int(input("cuanto quieres apostar "))
            while apuesta > cash:
                print("no tienes ese dinero")
                apuesta = int(input("cuanto quieres apostar "))
            cash -= apuesta
            cash2 -= apuesta
            apuestatotal+= apuesta*2
            print("dinero a apostar actual: ",apuestatotal)
            print("dinero restante: ", str(cash))
            mesa.append(deck[random.randint(0,(len(deck))-1)])
            deck.remove(mesa[4])
            print("nueva carta en la mesa")
            print("|",mesa[0],"|",mesa[1],"|",mesa[2],"|",mesa[3],"|",mesa[4],"|")
           
            print("tus cartas:")
            print("|",mano[0],"|",mano[1],"|")
            print("cartas enemigo: ")
            print("|",mano2[0],"|",mano2[1],"|")
           
            for i in range(len(mesa)):
                mano.append(mesa[i])
                mano2.append(mesa[i])
            for i in range(len(mano)):
                mm.append((mano[i])[0])
                mm2.append((mano2[i])[0])
                mmc.append((mano[i])[2])
                mm2c.append((mano2[i])[2])
           
           
            for i in range(13):
                if i == 0:
                    num = "A"
                elif i == 10:
                    num = "J"
                elif i == 11:
                    num = "Q"
                elif i == 12:
                    num = "K"
                else:
                    num = str(i + 1)
                if mm.count(num) == 2:
                    puntos.append("par")
                elif mm.count(num) == 3:
                    puntos.append("trio")
                elif mm.count(num) == 4:
                    puntos.append("poker")
                if mm2.count(num) == 2:
                    puntos2.append("par")
                elif mm2.count(num) == 3:
                    puntos2.append("trio")
                elif mm2.count(num) == 4:
                    puntos2.append("poker")
           
            for i in range(4):
                if i == 0:
                    num = "♥"
                elif i == 1:
                    num = "♦"
                elif i == 2:
                    num = "♣"
                elif i == 3:
                    num = "♠"
                if mmc.count(num) >= 5:
                    puntos.append("color")
                if mm2c.count(num) >= 5:
                    puntos2.append("color")
               
            if puntos.count("poker") >= 1:
                puntosfinal = 6
            elif puntos.count("par") >= 1 and puntos.count("trio") >= 1:
                puntosfinal = 5
            elif puntos.count("color") >= 1:
               puntosfinal= 4
            elif puntos.count("trio") >= 1:
                puntosfinal = 3
            elif puntos.count("par") >= 2:
                puntosfinal = 2
            elif puntos.count("par") == 1:
                puntosfinal = 1
            else:
                puntosfinal = 0
           
            if puntos2.count("poker") >= 1:
                puntosfinal2 = 6
            elif puntos2.count("par") >= 1 and puntos2.count("trio") >= 1:
                puntosfinal2 = 5
            elif puntos2.count("color") >= 1:
               puntosfinal2= 4
            elif puntos2.count("trio") >= 1:
                puntosfinal2 = 3
            elif puntos2.count("par") >= 2:
                puntosfinal2 = 2
            elif puntos2.count("par") == 1:
                puntosfinal2 = 1
            else:
                puntosfinal2 = 0
               
            #print(puntosfinal)
            #print(puntos)
           
            #print(puntosfinal2)
            #print(puntos2)
           
            # 6 poker
            # 5 full
            # 4 color
            # 3 trio
            # 2 doble par
            # 1 par
            # 0 carta mas alta
           
           
           
           
           
            if puntosfinal == 0:
                print("tu mejor mano fue una carta más alta")
           
            elif puntosfinal == 1:
                print("tu mejor mano fue un par")
           
            elif puntosfinal == 2:
                print("tu mejor mano fue un doble par")
           
            elif puntosfinal == 3:
                print("tu mejor mano fue un trio")
           
            elif puntosfinal == 4:
                print("tu mejor mano fue un color")
           
            elif puntosfinal == 5:
                print("tu mejor mano fue un full")
           
            elif puntosfinal == 6:
                print("tu mejor mano fue un poker")
           
           
            if puntosfinal2 == 0:
                print("la mejor mano de tu oponente fue una carta más alta")
           
            elif puntosfinal2 == 1:
                print("la mejor mano de tu oponente fue un par")
           
            elif puntosfinal2 == 2:
                print("la mejor mano de tu oponente fue un doble par")
           
            elif puntosfinal2 == 3:
                print("la mejor mano de tu oponente fue un trio")
           
            elif puntosfinal2 == 4:
                print("la mejor mano de tu oponente fue un color")
           
            elif puntosfinal2 == 5:
                print("la mejor mano de tu oponente fue un full")
           
            elif puntosfinal2 == 6:
                print("la mejor mano de tu oponente fue un poker")
           
            if puntosfinal > puntosfinal2:
                print("GANASTE")
                plata = plata + (apuesta - cash)
                time.sleep(1)
                print("tienes", plata)
            elif puntosfinal < puntosfinal2:
                print("PERDISTE")
                time.sleep(1)
                plata = plata/(apuesta - cash)
                print("tienes", plata)
                perdidas = perdidas + 1
            else:
                print("hubo empate")
                time.sleep(1)
                print("osea que gana la casa")
                time.sleep(1)
                print("PERDISTE")
                plata = plata/(apuesta - cash)
                time.sleep(1)
                print("tienes", plata)
                perdidas = perdidas + 1
               
               
        if juego == 10:
            print("has encontrado el juego secreto, si pierdes, perderas toda tu plata, si ganas, te volveras el nuevo dueño del casino")
            numeroganador = 1
            time.sleep(1)
            eleccionganadora = int(input("elije sabiamente, es un numero del uno al diez: "))
            time.sleep(1)
            numerodesuspenso = randint(1, 10)
            print("Y EL NUMERO ES...")
            for numerodesuspenso in range(100):
                print(randint(1, 10))
                time.sleep(0.1)
            print('Es...', numeroganador)
            if eleccionganadora == numeroganador:
                dueñodecasino = 2
            else:
                print("PERDISTE")
                plata = 0
                print("tienes", plata)
           
           
        if juego == 7:
            print('Apuestas un partido de futbol')
            time.sleep(1)
            print("local = 1")
            time.sleep(1)
            print("visita = 2")
            equipo = int(input("que equipo quieres que gane?"))
            gameturns = 0
            localgoals = 0
            visitgoals = 0
            while gameturns < 6:    
                turnaction = randint(1, 5)
                time.sleep(2)
                if turnaction == 1:
                    print('El equipo local anota un gol!')
                    localgoals = localgoals + 1
                elif turnaction == 2:
                    print('El equipo visitante anota un gol!')
                    visitgoals = visitgoals + 1
                elif turnaction == 3:
                    print('Penal a favor de equipo local!')
                    GOALRATIO = randint(1, 2)
                    if GOALRATIO == 1:
                        print('El equipo local anota el penal, gol!')
                        localgoals = localgoals + 1
                    else:
                        print('Fallan el penal!')
                elif turnaction == 4:
                    print('Penal a favor del equipo visitante!')
                    GOALRATIO = randint(1, 2)
                    time.sleep(2)
                    if GOALRATIO == 1:
                        print('El equipo visitante anota el penal, gol!')
                        visitgoals = visitgoals + 1
                    else:
                        print('Fallan el penal!')
                elif turnaction == 5:
                    print('El equipo local comitio una falta!')
                    FAULCHANCE = randint(1, 2)
                    if FAULCHANCE == 1:
                        print('El arbitro penalizo al equipo local!')
                        localgoals = localgoals - 1
                    elif FAULCHANCE == 2:
                        print('El arbitro no lo tomo en cuenta!')
                gameturns = gameturns + 1
            if localgoals > visitgoals:
                print('El equipo local gana!')
                if equipo == 1:
                    print ("GANASTE")
                    time.sleep(1)
                    plata = plata + apuesta
                    print ("tienes", plata)
                else:
                    print("PERDISTE")
                    time.sleep(1)
                    plata = plata - apuesta
                    print("tienes", plata)
                    perdidas = perdidas + 1
               
            else:
                print('El equipo visitante gana!')
                if equipo == 2:
                    print ("GANASTE")
                    time.sleep(1)
                    plata = plata + apuesta
                    print ("tienes", plata)
                else:
                    print("PERDISTE")
                    time.sleep(1)
                    plata = plata - apuesta
                    print("tienes", plata)
                    perdidas = perdidas + 1
        if juego == 8:
            print('Cuidado con la bomba!') #hecho por Jero
            takedeck = 30
            mydeck = 0
            foe1deck = 0
            myskips = 0
            foe1skips = 0
            mydissolve = 1
            foe1dissolve = 1
            mytrigger = 0
            foe1trigger = 0
            while mytrigger == 0 and foe1trigger == 0:
                print('Mazo:', takedeck)
                if takedeck > 0:
                    ACTION1 = input('robar o jugar: ')
                    if ACTION1 != 'jugar':
                        print('Robas una carta')
                        CARD = randint(1, 6)
                        if CARD <= 3:
                            print('Robaste una carta para saltar tu turno.')
                            myskips = myskips + 1
                            print('Cartas para saltar turno:', myskips)
                            takedeck = takedeck - 1
                        elif CARD <= 5:
                            print('Encontraste una bomba!')
                            if mydissolve > 0:
                                print('Desactivaste la bomba!')
                                mydissolve = mydissolve - 1
                                print('Cartas de desactivación:', mydissolve)
                                takedeck = takedeck - 1
                            else:
                                print('Explotaste!')
                                mytrigger = 1
                        elif CARD == 6:
                            print('Encontraste una carta de desactivación!')
                            mydissolve = mydissolve + 1
                            print('Cartas de desactivación:', mydissolve)
                            takedeck = takedeck - 1
                    elif ACTION1 == 'jugar':
                        print('Cartas de saltar turno:', myskips)
                        PLAYSKIP1 = input('Jugar?: ')
                        if PLAYSKIP1 == 'si' or 'Si':
                            if myskips < 1:
                                print('Te reusaste a jugar una carta, robas.')
                                print('Robas una carta')
                                CARD = randint(1, 6)
                                if CARD <= 3:
                                    print('Sacaste una carta para saltar tu turno!')
                                    myskips = myskips + 1
                                    print('Cartas de saltar turno:', myskips)
                                    takedeck = takedeck - 1
                            elif CARD <= 5:
                                    print('Encontraste una bomba!')
                                    if mydissolve > 0:
                                        print('Desactivaste la bomba!')
                                        mydissolve = mydissolve - 1
                                        print('Cartas de desactivación:', mydissolve)
                                        takedeck = takedeck - 1
                                    else:
                                        print('Explotaste!')
                                        mytrigger = 1
                            elif CARD == 6:
                                print('Encontraste una carta de desactivación')
                                mydissolve = mydissolve + 1
                                print('Tus cartas de desactivación:', mydissolve)
                                takedeck = takedeck - 1
                            else:
                                print('Saltaste tu turno!')
                                myskips = myskips - 1
                    FOEACTION = randint(1, 2)
                    if FOEACTION == 1:
                        print('El enemigo robo una carta')
                        CARD = randint(1, 6)
                        if CARD <= 3:
                            print('El enemigo saco una carta para saltar su turno!')
                            foe1skips = foe1skips + 1
                            print('Cartas para saltar del oponente:', foe1skips)
                            takedeck = takedeck - 1
                        elif CARD <= 5:
                            print('El enemigo encontro una bomba!')
                            if foe1dissolve > 0:
                                print('El enemigo desactivo la bomba!')
                                foe1dissolve = foe1dissolve - 1
                                print('Cartas de desactivación del enemigo:', foe1dissolve)
                                takedeck = takedeck - 1
                            else:
                                print('El enemigo Exploto!')
                                foe1trigger = 1
                        elif CARD == 6:
                            print('El oponente encontro una carta de desactivación!')
                            foe1dissolve = foe1dissolve + 1
                            print('Cartas de desactivación del oponente:', foe1dissolve)
                            takedeck = takedeck - 1
                    elif FOEACTION == 2:
                        print('Cartas para saltar del oponente:', foe1skips)
                        if foe1skips > 0:
                            print('El oponente salto su turno')
                            foe1skips = foe1skips - 1
                        else:
                            print('El enemigo se reuso a usar una carta y va a robar.')
                            print('El oponente robo una carta')
                            CARD = randint(1, 6)
                            if CARD <= 3:
                                print('El enemigo saco una carta para saltar su turno!')
                                foe1skips = foe1skips + 1
                                print('Cartas para saltar del oponente:', foe1skips)
                                takedeck = takedeck - 1
                            elif CARD <= 5:
                                print('El enemigo encontro una bomba!')
                                if foe1dissolve > 0:
                                    print('El enemigo desactivo la bomba!')
                                    foe1dissolve = foe1dissolve - 1
                                    print('Cartas de desactivación del enemigo', foe1dissolve)
                                    takedeck = takedeck - 1
                                else:
                                    print('El enemigo Exploto!')
                                    foe1trigger = 1
                            elif CARD == 6:
                                print('El enemigo encontro una carta de desactivación')
                                foe1dissolve = foe1dissolve + 1
                                print('Cartas de desactivación del enemigo:', foe1dissolve)
                                takedeck = takedeck - 1
                else:
                    print('Rellenando mazo...')
                    print('precio de supervivencia, una desactivacion para todos.')
                    takedeck = 15
                    mydissolve = mydissolve + 1
                    foe1dissolve = foe1dissolve + 1
           
            if mytrigger == 1 and foe1trigger == 0:
                print('PERDISTE')
                plata = plata - apuesta
                time.sleep(2)
                print("tienes", plata)
                perdidas = perdidas + 1
            elif mytrigger == 0 and foe1trigger == 1:
                print('GANASTE')
                plata = plata + apuesta
                time.sleep(2)
                print("tienes", plata)    
                plata = plata - apuesta
        if juego == 5:
            time.sleep(1)
            print("vamos a girar la rueda!")
            resultado = randint(1, 8)
            time.sleep(1)
            print("girando...")
            time.sleep(5)
            if resultado == 1 or resultado == 4:
                print("dobla tu dinero!")
                plata = plata * 2
                time.sleep(1)
                print("tienes", plata)
            elif resultado == 2 or resultado == 5:
                print("pierdes la mitad de tu dinero")
                time.sleep(1)
                plata = plata/2
                print("tienes", plata)
                perdidas = perdidas + 1
            elif resultado == 3:
                print("GANADOR")
                time.sleep(1)
                plata = plata * 10
                print("tienes",  plata)
            elif resultado == 6:
                print("pierdes todo")
                plata = 0
                print ("tienes", plata)
            elif resultado == 7:
                print("nuevo juego desbloqueado!")
                juegosecreto = 2
                time.sleep(1)
            else:
                print("apuesta", numerodeplata, "para un secreto")
                time.sleep(1)
        if juego == 6:
            time.sleep(1)
            print("veamos a los caballos")
            ganador = randint(10, 19)
            segundo = randint(1, 9)
            inicio = randint(20, 29)
            puestosegundo = randint (5, 10)
            medio = randint(1, 2)
            iniciosegundo = randint(5, 15)
            iniciotercero = randint(1, 5)
            time.sleep(1)
            eleccion = int(input("elige a uno de los 29 caballos..."))
            time.sleep(5)
            print("la carrera empezara pronto...")
            time.sleep(5)
            print("LA CARRERA EMPIEZA CON", inicio, "A LA DELANTERA,", iniciosegundo, "EN SEGUNDO LUGAR, Y", iniciotercero, "EN TERCER LUGAR")
            time.sleep(5)
            if medio == 1:
                print("EL CABALLO", segundo, "CORRE, PASANDO DE", puestosegundo, "A PRIMERO, ESTO ES INSOLITO!")
            else:
                print("EL CABALLO", segundo, "EMPIEZA A CORRER DESDE EL PUESTO", puestosegundo, "PERO NO LOGRA LLEGAR A PRIMERO!")
            time.sleep(5)
            print("LA CARRERA ESTA A PUNTO DE TERMINAR,", segundo, "ESTA A PUNTO DE GANAR, PERO APARECE", ganador, "Y LO PASA, LLEVANDOSE EL PRIMER PUESTO")
            time.sleep(3)
            if eleccion == ganador:
                time.sleep(1)
                print("GANASTE")
                plata = plata + (apuesta * 10)
                time.sleep(1)
                print("tienes", plata)
            elif eleccion == segundo:
                print("PERDISTE, PERO ESTUVISTE CERCA")
                time.sleep(1)
                print("tienes", plata)
            else:
                print("PERDISTE")
                plata = plata - apuesta
                time.sleep(1)
                print("tienes", plata)
                perdidas = perdidas + 1
               
        if juego == 4:
            time.sleep(1)
            print("toca jugar cartas!")
            time.sleep(1)
            print("tu objetivo es tener mas cartas que la mesa, los jokers son comodines")
            time.sleep(3)
            jackjugador = randint(0, 6)
            reinajugador = randint(0, 6)
            reyjugador = randint(0, 6)
            jokerjugador = randint(0, 3)
            jackenemigo = randint(1, 6)
            reinaenemigo = randint(1, 6)
            reyenemigo = randint(1, 6)
            jokerenemigo = randint(1, 3)
            print ("jacks:", jackjugador, "(1)","reinas:", reinajugador, "(2)","reyes:",  reyjugador, "(3)","jokers:",  jokerjugador)
            time.sleep(5)
            carta = int(input("que carta jugaras?"))
            if carta == 1:
                print("el enemigo tiene", jokerenemigo + jackenemigo, "jacks")
                if (jackjugador + jokerjugador) > (jackenemigo + jokerenemigo):
                    time.sleep(1)
                    print("GANASTE")
                    plata = plata + apuesta
                    time.sleep(1)
                    print("tienes", plata)
                else:
                    time.sleep(1)
                    print("PERDISTE")
                    plata = plata - apuesta
                    time.sleep(1)
                    print("tienes", plata)
                    perdidas = perdidas + 1
            elif carta == 2:
                print("el enemigo tiene", jokerenemigo + reinaenemigo, "reinas")
                if (reinajugador + jokerjugador) > (reinaenemigo + jokerenemigo):
                    time.sleep(1)
                    print("GANASTE")
                    plata = plata + apuesta
                    time.sleep(1)
                    print("tienes", plata)
                else:
                    time.sleep(1)
                    print("PERDISTE")
                    plata = plata - apuesta
                    time.sleep(1)
                    print("tienes", plata)
                    perdidas = perdidas + 1
            elif carta == 3:
                print("el enemigo tiene", jokerenemigo + reyenemigo, "reyes")
                if (reyjugador + jokerjugador) > (reyenemigo + jokerenemigo):
                    time.sleep(1)
                    print("GANASTE")
                    plata = plata + apuesta
                    time.sleep(1)
                    print("tienes", plata)
                else:
                    time.sleep(1)
                    print("PERDISTE")
                    plata = plata - apuesta
                    time.sleep(1)
                    print("tienes", plata)
                    perdidas = perdidas + 1
        if perdidas == 5:
            salida = int(input("has perdido mucho, quieres irte?(1 es si, 2 es no)"))
            if salida == 1:
                salida2 = int(input("seguro? 99% de los apostadores se rinden antes de ganarlo todo! (1 es si, 2 es no)"))
                if salida2 == 1:
                    plata = 0
                else:
                    print("gracias! aqui tienes", plata)
                    plata = plata * 2
            else:
                print("gracias! aqui tienes", plata/2)
                plata = plata + (plata/2)
         
       
time.sleep(2)
if dueñodecasino == 2:
    print ("HAS GANADO TODO, FELICIDADES")
else:
    print ("VETE DE MI CASINO")
```