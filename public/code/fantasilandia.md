```python
def simular_parque():
    fichas = 20
    dinero = 15000
   
    juegos = {
        "1": ("Autos Chocones", 2, "¡Pum! Chocaste a todos tus amigos. 🚗"),
        "2": ("Tsunami", 4, "¡Que bajada mas mojada!🏄‍♂️🏄‍♂️"),
        "3": ("Raptor", 3, "¡Aaaaaah! ¡Qué caída tan increíble! 🎢"),
        "4": ("Casa del Terror", 2, "¡Búuu! Casi mueres de susto. 👻"),
        "5": ("Tagada", 3, " ¡OMG! te cayo alguien encima 🤕"),
        "6": ("Spider", 5, "¡OOPS! se te cayo el celular 🥺"),
        "7": ("Tren minero", 4, "¡Zzz! la fila fue eterna, pero valio la pena 🥳"),
        "8": ("Hambre", 0, "Te dio hambre y no te subiste a nada 🤔"),
        "9": ("Baño", 1, "Te sientes mareado 🤢")
    }

    # Nuevo diccionario para la comida
    menu_comida = {
        "1": ("Completo Italiano", 5000, "¡Delicioso! La palta estaba perfecta. 🌭"),
        "2": ("Papas Fritas", 3500, "Crujientes y saladitas. 🍟"),
        "3": ("Churros con Manjar", 2000, "¡oooh! tenia mucho manjar. 🥖"),
        "4": ("Bebida Grande", 2500, "Qué refrescante. 🥤"),
        "5": ("Te arrepentiste", 0, "No compras nada 🙄."),
        "6": ("Baño", 500, "Sientes la necesidad de hacer el 2 💩")
    }

    print("--- ¡Bienvenido a Fantasilandia! ---")

colores_autos = ["rojo", "azul", "verde", "amarillo", "negro",]
    while fichas > 0:
        print(f"\nESTADO: {fichas} Fichas | ${dinero} Dinero")
        print("-" * 30)
        print("¿Qué quieres hacer?")
        print("A. Subir a un juego")
        print("B. Ir al Patio de Comidas")
        print("C. Salir del parque")
       
        accion = input("Selecciona una opción: ").lower()

        if accion == 'c':
            break

        # SECCIÓN DE JUEGOS
        elif accion == 'a':
            print("\n--- ATRACCIONES ---")
            for tecla, info in juegos.items():
                print(f"{tecla}. {info[0]} ({info[1]} fichas)")
           
            opcion = input("Elige un juego: ")
            if opcion in juegos:
                nombre, costo, mensaje = juegos[opcion]
                if fichas >= costo:
                    fichas -= costo
                    print(f"\n>> {mensaje}")
                else:
                    print(f"\n❌ No tienes fichas suficientes para {nombre}.")
            else:
                print("\nEsa atracción no existe.")

        # SECCIÓN DE COMIDA
        elif accion == 'b':
            print("\n--- PATIO DE COMIDAS ---")
            for tecla, info in menu_comida.items():
                print(f"{tecla}. {info[0]} (${info[1]})")
           
            opcion = input("¿Qué se te antoja?: ")
            if opcion in menu_comida:
                nombre, precio, mensaje = menu_comida[opcion]
                if dinero >= precio:
                    dinero -= precio
                    print(f"\n>> {mensaje}")
                else:
                    print(f"\n❌ No tienes suficiente dinero para {nombre}.")
            else:
                print("\nEsa opción no está en el menú.")

        else:
            print("\nOpción no válida.")

    print(f"\n--- Resumen del día ---")
    print(f"Te sobraron {fichas} fichas y ${dinero} pesos. ¡Vuelve pronto!")

Simular_parque()
```