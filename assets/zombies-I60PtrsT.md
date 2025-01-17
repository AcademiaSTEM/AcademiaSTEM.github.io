```python
print('Apocalipsis Zombie')
print('¡Hola!  Bienvenidos al juego del apocalipsis zombie,\nun juego en donde tú'
' debes escoger las respuestas\ncorrectas para sobrevivir. Tienes 3 vidas pero hay\n'
'preguntas muy importante que si te equivocas te quitan\ntus 3 vidas automáticamente,\nasi que asegura de responder lo mejor posible')
personaje = 3
total_preguntas = 0
respuestas_correctas = 0
i = 0

print('Escapa del mall')
preguntas = [
            'La gente corre como una estampida de animales hacia la salida\n¿Que vas a hacer?',
            'Ha pasado mucho tiempo y la aglomeración de gente no disminuye… \n¿seguir escondiéndote o buscar otra salida?',
            'Tu cuerpo se mueve lentamente alrededor del caos, por un segundo\nmiras hacia la salida principal inseguro de tu decisión, pero eres\nrecordado de la naturaleza de la supervivencia. Hombres empujando a\nniños para poder intentar salir,gente gritando en el piso,\n siendo pisoteados al pensar que si gateaba iban a tener una mejor\n chance de huir de este lugar. Algo en ti te dice que si planeas\n escapar de esta tienda necesitas algo para protegerte… ¿Pero en donde\n vas a encontrar algo?',
            'Te mueves rápidamente hacia el mezon en donde se encuentra\n la caja registradora, asegurándote de que nadie esté ahí . Aunque\n no ahi mucho es mejor que intentar protegerte con un colgador…',
            'Con las armas que encontraste te sientes más seguro, sabiendo que mínimo te vas a poder proteger contra los zombies o humanos.\n Los guardas en tu bolsillos más cercanos sabiendo que tienes que\n seguir moviéndote.\n',
            'En esta pequeña habitación aunque no ahi mucho logras ver un\n conducto de aire, que aunque estrecho, tu lo puedes cruzar.\n Te aseguras que la puerta esté con seguro y empiezas a mover las\n cajas para poder abrir su puertecilla. Con la punta de las tijeras\n desatornillas la puerta, pudiendo por fin retirar la puerta de\n metal. Está oscuro.. ¿Qué planeas hacer?',
            'Te arrastras por el conducto, escuchando los gemidos de zombis\n debajo de ti. El aire es sofocante y oscuro, pero ves dos\n opciones adelante:','Mientras te mueves por el conducto, llegas a un final en donde solo vez dos caminos, largos que con tu linterna no logras saber cual escoger, solo pudiendo guiarte por tu sentidos:',
            'Por suerte esta tienda estaba cerrada por una ampliación que\n planeaba hacer, empiezas a explorar, puedes ver unas cajas\n con los diferentes tipos de dulce, con una mochila de un trabajador. Tomas la mochila y la vacias…',
            'Abres el portón de metal, lo más silencioso posible,\n sabes que cuando logres por lo menos pasar, tienes que correr… \n¿cual vas a escoger?','Empiezas a caminar y te encuentras con otro sobreviviente, que te ofrece ayuda para salir del mall…','Caminas durante mucho tiempo, pero logras ver unas escaleras..'
            ]
            
alternativas = ['a.) Unirse a las masas de gente e intentar escapar.\n' 'b.) Esconderse en uno de los vestidores',
      'a.) Buscar otra salida. \nb.) seguir escondiéndose.\n','a.) Una sala de descanso.)\n b.) Caja registradora.\n','a.) Llevarte un cutter y una tijera.\n ,b.) Llevar la impresora de boletos.\n','a.) A la derecha ves unas escaleras mecánicas que te llevarán al segundo piso de la tienda.\n b.)A la izquierda una puerta con un letrero de solo personal autorizado, que no sabes que contiene.\n' ,'a.) Usar la linterna de tu celular para revisar rápidamente si el conducto es seguro.\n b.) Avanzar sin linterna para no llamar la atención.','a.)Tomar un desvío hacia la derecha que parece llevar a unos conductos más grandes.\n b.)Seguir de frente hacia una luz que tiene al final del conducto con dos opciones.\n', 'a.) El camino más amplio, pero con un sonido de goteo.\n b.) Un camino angosto pero silencioso\n.','a.)Llevar unos dulces b.)No llevar nada', 'a.) Escaleras mecánicas. b.)Una puerta desconocida que dice "solo personal autorizado".\n', 'a.)Confiar en él y seguirlo.\n b.) Decides avanzar por separado.\n', 'a.) bajar al subterráneo\n b.) Subir al techo.\n ']

malas = ['(X) Cuando te intentas unir al grupo de personas en la salida, sientes como la gente te presiona y empiezas a  sentirte asfixiado. Te empiezas a desesperar , ya que no te estás moviendo lo suficiente para que esto valga la pena, decides que lo mejor es volver al vestidor y esconderte.', '(X) Un grupo de zombies te encuentra y te atacan -1','(X) La sala de descanso resulta estar vacía, así que te mueves a la caja registradora. -1','(X) Cuando intentas remover la impresora de la mesa, empieza a sonar la alarma de seguridad atrayendo a un grupo de zombies, rápidamente lo dejas y tomas el cutter con las tijeras.)', '(X) El segundo piso está repleto de zombies, que te terminan atacando -3)', '(X) Tropiezas con una trampa rota y caes directo al piso, donde te rodean los zombis y mueres).', '(X) aunque este espacio en grande no te lleva a nada, pero al menos tienes espacio para girar y tomar la otra opción.', '(X) Llegas a un final sin salida en donde no puedes hacer nada para volver, quedando atascado -3).', '(X) Aunque tu mochila no esta pesada, nunca puedes saber para que te servirán..', '(X) El segundo piso está repleto de zombies, que te terminan atacando -3)', '(X) lo sigues, pero empiezas a encontrar algo raro de él, caminas un poco más rápido pero el te ataca, el estaba infectado y te ha mordido… -3', '(X) subes y subes, hasta que logras llegar al techo… Caminas hasta el borde del techo  y ves el caos en las calles, camiones de bomberos chocados y vacíos, autos quemados.. Nadie te va a venir a buscar. Te acercas al más al borde, miras hacia abajo y saltas. Mínimo no vas a tener que sufrir esta pandemia.']

buenas=['Decisión correcta.','Decisión correcta.','Decisión correcta.','Aunque estas son pequeñas y poco potentes, estas no te estorbaran por mientras huyes.','La abres y entras en una habitación', ' Vez una trampa rota en el conducto que podrías haber caído de no haberlo iluminado).', 'Buena decisión.', 'Correcta: Te lleva a una tienda de dulces.','Nunca sobran los dulces🍬', ' Entras a los túneles que están dentro del mall que lo utilizan para llevar cosas como basura o mercancía, por suerte está vacío.', 'Te sientes un poco mal entonces decides volver a verlo, caminas lentamente y lo ves resulta que el estaba infectado, ahora convertido en un zombie.', ' Aunque tu cerebro te grita que es peligroso, sigues bajando.. resulta que este subterráneo, es por donde las tiendas botan su basura, dejando este espacio cerca de una salida. Ganaste!!!! 🏆🏆🏆🥇🥇🥇']

penalizaciones = [1, 1,1,1,3,3,1,3,1,3,3,3]

correctas = ['a','a','b','a','b','a','b','a','a','b','b','a']


while personaje > 0 and i < 12:
    pregunta = preguntas[i]
    alternativa = alternativas[i]
    mala = malas[i]
    buena = buenas[i]
    penalizacion = penalizaciones[i]
    correcta = correctas[i]


    print('\n\n' + pregunta)
    print(alternativa)

    situacion1 = (input(': '))
    total_preguntas = total_preguntas + 1
            
    while situacion1 not in ['a', 'b']:
        print('Respuesta no válida')
        print(pregunta)
        situacion1 = (input(': '))
        
    if situacion1 != correcta:
        print(buena)
        respuestas_correctas = respuestas_correctas + 1
                   
    else:
        print(mala)
        personaje = personaje - penalizacion
        if personaje == 0:
            break
                
    i = i + 1                

if personaje == 0:            
    print('¡Los zombies devoraron tu cerbro')
    x = '''
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣤⣤⣄⣀⠀⠀⢱⣄⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠋⢁⡘⠧⣞⣲⡸⠶⠓⠾⡛⡶⢤⡿⠛⠲⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣁⡀⠀⠀⠀⠀⠸⡉⠒⠛⠿⠦⠷⢶⠚⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⠋⣤⡜⡆⠀⠀⠀⠀⠀⢀⡤⠤⢤⡀⠠⢷⡁⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢠⠟⣆⣀⡰⠃⠐⠀⠄⠀⢠⡏⠀⣴⡄⠙⡄⠁⠈⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣀⣸⡄⠉⡉⢠⣾⣽⣉⡗⣄⠘⣇⠀⠉⠀⣠⠃⠀⠐⠉⠛⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢀⠖⠻⢀⠽⠯⠉⡛⠻⣿⣿⣿⣿⡇⠙⢷⣶⣾⠟⠀⠀⠀⠀⠀⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢰⠋⢃⡔⠁⢀⠀⡀⠀⣈⣻⡬⢧⠝⠁⠀⠀⠀⠂⠂⠀⣰⠦⠤⠖⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢸⠂⠎⠉⢸⠀⠀⠠⠐⡇⠀⠈⠙⠲⢤⣀⣀⣀⡤⠴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠈⠲⢆⣁⣠⣉⣴⣤⠦⠝⣶⠤⣄⡀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣈⠦⠋⠀⢈⣉⣓⡏⠀⠀⠉⠉⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠽⠀⢠⡞⠉⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢻⠉⠂⢀⡤⠤⣤⣄⣀⡀⠀⠀⠁⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠒⠋⠀⠀⠀⠀⠀⢳⠀⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣷⠶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀
     █▀▀ ▄▀█ █▀▄▀█ █▀▀   █▀█ █ █ █▀▀ █▀██
     █▄█ █▀█ █ ▀ █ ██▄   █▄█ ▀▄▀ ██▄ █▀▄'''
    
    print(x)
    
else:
    y = '''
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⠋⠉⠉⠓⠲⣄⠀⢸⡇⠀⠀⠀⠀⠀⣷⠤⡀⠀⠀⣰⣁⣈⠹⣀⢨⣦⠀⠀⡠⠒⠉⠉⠑⠂⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⣞⢸⣄⠈⢧⢸⡇⠀⠀⠀⠀⠀⣿⣒⢸⠀⢨⣇⠿⠿⣴⣿⡧⢏⠀⡤⣷⣿⣦⣴⣷⡄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⠁⢀⣠⠀⣠⠞⡹⢻⣾⣦⡞⢻⡇⠀⠀⠀⠀⠀⣿⠿⣋⣢⢤⣜⣜⣓⣂⣯⠶⠚⢀⠕⣟⡻⠿⣍⢉⡄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢻⢶⣶⢲⣾⡅⠀⠣⣘⣿⣃⠃⢸⡇⠀⠀⠀⠀⠀⣿⡵⢁⠀⠀⠀⠘⡿⠿⠺⣒⠶⣧⣤⡄⢀⣀⠚⡟⠂⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢈⠿⡷⢌⡿⢧⡔⢺⠆⠉⠁⡖⢺⡇⠀⠀⠀⠀⠀⣿⡧⣿⣷⣰⣿⣷⣵⣦⡀⠣⢐⡺⣟⠳⠺⡿⠷⣇⡀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠸⡄⢳⡏⠁⠀⠑⠊⠀⣠⣾⡔⣾⡇⠀⠀⠀⠀⠀⣯⠉⡇⡁⢱⣚⣇⢙⠛⠵⣿⣿⢠⢇⣙⣙⡼⢲⠿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⣶⣶⡾⢟⣹⣿⣿⢿⡇⠀⠀⠀⠀⠀⣿⣠⣾⡅⢹⢁⣼⣦⢽⢼⣎⡣⠠⣿⣭⣧⡗⡦⢿⡄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠻⣿⣿⣇⣸⡿⡷⠚⢣⠀⠀⠀⠀⠀⣿⢪⢛⡃⢻⡝⠁⡈⠉⠏⠈⣳⠈⡾⣁⣀⠘⢈⡀⠁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠑⣭⠽⢛⣾⣇⢀⡸⠁⠀⠀⠀⠀⣿⢻⡉⢩⢻⡃⢾⣿⢇⢰⣷⣭⢿⣃⠿⠿⣤⢿⡿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠈⠁⠀⠀⢳⣟⢹⡇⠀⠀⠀⠀⠀⣿⣋⡇⣆⡰⢧⢰⣵⣨⣘⢛⣟⠆⠘⢅⣂⣶⣖⡰⠃⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡤⢤⡶⠛⠬⢾⡇⠀⠀⠀⠀⠀⣿⠃⢧⢊⡩⡞⢷⣯⡭⣵⠫⡟⠠⡴⢟⣹⠛⣏⡷⡅⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣳⣬⣀⣀⡠⣼⡇⠄⠀⠀⠀⠀⣿⣠⠁⡝⢁⢹⢸⢒⢧⣛⡶⠃⢠⢇⡞⢼⣼⠝⣤⠁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⡇⢒⣲⠂⠀⠀⣷⡟⡸⡁⢸⠀⢾⢸⠎⢸⢻⠂⢸⣼⠁⠀⠆⠀⢛⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠛⢿⣿⠏⣿⣿⡇⠀⠀⠀⠀⠀⣏⣠⠏⢳⠎⣀⣼⣸⠀⢸⣸⠉⣽⣸⠖⢚⣑⠒⣿⡁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣃⠀⣸⠁⠀⢸⣾⡇⠀⠀⠀⠀⠀⣇⠙⠻⢻⢂⣜⢫⣜⠳⣼⣬⡆⠈⡻⠀⢸⣧⠀⢸⠁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣀⣀⡤⢤⣠⢯⣌⣽⣃⣀⣀⣸⣿⡇⢀⣀⣀⣀⠀⡟⠀⠀⠸⠰⠞⡟⡇⠀⢸⠁⠀⢀⡳⠛⣼⢻⠖⢺⡀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠨⠭⠽⣿⡢⣌⠀⢹⠯⠭⠥⠬⢭⣿⡇⠑⠒⢷⠒⠁⡇⠀⠀⢧⡠⣄⡇⡇⡰⣼⠀⠀⠉⠉⠉⠁⠈⠙⠒⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠃⠀⠀⢀⠴⠚⢸⡇⠀⠀⠀⠀⠀⡇⠀⠾⠭⠤⠭⠀⠫⠥⠬⠵⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    
                  █▄█ █▀█ █ █   █ █ █ █ █▄ █ █ 
                   █  █▄█ █▄█   ▀▄▀▄▀ █ █ ▀█ ▄'''
    print('¡Lograste salir del mall!')
    print('\n', y)
```