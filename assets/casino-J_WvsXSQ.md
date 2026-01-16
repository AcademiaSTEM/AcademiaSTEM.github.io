```python
# ======================
# DATOS GENERALES
# ======================
fichas = 100

# ======================
# BLACKJACK
# ======================
cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
valores = {
    "2":2, "3":3, "4":4, "5":5, "6":6, "7":7,
    "8":8, "9":9, "10":10, "J":10, "Q":10, "K":10, "A":11
}

def sacar_carta():
    return random.choice(cartas)

def total_mano(mano):
    total = sum(valores[c] for c in mano)
    ases = mano.count("A")
    while total > 21 and ases:
        total -= 10
        ases -= 1
    return total

def blackjack():
    global fichas
    print("\n🃏 BLACKJACK 🃏")
    apuesta = apostar()
    if apuesta == 0:
        return

    jugador = [sacar_carta(), sacar_carta()]
    crupier = [sacar_carta(), sacar_carta()]

    while True:
        print("\nJugador:", jugador, "Total:", total_mano(jugador))
        print("Crupier: [?]", crupier[1])

        if total_mano(jugador) > 21:
            print("💥 Te pasaste. Pierdes.")
            fichas -= apuesta
            return

        print("1) Pedir carta")
        print("2) Plantarse")
        op = input("> ")

        if op == "1":
            jugador.append(sacar_carta())
        elif op == "2":
            break

    while total_mano(crupier) < 17:
        crupier.append(sacar_carta())

    print("\nCrupier:", crupier, "Total:", total_mano(crupier))
    print("Jugador:", jugador, "Total:", total_mano(jugador))

    tj, tc = total_mano(jugador), total_mano(crupier)

    if tc > 21 or tj > tc:
        print("🎉 Ganaste")
        fichas += apuesta
    elif tj < tc:
        print("💀 Perdiste")
        fichas -= apuesta
    else:
        print("🤝 Empate")

# ======================
# RULETA
# ======================
def ruleta():
    global fichas
    print("\n🎲 RULETA 🎲")
    apuesta = apostar()
    if apuesta == 0:
        return

    print("1) Apostar a número (0-36)")
    print("2) Apostar a color (rojo/negro)")
    op = input("> ")

    numero = random.randint(0,36)
    color = "rojo" if numero % 2 == 0 else "negro"

    if op == "1":
        elegido = int(input("Número: "))
        print("🎯 Salió:", numero)
        if elegido == numero:
            print("🎉 GANASTE x5")
            fichas += apuesta * 5
        else:
            fichas -= apuesta
    else:
        elegido = input("Color: ").lower()
        print("🎯 Salió:", numero, color)
        if elegido == color:
            print("🎉 GANASTE x2")
            fichas += apuesta * 2
        else:
            fichas -= apuesta

# ======================
# TRAGAMONEDAS
# ======================
def tragamonedas():
    global fichas
    print("\n🎰 TRAGAMONEDAS 🎰")
    apuesta = apostar()
    if apuesta == 0:
        return

    simbolos = ["🍒", "🍋", "🔔", "⭐", "💎"]
    r = [random.choice(simbolos) for _ in range(3)]
    print(" | ".join(r))

    if r[0] == r[1] == r[2]:
        print("🎉 JACKPOT x10")
        fichas += apuesta * 10
    elif r[0] == r[1] or r[1] == r[2]:
        print("✨ Premio x3")
        fichas += apuesta * 3
    else:
        print("💀 Sin premio")
        fichas -= apuesta

# ======================
# APUESTAS
# ======================
def apostar():
    global fichas
    print(f"💰 Fichas: {fichas}")
    try:
        a = int(input("Apuesta (0 para salir): "))
        if a < 0 or a > fichas:
            return 0
        return a
    except:
        return 0

# ======================
# MENÚ PRINCIPAL
# ======================
def menu():
    print("""
==================================
           🎰 CASINO 🎰
==================================
1) 🃏 Blackjack
2) 🎲 Ruleta
3) 🎰 Tragamonedas
4) ❌ Salir
==================================
""")

# ======================
# JUEGO PRINCIPAL
# ======================
while fichas > 0:
    menu()
    op = input("> ")

    if op == "1":
        blackjack()
    elif op == "2":
        ruleta()
    elif op == "3":
        tragamonedas()
    elif op == "4":
        break

    print(f"\n💰 Fichas actuales: {fichas}")

print("\n🏦 Gracias por jugar en el CASINO 🏦")
```