```python
import random
from random import randint
import time
 # Variables para el combate
enemyhp = 100 # vida del enemigo actual
max_hp = 101 # vida maxima del jugador para que no se curen tanto al usar items
hp = 100 # vida del jugador
enemydf = 0 # defensa del enemigo (La defensa le resta dependiendo de su cantidad al daño que recibe)
defence = 0 # lo mismo que lo anterior pero para el jugador
burg = 2 # estos tres son items y su cantidad
hotdo = 2
wateh = 2
tp = 50 # TP (si, la cosa del DELTARUNE) se usa para ataques especiales
dmg = 10 # daño base del jugador
dmgcritdebug = 10 # daño establecido para evitar bugs con los ataques criticos
crit = random.randint(1,3) #  probabilidad de daño critico, se usa para algunos ataques
turn = True # variable para ver si el turno del jugador empezo o termino
enemy_type = "None" # variable para diferenciar al tipo de enemigo
attack_type = "None" # Tipos de ataques del enemigo, varia segun el tipo
enemy_lvl = 1 # nivel del enemigo, puramente cosmetico
lvl = 1 # Nivel del jugador (Cada nivel da +10 de vida y +1 de defensa)

# Variables fuera de combate
money = 0 # dinero, se utilizara en las tiendas
weapon = "None" # arma actual del jugador
armor = "Standard Clothing" # armadura actual del jugador
weapondmg = 0 # daño actual del arma (Se le suma al daño base del jugador)
armordf = 0 # defensa actual de la armadura (Se le suma a la defensa base del jugador)
event_trigger = 0 # condicion que activa eventos
battle_toggle = "False" # condicion que afecta si el jugador va a tener una batalla o no

# Este sera el juego fuera del combate:
playername = input("Username: ")
print("This game mainly operates on y/n key system, however, on combat you need to press the assignated key that's shown, Ej: texto aqui (1)")
print("With that out of the way, i hope you enjoy this lil' project i've made :D")
print("Press any key to play")
empezar_juego = input("")
print("Money:", money)



print("--------------------------------")
print("In the bustling city you live in, battles occurring on the nearby street are common to find, unfortunately. Even so, you could only think how messed up the life of some of the residents here experience everyday, but atleast you could live your life in peace... That was until.")
print("--------------------------------")
print('"HEY!, What the hell is ya problem, huh?!', "You bumped beside what appears to be a thug... No, he's a Yakuza, this isn't good.", '"Dontcha have anything to say to me? HUH?!"', "Judging from the fact that he's quite hardheaded... You dont have any other options, do ya'?" )
print("--------------------------------")
print("Fight back? Y/N")
encounter = input("")
print("--------------------------------")
print("You raise up your fists, luckily, he doesn't seem to carry any weapon, so that means that on this fight, you have a chance, after all, you don't have any choices left.", '"So we on like that? Alright, BRING IT UP!"')
print("--------------------------------")
print("Thug" ":", 100, "HP", "LVL:", 1)
print("--------------------------------")
 
 # Este es el sistema de Combate 
def combat_start(enemyname):
    enemyhp = 100 # vida del enemigo actual
    max_hp = 101 # vida maxima del jugador para que no se curen tanto al usar items
    hp = 100 # vida del jugador
    enemydf = 0 # defensa del enemigo (La defensa le resta dependiendo de su cantidad al daño que recibe)
    defence = 0 # lo mismo que lo anterior pero para el jugador
    burg = 2 # estos tres son items y su cantidad
    hotdo = 2
    wateh = 2
    tp = 50 # TP (si, la cosa del DELTARUNE) se usa para ataques especiales
    dmg = 10 # daño base del jugador
    dmgcritdebug = 10 # daño establecido para evitar bugs con los ataques criticos
    crit = random.randint(1,3) #  probabilidad de daño critico, se usa para algunos ataques
    turn = True # variable para ver si el turno del jugador empezo o termino
    attack_type = "None" # Tipos de ataques del enemigo, varia segun el tipo
    enemy_lvl = 1 # nivel del enemigo, puramente cosmetico
    lvl = 1 # Nivel del jugador (Cada nivel da +10 de vida y +1 de defensa)
    while enemyhp > 0 or hp > 0 and battle_toggle == "True" :
            print(f"{enemyname}", enemyhp, "HP")
            print("--------------------------------")
            print("attack (1)")
            print("defend (2)")
            print("items (3)")
            print("special (4)")
            print('TP:', tp)
            print('HP:', hp)
            print('DF:', defence)
            print("--------------------------------")
            print("your turn", playername, '!')
            action = input("")
            while not (action == '1' or action == '2' or action == '3' or action == '4'):
                    print("Choose one of the ACTIONS")
                    action = input("")
            if action == '1':
                    print("--------------------------------")
                    print('normal attack:0% TP (A)')
                    print('heavy attack: 20% TP (D)')
                    print("--------------------------------")
                    action = input('')
                    while not (action == 'A'or action == 'D'):
                        print("Choose one of the ACTIONS")
                        action = input("")
            if action == 'A':
                    print(dmg, "DAMAGE!")
                    enemyhp = enemyhp - (dmg - enemydf)
            if action == 'D'and tp >= 20:
               dmg = dmg + 15
               crit = randint(1,3)
               if crit == 3:
                   dmg = dmg * 1.5
                   print("CRIT!")
               tp = tp - 20
               print(dmg, "DAMAGE!")
               enemyhp = enemyhp - (dmg - enemydf)
               dmg = dmg = dmgcritdebug
            elif action == 'D' and tp <= 20:
                print("Not enough TP")
            if action == '2':
                print("--------------------------------")
                print('You defend for this turn.')
                defence = defence + 10
                tp = tp + 10
            if action == '3':
                print("--------------------------------")
                print( burg, 'burg: +60HP, +20TP (C)')
                print(hotdo, 'hotdo: +30HP (X)')
                print(wateh, 'wateh: +20TP (Z)')
                print("--------------------------------")
                while not (action == 'Z'or action == 'X' or action == 'C'):
                   print("Choose one of the ACTIONS")
                   action = input("")
                   if action == 'Z'and wateh > 0:
                       tp = tp + 20
                       print("You healed +20 TP!")
                       wateh = wateh - 1
                   elif action == 'Z' and wateh < 0:
                       print("You ran out of Wateh!")
                   if action == 'X'and hotdo > 0:
                       hp = hp + 30
                       print("You healed +30 HP!")
                       hotdo = hotdo - 1
                   if action == 'C'and burg > 0:
                       hp = hp + 60
                       tp = tp + 20
                       print("You healed +60 HP and +20TP!")
                       burg = burg - 1
                if hp >= max_hp:
                    print("OVERHEALED!")
                    hp = hp = max_hp
                
            if enemyhp < 1:
                print("--------------------------------")
                print(f"{enemyname}", 'was knocked out!')
                print('YOU WIN!')
                
            elif hp < 1:
                print("--------------------------------")
                print(playername, "was knocked out!")
                print('you lose...')
                
            else:
                print(f'{enemyname}', "strikes foward!")
                hp = hp - (10 - defence)
                defence = defence = 0
                battle_toggle = battle_toggle = False 

combat_start("Thug")
print("+10$")
print("--------------------------------")
print("After you beat him up, he seemed to be on a harsh state, and even then he still had an attitude.", '"What the hell are you doing?! Do you even know who you messing with?! Im one from the Tigers! They will kill your damn ass if they find out about this!"')
print("--------------------------------")
print('(Y) "Who are the Tigers exactly?"')
print('(N) "Just get out of my face."')
response = input("")
print("--------------------------------")
while not (response == "Y" or response == "N"):
    print("Respond Correctly.")
    response = input("")
print("End of demo, sorry if it was lowkey short, but i will finish it later, thanks for playing!")
```