```python
import random

jugadores = {
    "Jugador 1": 100,
    "Jugador 2": 100
}

equipos = {
    "Real Madrid": 88,
    "Manchester City": 90,
    "Barcelona": 85,
    "Bayern Munich": 89,
    "PSG": 86,
    "Liverpool": 87
}

def simular_goles(media):
    base = media / 30
    return max(0, int(random.gauss(base, 1)))

def elegir_equipo(jugador):
    print(f"\n {jugador} - Elegí tu equipo")
    for i, eq in enumerate(equipos, 1):
        print(f"{i}. {eq} (Media {equipos[eq]})")
    opcion = int(input("Número de equipo: ")) - 1
    equipo = list(equipos.keys())[opcion]
    return equipo, equipos[equipo]

def jugar_partido():
    elecciones = {}

    for jugador in jugadores:
        equipo, media = elegir_equipo(jugador)
        apuesta = int(input(f" {jugador}, ¿cuántas monedas apostás?: "))

        if apuesta <= 0 or apuesta > jugadores[jugador]:
            print(" Apuesta inválida. Se pierde el turno.")
            elecciones[jugador] = None
        else:
            jugadores[jugador] -= apuesta
            elecciones[jugador] = {
                "equipo": equipo,
                "media": media,
                "apuesta": apuesta
            }

    if any(v is None for v in elecciones.values()):
        return

    j1, j2 = list(elecciones.keys())
    e1, e2 = elecciones[j1], elecciones[j2]

    goles_1 = simular_goles(e1["media"])
    goles_2 = simular_goles(e2["media"])

    print("\n RESULTADO FIFA")
    print(f"{e1['equipo']} {goles_1} - {goles_2} {e2['equipo']}")

    if goles_1 > goles_2:
        ganancia = int(e1["apuesta"] * 1.8)
        jugadores[j1] += ganancia
        print(f" {j1} gana {ganancia} monedas")
    elif goles_2 > goles_1:
        ganancia = int(e2["apuesta"] * 1.8)
        jugadores[j2] += ganancia
        print(f" {j2} gana {ganancia} monedas")
    else:
        jugadores[j1] += e1["apuesta"]
        jugadores[j2] += e2["apuesta"]
        print(" EMPATE — ambos recuperan su apuesta")

    print("\n MONEDAS ACTUALES")
    for j, m in jugadores.items():
        print(f"{j}: {m}")

def juego():
    print(" MINI FIFA CON APUESTAS - 2 PERSONAS ")

    while all(m > 0 for m in jugadores.values()):
        jugar_partido()
        cont = input("\n¿Jugar otro partido? (s/n): ").lower()
        if cont != "s":
            break

    ganador = max(jugadores, key=jugadores.get)
    print("\n JUEGO TERMINADO")
    print(f"Ganador: {ganador} con {jugadores[ganador]} monedas")

juego()
```