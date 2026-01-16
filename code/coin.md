```python
import time
import random

juego_activo = True

while juego_activo:
    print('¡Bienvenidos a "The Two Sides of the Coin" 😎!')
    time.sleep(3)

    print("Deberás ir tomando diferentes elecciones a medida que vas jugando 🤯")
    time.sleep(3)
    print('Tus decisiones... ¡Tu historia! 😎🙌')
    time.sleep(3)

    print("¡Empecemos! 😉")
    time.sleep(2)

    print("Una tarde en San Joaquín, ocurrió un gran robo al Banco de Chile 🏛 ") 
    time.sleep(4)

    print("\nElige tu personaje:")
    print("1.- Jefe de policía 👮")
    print("2.- Ladrón 😈")
   
    decision = int(input("Elige 1 o 2 🤔: "))

    if decision == 1:
        print("\nERES EL JEFE DE POLICÍA 👮")
        time.sleep(2)
        print("Llegas al banco a los pocos minutos de la fuga del ladrón.")
        time.sleep(3)
        print("Ves dos caminos posibles para poder atraparlo.")
        time.sleep(3)
        
        print("1.- Entras y te diriges a revisar las cámaras de seguridad para revisar más a detalle cómo sucedió todo 🧐.")
        print("2.- Desde tu patrulla, ves a lo lejos un auto que va muy rápido. Por lo tanto, sigues tu instinto y lo persigues 🚓")

        accion_policia = int(input("Elige 1 o 2 🤔: "))

        if accion_policia == 1:
            print("\nMiras las cámaras... ¡E identificaste la patente y el auto específico del ladrón! ¡Procedes a rastrearlo gracias a tu base de datos!")
            time.sleep(5)
            print('Luego de consultar en la base de datos, consigues la dirección del ladrón y vas tras él.')
            time.sleep(4)
            print('Llegas al domicilio del ladrón por tu cuenta propia.')
            time.sleep(3)
            print('Antes de entrar, avisas a la central y llamas por refuerzos.')
            time.sleep(3)
            
            print('\nDecide:')
            print('1.- Entras a la fuerza sin que lleguen los refuerzos aún')
            print('2.- Esperas a que lleguen y entrar juntos')
            
            accion_policia = int(input('Elige 1 o 2: '))

            if accion_policia == 1:
                print('\nFinalmente, entras solo y encuentras al ladrón cambiándose ropa.')
                time.sleep(4)
                print('Ves al ladrón indefenso, por lo cual, procedes a arrestarlo y llevarlo a la comisaría.')
                time.sleep(4)
                print('Ya en la comisaría, ocurre una interrogación con otro agente, con el cual el ladrón confiesa su delito...')
                time.sleep(5)
                print('...pero, a su vez, delata al policía que entró sin una orden previa.')
                time.sleep(4)
                print('\nTiempo después (1 semana)...')
                time.sleep(2)
                print('Se reanuda el caso y se declara culpable tanto al ladrón, como al policía, por infringir la ley.')
                time.sleep(5)
                print('Ahora eres compañero de celda con el ladrón. 🚔')
                time.sleep(3)
                print('Así son las leyes.')
                time.sleep(2)
                print('\n--- Secret Ending Completado ---')
                juego_activo = False

            elif accion_policia == 2:
                print('\nFinalmente, entras acompañado y te mandan a revisar una habitación mientras ellos revisan el resto de la casa.')
                time.sleep(5)
                print('Entras y te encuentras al ladrón cambiándose ropa.')
                time.sleep(3)
                print('Piensas que ya está hecho el trabajo, hasta que el ladrón te dice:')
                time.sleep(3)
                print('Caíste.')
                time.sleep(2)
                print('¡Y empieza una emboscada dentro del hogar!')
                time.sleep(2)
                print('Muchos ladrones salen a defender a su capo los cuales estaban en puntos estratégicos revisando las afueras de la casa.')
                time.sleep(6)
                print('Pasado un rato, los refuerzos logran abatir a cada uno de los ladrones que defendían a su jefe, y solo quedas tú. Uno a uno, todo o nada.')
                time.sleep(6)
                print('Ves que el ladrón enfunda su pistola, listo para dispararte, debes reaccionar rápido o de lo contrario, mueres.')
                time.sleep(5)
                print('Tienes una cubierta y tienes tu pistola.')
                
                print('\nDecide rápido:')
                print('1.- Dispara')
                print('2.- Ponte a cubierto')
                
                accion_policia = int(input('Elige: 1 o 2: '))
            
                if accion_policia == 1:
                   print('\nLogras darle al ladrón, neutralizándolo pero a costa de tu propia vida...')
                   time.sleep(3)
                   print('...quedando en riesgo vital debido a una bala que te dio en la Médula Espinal Torácica T2.')
                   time.sleep(5)
                   print('Has cumplido tu misión. Has sido galardonado con una medalla de solafita (el más alto valor) debido a tu heroica acción.')
                   time.sleep(5)
                   print('Sin embargo, ya no podrás ejercer más tu cargo y tendrás que reinventar la forma en la que vives tu día a día.')
                   time.sleep(4)
                   print('\n--- Parapléjico Ending ---')
                   juego_activo = False
     
                elif accion_policia == 2: 
                    print('\nLogras ponerte a cubierto, esquivando la bala.')
                    time.sleep(3)
                    print('Los refuerzos entran a la habitación y logran neutralizar al ladrón.')
                    time.sleep(3)
                    print('Llegando a la comisaría, meten preso al ladrón y tú junto con tu equipo son galardonados con una medalla de servicio.')
                    time.sleep(4)
                    print('\n--- Good Ending ---')
                    juego_activo = False

        elif accion_policia == 2:
            print("\nEnciendes la sirena y aceleras a fondo para alcanzarlo. 🚔")
            time.sleep(3)
            print("El auto disminuye su velocidad. Estaciona y explica que iba a esa velocidad debido a que se atrasó en el trabajo 😰")
            time.sleep(5)
            print("Has perdido tiempo valioso de la investigación ❌")
            time.sleep(3)
            print("El ladrón tiene más ventaja de ganar 😒👎")
            time.sleep(3)
        
            print("\nAhora escoge tu próximo movimiento ❗")
            print("1. Decides ir preguntando a la gente que se encontraba por la zona si vieron algo 🤨")
            print("2. Decides contactar a un detective y entrar al banco para revisar detalles (Planificación)")
        
            accion_policia = int(input("Elige 1 o 2: "))
        
            if accion_policia == 1:
                print("\nVas caminando, hablando con los civiles cuando de repente...")
                time.sleep(3)
                print("¡Un señor vio al sospechoso! 😲")
                time.sleep(2)
                print("Te comenta que se bajó del auto con una gran bolsa que se notaba a la vista que era pesada.")
                time.sleep(4)
                print("Pero te menciona que se dirigió a un callejón con 2 caminos, y que no sabe cual tomó 🤷.")
                time.sleep(4)
           
                print("Decide")
                print("1. Izquierda")
                print("2. Derecha")
            
                accion_policia = int(input("Elige 1 o 2: "))
            
                if accion_policia == 1:
                    print("\nCorres lo más rápido posible, hasta que llegas a un terreno con muchas casas rurales.")
                    time.sleep(4)
                    print("Tocas la puerta y te abre un adulto mayor que te pregunta qué necesitas.")
                    time.sleep(3)
                    print("A lo que respondes: Buenos días, necesito inspeccionar su casa.")
                    time.sleep(3)
                    print("El señor sin problema te invita a pasar.")
                    time.sleep(2)
                    print("Tras revisar todo el domicilio a fondo, te diriges al siguiente, y al siguiente, y al siguiente...")
                    time.sleep(4)
                    print("Pasan las horas y llevas revisadas 6 casas, a punto de ser 7, pero, pierdes la esperanza de hallar algo y te das por vencido.")
                    time.sleep(5)
                    print("\n--- Bad Ending ---")
                    juego_activo = False

                elif accion_policia == 2:
                    print("\nCorres lo más rápido posible, hasta que llegas a una casa que está rodeada por una cerca de metal.")
                    time.sleep(4)
                    print("Ahora, ¿qué harás?")
                    print("1. Saltar la reja sin importar como.")
                    print("2. Ir a la puerta principal de la casa, inventando una excusa para poder entrar.")
                    
                    accion_policia = int(input("Elige 1 o 2: "))
                    
                    if accion_policia == 1:
                        print("\nAl saltar la reja con éxito, te diriges inmediatamente al patio y entras por la puerta trasera de la casa...")
                        time.sleep(4)
                        print("...y decides escabullirte entre los pasillos, evadiendo a una mujer que se paseaba por el lugar.")
                        time.sleep(4)
                        print("Finalmente, logras dar con la última habitación de la casa y te encuentras al ladrón cambiándose de ropa.")
                        time.sleep(4)
                        print("Aprovechas que se encuentra de espaldas y te acercas lentamente a él.")
                        time.sleep(3)
                        
                        print("Decide tu próximo movimiento")
                        print("1. Lo tratas de noquear")
                        print("2. Lo amenazas con tu pistola")

                        accion_policia = int(input("Elige 1 o 2: 🤔 "))

                        if accion_policia == 1:
                            print("\n¡Lo noqueas con éxito!")
                            time.sleep(2)
                            print("Ya que tu patrulla se encuentra muy lejos, decides pedir un Uber que te lleve a la Comisaría.")
                            time.sleep(4)
                            print("Luego de pedirlo, vas llevando al ladrón con mucho cuidado hacia la puerta de la entrada sin que te detecte la mujer.")
                            time.sleep(5)
                            print("Tomas el Uber y le explicas al chofer por qué te encuentras con una persona inconsciente, el cual te cree debido a ver tu placa de policía.")
                            time.sleep(6)
                            print("Entras en la comisaría y expones al ladrón ante tus superiores...")
                            time.sleep(3)
                            print("...quienes te mencionan que capturaste al Capo de San Joaquín. Un criminal que han estado buscando durante años.")
                            time.sleep(5)
                            print("Te felicitan por tu misión y ante tal hazaña deciden ascenderte de puesto.")
                            time.sleep(3)
                            print("\n--- Ending con mucha aura ---")
                            juego_activo = False

                        elif accion_policia == 2:
                            print('\nColocas tu pistola en su espalda y le dices: “Quedas detenido por ser el principal sospechoso del robo al Banco de Chile, tienes derecho a guardar silencio”')
                            time.sleep(6)
                            print("Mientras le hablabas, el ladrón se daba vuelta lentamente.")
                            time.sleep(3)
                            print("Pero en un abrir y cerrar de ojos te empuja el brazo hacia un lado y te derriba en muy pocos segundos.")
                            time.sleep(4)
                            print("Agarra tu arma y te dispara directo en la cabeza… debiste haber apuntado ahí desde un principio.")
                            time.sleep(4)
                            print("\n--- Bad Ending ---")
                            juego_activo = False

                    elif accion_policia == 2:
                        print("\nLlamas a la puerta.")
                        time.sleep(2)
                        print("Una mujer te abre y te pregunta que es lo que necesitas.")
                        time.sleep(3)
                        print("Responde")
                        print("1. Miente")
                        print("2. Verdad")
                    
                        accion_policia = int(input("Elige 1 o 2: "))
                    
                        if accion_policia == 1:
                            print('\n"Un vecino reportó gritos dentro del domicilio, ¿le molesta si entro a inspeccionar?"')
                            time.sleep(4)
                            print("Mujer: -en duda- Claro... puedes entrar.")
                            time.sleep(2)
                            print("Ya estando dentro, empiezas a inspeccionar el entorno.")
                            time.sleep(3)
                            print("Tras 5 minutos de rebuscar en la planta baja, escuchas un sonido muy difuso pero no logras descifrar de donde proviene.")
                            time.sleep(5)
                            print("Miras a tu alrededor y te planteas ir al patio o a la planta de arriba.")
                            
                            print("1. Ir al patio")
                            print("2. Ir a la planta de arriba")
                            
                            accion_policia = int(input("Elige 1 o 2: "))
                            
                            if accion_policia == 1: 
                                print("\nSalió rápidamente mientras dejaba sola a la mujer en la sala.")
                                time.sleep(3)
                                print("En cuanto llegó al patio, rebuscó rápidamente, pero al final no encontró nada.")
                                time.sleep(4)
                                print("Al volver a la sala, se encontró con la mujer sentada en el sillón con una expresión ansiosa.")
                                time.sleep(4)
                                
                                print("Decide tu próximo movimiento:")
                                print("1. Le preguntas a la mujer qué ocurre")
                                print("2. Vas a investigar directamente afuera de la casa por la entrada principal")
                                    
                                accion_policia = int(input("Elige 1 o 2: "))
                                    
                                if accion_policia == 1: 
                                    print("\nDebido al estado de la mujer esta te responde con un tartamudeo que te imposibilita entenderle lo que te cuenta, perdiendo tiempo valioso.")
                                    time.sleep(6)
                                    print("Derrotado, sales de la casa solo para ver el rastro de las llantas contra el piso de pavimento, dándote cuenta que el ladrón escapó.")
                                    time.sleep(5)
                                    print("No lograste atraparlo...")
                                    print("\n--- Fail Ending ---")
                                    juego_activo = False
                                
                                elif accion_policia == 2:
                                    print("\nCaminas hacia la entrada, y al abrir la puerta ves cómo se va el mismo auto a quien interrogaste hace unas horas.")
                                    time.sleep(5)
                                    print("Al no atrapar al sospechoso, no tienes pruebas.")
                                    time.sleep(2)
                                    print("\n--- Bad Ending, te engañaron y fracasaste ---")
                                    juego_activo = False

                            elif accion_policia == 2: 
                                print("\nTe diriges rápidamente hacía las escaleras, dejando sola a la mujer en la sala.")
                                time.sleep(3)
                                print("En cuanto llegaste arriba, viste que al fondo se encontraba una puerta entreabierta, decides ir hacia allá.")
                                time.sleep(4)
                                print("Lentamente miras por el pequeño espacio que hay...")
                                time.sleep(3)
                                print("¡Y de pronto eres impactado con la puerta... se trata del ladrón!")
                                time.sleep(3)
                                print("Recibiste un duro golpe en la cara, te sangra mucho la nariz.")
                                time.sleep(3)
                                
                                print("¿Ahora qué harás?")
                                print("1. Enfrentar al ladrón")
                                print("2. Huir")
                                
                                accion_policia = int(input("Elige 1 o 2: "))

                                if accion_policia == 1: 
                                    print("\nResistes el dolor como un verdadero sigma y embistes con todas tus fuerzas al ladrón.")
                                    time.sleep(4)
                                    print("Hubo mucho forcejeo, pero logras ponerte encima de él y conectar varios golpes, hasta que logras que quede inconsciente.")
                                    time.sleep(5)
                                    print("Llamas rápidamente a tu amigo policía de máxima confianza y le explicas toda la situación.")
                                    time.sleep(4)
                                    print("Acto seguido, le pides que te venga a buscar inmediatamente.")
                                    time.sleep(3)
                                    print("Bajas las escaleras con el ladrón noqueado y ves que la mujer acaba de colgar el teléfono.")
                                    time.sleep(4)
                                    
                                    print("Toma una decisión")
                                    print("1. Espera a que llegue el otro oficial")
                                    print("2. Levanta al ladrón a tu hombro y corre con todas tus fuerzas")
                                    
                                    accion_policia = int(input("Elige 1 o 2: "))

                                    if accion_policia == 1:
                                        print("\nAbres la puerta y ves que tu amigo ha llegado. Te subes a la patrulla.")
                                        time.sleep(4)
                                        print("Llevas al ladrón ante tus superiores y les explicas todos los detalles.")
                                        time.sleep(4)
                                        print("Ellos a medida que hablas, recriminan tus acciones impetuosas y la falta de comunicación con el resto.")
                                        time.sleep(5)
                                        print("Hasta que les muestras a quien capturaste...")
                                        time.sleep(3)
                                        print("Te miran con asombro y te explican que este individuo no es simplemente un ladrón...")
                                        time.sleep(4)
                                        print("...sino que se trata del Capo de San Joaquín, el criminal más buscado de la comuna durante mucho tiempo.")
                                        time.sleep(5)
                                        print("Te felicitan y te dan un aumento salarial por tu valentía.")
                                        time.sleep(2)
                                        print("\n--- Money Ending ---")
                                        juego_activo = False

                                    elif accion_policia == 2:
                                        print("\nCorres un par de metros y ves que se acerca un auto.")
                                        time.sleep(3)
                                        print("¡Pero se trata de tu compañero! Ha llegado muy rápido.")
                                        time.sleep(3)
                                        print("Llevas al ladrón ante tus superiores y les explicas todos los detalles.")
                                        time.sleep(4)
                                        print("Ellos a medida que hablas, recriminan tus acciones impetuosas y la falta de comunicación con el resto.")
                                        time.sleep(5)
                                        print("Hasta que les muestras a quien capturaste...")
                                        time.sleep(3)
                                        print("Te miran con asombro y te explican que este individuo no es simplemente un ladrón...")
                                        time.sleep(4)
                                        print("...sino que se trata del Capo de San Joaquín, el criminal más buscado de la comuna durante mucho tiempo.")
                                        time.sleep(5)
                                        print("Te felicitan y te dan un aumento salarial por tu valentía.")
                                        time.sleep(2)
                                        print("\n--- Money Ending ---")
                                        juego_activo = False

                                elif accion_policia == 2: 
                                    print("\nTe levantas y retrocedes hasta las escaleras adolorido.")
                                    time.sleep(3)
                                    print("El ladrón se acerca lentamente a ti.")
                                    time.sleep(3)
                                    print("Pero decides enfundar tu pistola contra él.")
                                    time.sleep(3)
                                    print("Pero de pronto recibiste un golpe en la cabeza con una lámpara por detrás. Se trataba de la mujer.")
                                    time.sleep(5)
                                    print("Caes inmediatamente al suelo.")
                                    time.sleep(2)
                                    print("El ladrón se acerca a ti y te pregunta si vienes solo.")
                                    time.sleep(3)
                                    print("A lo que respondes que sí.")
                                    time.sleep(2)
                                    print("Y te ofrece un trato: “Si haces como que todo esto no pasó, te doy ahora mismo en efectivo 667 millones de pesos”.")
                                    time.sleep(5)
                                    
                                    print("Decide")
                                    print("1. Aceptar")
                                    print("2. Rechazar")
                                    
                                    accion_policia = int(input("Elige 1 o 2: "))

                                    if accion_policia == 1:
                                        print("\nTe entrega el dinero y te diriges inmediatamente a tu casa a guardarlo.")
                                        time.sleep(4)
                                        print("Te diriges a la comisaría dando excusas y mentiras sobre los hechos.")
                                        time.sleep(4)
                                        print("Frente a tu fracaso en la misión, te despiden.")
                                        time.sleep(3)
                                        print("\n--- Bad Honor Ending ---")
                                        juego_activo = False

                                    elif accion_policia == 2:
                                        print("\nLe dices: Prefiero morir que ser un corrupto.")
                                        time.sleep(3)
                                        print("A lo que él responde: “Si tú lo dices, era más fácil entregarte el dinero que desaparecer tu cuerpo pero bueno… ya que”.")
                                        time.sleep(5)
                                        print("El ladrón te dispara.")
                                        print("\n--- Bad Ending ---")
                                        juego_activo = False

                        elif accion_policia == 2:
                            print('\n“Disculpe molestarla pero tengo la sospecha de que dentro de este domicilio se encuentra un ladrón que robó el Banco de Chile hace muy poco tiempo en esta misma comuna”')
                            time.sleep(6)
                            print('La mujer nerviosa te responde: “No sé de qué me está hablando oficial”.')
                            time.sleep(4)
                            print('“¿Me permite pasar a echar un vistazo por favor?”')
                            time.sleep(3)
                            print('La mujer te dice: “De acuerdo pero espéreme un momento por favor”. Y cierra la puerta nuevamente.')
                            time.sleep(5)
                            print('Esperas un par de minutos en la entrada y la mujer te permite entrar.')
                            time.sleep(4)
                            print('Al entrar, ves a un hombre parado en las escaleras, con postura muy firme.')
                            time.sleep(4)
                            print('El hombre sin dudar te dispara.')
                            time.sleep(2)
                            print('Caes rendido al suelo, y ves de reojo que el hombre se acerca a ti y te dice: “No tuviste que decir cuáles eran tus intenciones aquí”.')
                            time.sleep(5)
                            print('Mueres desangrado.')
                            print('\n--- Bad Ending ---')
                            juego_activo = False

            elif accion_policia == 2:
                print("\nAntes de entrar, contactas a un detective y posteriormente, empiezas a revisar minuciosamente cada esquina del hecho cometido.")
                time.sleep(6)
                print("El detective tras analizar y entrevistar a cada victima de este robo, ve que hay cierto patrón en las acciones cometidas por el delincuente.")
                time.sleep(6)
                print("Lleva esta información hacia la comisaría y luego de una reunión importante, concluyen que es el capo del grupo criminal más buscado de San Joaquín.")
                time.sleep(6)
                print("Pasan las horas y preparas un plan el cual consiste en lo siguiente:")
                
                print("1. Decides contactar con tu equipo policial más cercano y realizar una redada mañana (alto riesgo de muerte)")
                print("2. Decides idear un plan con mayor refuerzo policial pero demora un mes en realizarse (bajo riesgo de muerte)")
                
                accion_policia = int(input("Decide 1 o 2: "))

                if accion_policia == 1:
                    print("\nLes explicas la situación a tus policías de confianza y dicen que esta es una misión suicida, ya que son 6 personas.")
                    time.sleep(5)
                    print("Los convences de qué si esperan un mes, el Capo puede cambiar de localización y nunca poder atraparlo.")
                    time.sleep(5)
                    print("Tú: Amigos, si lo atrapamos nosotros, pasaremos a la historia.")
                    time.sleep(3)
                    print("Después de discutir con ellos sobre la situación, aceptan y se ponen a idear un plan.")
                    time.sleep(4)
                    print("Tienen todo claro, se dividirán en 3 grupos de 2.")
                    print("Cuatro cuidarán las entradas y el resto buscará por toda la casa.")
                    time.sleep(5)
                    print("Entrarán dos policías cómo infiltrados y el resto entrará gracias a... ¡decide como se infiltrarán!")

                    print("1. Hacerse pasar por Técnicos de Soporte de Red")
                    print("2. Hacerse pasar por Rappi")
                    
                    accion_policia = int(input("Elige 1 o 2: "))

                    if accion_policia == 1:
                        print('\nLlegó el día: llegas a la puerta principal de la casa del ladrón y se hacen pasar por técnicos de VTR por problemas de internet en la zona, y que necesitan su consentimiento para cambiar totalmente cables.')
                        time.sleep(8)
                        print('Mujer: ¡Ya era hora! Pasen, no hay problema.')
                        time.sleep(3)
                        print('Tú y tu equipo deciden pasar e inspeccionar desde lejos la casa, le preguntan a la mujer donde se encuentra el router para así hallar más habitaciones.')
                        time.sleep(6)
                        print('Mujer: ¡Claro! Pasen nomás, está en la pieza de mi marido, acompáñenme.')
                        time.sleep(4)
                        print('Luego de entrar en la pieza de aquel hombre, se percatan de armas, por lo cual deciden entrar en acción y dejar de actuar como técnicos de red para revelar la verdadera intención: arrestar al capo de San Joaquín.')
                        time.sleep(8)
                        print('Mujer: ACCENDI LA FOTOCAMERA, ORA!')
                        time.sleep(3)
                        print('Los policías confundidos, no entendieron y quedaron 2 segundos en shock, segundos cruciales que les costó la vida a cada uno de ellos.')
                        time.sleep(5)
                        print('La banda criminal al percatarse de aquel código italiano que manejaban entre ellos, salieron rápidamente de sus escondites, armados y listos para matar.')
                        time.sleep(6)
                        print('Se produce una balacera dentro de la habitación donde mueren todos los policías.')
                        time.sleep(4)
                        print('Los cuerpos nunca fueron encontrados.')
                        print('\n--- Bad Ending ---')
                        juego_activo = False

                    elif accion_policia == 2:
                        print('\nLlegó el día: rastreas los pedidos de Rappi que llegaban a la casa del ladrón, se hicieron pasar por uno, en este caso, tú.')
                        time.sleep(6)
                        print('Llegas a la puerta luego de pedido de pizza con piña (???) ordenado desde el hogar del ladrón.')
                        time.sleep(4)
                        print('Sale una mujer a recibir el pedido.')
                        time.sleep(2)
                        print('Mujer: ¿Es todo?')
                        print('Sí, pero estimada, ¿podría pasar al baño rápidamente?')
                        time.sleep(4)
                        print('Mujer: Mmm, claro, pase, está abajo, yo lo acompaño.')
                        time.sleep(3)
                        print('Llegas al baño pero te percatas que está su supuesto hermano y ella afuera del baño vigilándote, pero decides avisarle a tu equipo a través del celular que entren en ese instante.')
                        time.sleep(6)
                        print('La mujer se percata de un ruido en la planta superior y decide ir a revisar, se da cuenta que son policías y se da cuenta que eras un infiltrado, por lo cual decide gritar:')
                        time.sleep(6)
                        print('Mujer: ACCENDI LA FOTOCAMERA, ORA')
                        time.sleep(3)
                        print('Los policías confundidos, no entendieron y quedaron 2 segundos en shock, segundos cruciales que les costó la vida a cada uno de ellos.')
                        time.sleep(5)
                        print('La banda criminal al percatarse de aquel código italiano que manejaban entre ellos, salieron rápidamente de sus escondites, armados y listos para matar.')
                        time.sleep(6)
                        print('Se produce una balacera dentro de la vivienda, donde mueren todos los policías.')
                        time.sleep(4)
                        print('Los cuerpos nunca fueron encontrados.')
                        print('\n--- Bad Ending ---')
                        juego_activo = False

                elif accion_policia == 2:
                    print("\nTras realizar un extenso contacto para reunir la mayor cantidad de policías, pasa un mes y se concreta el plan un día viernes 16 de enero de 2026.")
                    time.sleep(6)
                    print("Llegan al lugar donde está ubicado el capo y su grupo criminal.")
                    time.sleep(3)
                    print("Empieza la redada: Todos los policías descienden tanto en camiones como en helicópteros.")
                    time.sleep(4)
                    print("Entran al domicilio y capturan a gran mayoría del grupo, pero el capo se está yendo por una ventana.")
                    time.sleep(5)
                    
                    print("Necesitas decidir rápido:")
                    print("1.- Le disparas y lo matas")
                    print("2.- No le disparas")

                    accion_policia = int(input("Elige 1 o 2: "))

                    if accion_policia == 1:
                        print("\nTras haberle disparado al ladrón, la bala impacta en su corazón, haciendo que fallezca en el lugar.")
                        time.sleep(4)
                        print("(Una semana después): Se reportan algunos incendios en comisarías y saqueos en tiendas en venganza a la captura del capo de San Joaquín.")
                        time.sleep(5)
                        print("No logras desmantelar todo el grupo criminal.")
                        print("\n--- Neutral Ending ---")
                        juego_activo = False

                    elif accion_policia == 2:
                        print("\nObservas cómo se escapa por la ventana.")
                        time.sleep(3)
                        print("Pero cuando baja al patio para escapar, tus compañeros de la redada lo interceptan y capturan.")
                        time.sleep(4)
                        print("Junto con tu equipo, llevan al Capo a la comisaría, donde lo interrogan y éste para obtener una menor condena, confiesa todo e incluso delata a sus contactos mafiosos.")
                        time.sleep(7)
                        print("Pasa 1 año, el índice de crimen organizado ha disminuido gradualmente por todo Santiago.")
                        time.sleep(5)
                        print("Por tu gran logro, tus superiores te ascienden de puesto y el mismísimo Presidente de la República te invita a la Moneda para felicitarte en persona por ayudar tanto al país.")
                        time.sleep(6)
                        print("\n--- 10/10 Ending ---")
                        juego_activo = False

    elif decision == 2:
        print("\nHas elegido ser el Ladrón.")
        time.sleep(2)
        print("Esta historia está en construcción por los desarrolladores.")
        time.sleep(3)
        print("¡Intenta jugar como Policía por ahora!")
        time.sleep(3)
    
    else:
        print("\nOpción no válida. Por favor escribe 1 o 2.")
        time.sleep(1)
```