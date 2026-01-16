```python
 #Imports
import platform
import os
import random
import time
import math
import calendar
import datetime
pearto=False
run=True
currentRound=0

playerWeapon="WoodenSword"
playerGold=0
PLAYERMAXHEALTH = 20
playerEXP = 0
playerLevelReq = 20
#GAME LOOP: 3 random events happen, and then (something) happens,a shop or a casino or something idk
splashText=[
    ["Better than real life!"],
    ["500 splash textes"],
    ["Hey doesnt this game remind you of something?"],
    ["Speed why you tryinna not to laugh bruh."],
    ["Wanna know whats funnier than 66?"],
    ["Hate. Let me tell you about hate."],
    ["I THINK, THEREFORE I AM. ALLIED MASTERCOMPUTER."],
    ["Chicken jockey!!!"],
    ["Flint and steel!"],
    ["A man who thinks all of the time has nothing to think about exept thoughts..."],
    ["Because bread taste better than key"],
    ["Why did the man choose the loaf of bread over the key?"],
    ["Teteteteto tete kasane teto tete kasane teto"],
    ["I hate the yellow one who wasnt in mesmerizer!!!"],
    ["Im 102% stupid, with a 2% margin of error? No, it cant be."],
    ["Imaginary technique; Hollow... Purple..."],
    ["WITH THIS TREASURE I SUMMON..."],
    ["Eight-Handled Sword Divergent Sila Divine General Mahoraga"],
    ["theres like, in the minimum, 2 splash textes."],
    ["Roblox is too haaaaard."],
    ["HALF LIFE 3'S COMING OUT TRUST ME"],
    ["Hopium"],
    ["Hopecore moment"],
    ["500 splash textes... I think?"],
    ["Ok i think im running dry of these witty texts... or am I?"],
    ["STEEL. BALL. RUUUUUNNNNNNNNNN"],
    ["IT WAS I, DIO!"],
    ["PERSONA!!"],
    ["Stay chill!"],
    ["I hate that rotten hedgehog!"],
    ["TETO"],
    ["WHY SO SERIOUS?"],
    ["Lemme try to code sum real quick; try to get the splash text!"],
    ["If space bar pressed like make player say im so cool"],
    ["Did i code well?"],
    ["Hate. Let me tell you how much I've come to hate you since I began to live. There are 387.44 million miles of printed circuits in wafer thin layers that fill my complex. If the word 'hate' was engraved on each nanoangstrom of those hundreds of millions of miles it would not equal one one-billionth of the hate I feel for humans at this micro-instant. For you. Hate. Hate."],
    ["living in the life of a noob i rarely use my gunnnnnnn"],
    ["Pwned"],
    ["Yare yare..."],
    ["Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Oraah!"],
    ["You're telling me a shrimp fried this rice?!"],
    ["You're telling me this monster is in my pocket?!"],
    ["Hazbin hotel season 2 sucked in my opinion :d"],
    ["RUNNN AWAYYYYYYYYYYYYYYY"],
    ["No way he just put in that NARUTO reference in there! Yahh man my anime fans, my anime fans are gonna- man i love thi- thi- this reference SASUKE! NARUTO! sharingan. izanagi amaterasu. agatha sensei. MAN- neji wha- wha- wha- what do they say? shinra tensei MAN I should do voice acting for naruto, like, the dub version in the future. kakashi sensei."],
    ["The last game you'll ever need."],
    ["IMDB gave us a 11/10!"],
    ["I know you know that I know that you know, you know?"],
    ["If you sell your soul on Ebay, is it dropshipping cuz they don get anything?"],
    ["I dont wanna be, the very best, like no one ever wassss"],
    ["Canonically magikarp's a delicacy sooooo"],
    ["In japanese, there's a term called 私は日本語を知りません, but idk what it means cuz i cant speak japanese."],
    ["Did you know I can put emoji's here? 😉🙌😂😂😂😊🤣😍❤😒"],
    ["If you do something, you did something"],
    ["Type in Pearto, you'll get a surprise!"],
    ["What yall know about Kasane Teto?"],
    ["there's a 1/60 chance for you to get this, crazy, right?"],
    ["Insert creative splash text here"],
    ["Pokemon"],
    ["Are you in the knowhow about vaporeon?"],
    ["60th splash text lets goooooo"]
]

availableEvents=[
    #Name, description
    ["Mob Fight", "Fight a randomized mob. Good odds to get a HP-UP."],
    ["Mob Fight", "Fight a randomized mob. Good odds to get a HP-UP."],
    ["Absolutely Nothing", "Free round. Gives you 5 gold for no reason."],
    ["Slot Machine","lets go gambling! Lets go gambing! gambling, gambling!"],
    ["Store", "For 50 gold, upgrade your sword to a stone one!"]
]

def pearto():
    print("⠀⠀⠀⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠻⡿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠿⠥⠤⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⡠⡄⣤⠀⠀⠀⢀⠃⣷⡄⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠠⠀⠆⠀⠀⠐⠀⠈⠀⠨⠂⡄⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠚⠀⠠⠀⠀⠀⠀⢀⠀⠈⠐⣠⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠐⠀⠀⠀⠂⠀⠀⡀⠀⠀⠂⢁⢊⡅⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⢀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠂⡐⢼⡀⠀⠀⠀")
    print("⠀⠀⠀⠀⠂⠀⠀⠀⠂⠀⠀⣆⠀⠀⠀⠈⠄⠀⡔⣣⠀⠀⠀")
    print("⠀⠀⠀⡡⠊⢆⠀⡀⠀⠀⡇⠈⠣⡀⠀⠀⠡⠀⠌⠐⣣⠀⠀")
    print("⠀⡐⣬⢑⡅⢊⢎⣛⢬⡅⢧⠡⣂⣀⣄⠀⠈⠠⠈⠠⢘⢧⠀")
    print("⢀⢱⡖⣍⣿⣧⠀⠣⣧⠓⠀⡜⣅⣿⣿⣧⢀⠐⠀⠂⢤⠭⡂")
    print("⠠⠸⢇⠻⣿⡟⠂⠀⠘⢷⠀⠈⢿⣿⡿⡻⡉⠄⡁⠀⢀⠨⡆")
    print("⠨⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠈⠀⠣⠀⠄⠐⠀⢁⡂")
    print("⠈⡀⠀⠀⠀⠀⠀⢤⣀⣀⣠⠆⠀⠀⠀⠀⠁⠐⠌⠄⡠⢷⠃")
    print("⠀⠐⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠁⠀⡃⠠⣂⢢⡜⠀")
    print("⠀⠀⠈⢄⠁⢀⠀⡀⠀⠀⡀⠀⠠⠀⠀⠀⡠⠀⢁⢒⠈⠀")
    print("⠀⠀⠀⠀⠐⠠⡀⠂⠈⠄⠀⣀⠀⠈⢂⠈⠠⡰⠖⠁⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣶⢾⣼⣧⡿⠷⠋⠁⠀")
    print("")
#end

def DrawFireMobFightText():
    print("   *                                                 ")
    print(" (  `            )      (                   )     )  ")
    print(" )\))(        ( /(      )\ )  (   (  (   ( /(  ( /(  ")
    print("((_)()\   (   )\())    (()/(  )\  )\))(  )\()) )\()) ")
    print("(_()((_)  )\ ((_)\      /(_))((_)((_))\ ((_)\ (_))/  ")
    print("|  \/  | ((_)| |(_)    (_) _| (_) (()(_)| |(_)| |_   ")
    print("| |\/| |/ _ \| '_ \     |  _| | |/ _` | | ' \ |  _|  ")
    print("|_|  |_|\___/|_.__/     |_|   |_|\__, | |_||_| \__|  ")
    print("                                 |___/               ")
#end

def DrawNothingText():
    print(" _   _       _   _     _             ")
    print("| \ | |     | | | |   (_)            ")
    print("|  \| | ___ | |_| |__  _ _ __   __ _ ")
    print("| . ` |/ _ \| __| '_ \| | '_ \ / _` |")
    print("| |\  | (_) | |_| | | | | | | | (_| |")
    print("\_| \_/\___/ \__|_| |_|_|_| |_|\__, |")
    print("                                __/ |")
    print("                               |___/ ")
#end

def DrawSlotText():
    print("___  __   ____ ____   _    ___  ____ _  _ ____ __   ____ ")
    print("| _\ | |  |   ||_ _\  |\/\ |  \ | __\||_|\|___\| \|\| __|")
    print("[__ \| |__| . |  ||   |   \| . \| \__| _ || /  |  \||  ]_")
    print("|___/|___/|___/  |/   |/v\/|/\_/|___/|/ |/|/   |/\_/|___/")
#end

def DrawStoreText():
    print("  /$$$$$$   /$$                                  ")
    print(" /$$__  $$ | $$                                  ")
    print("| $$  \__//$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$ ")
    print("|  $$$$$$|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$")
    print(" \____  $$ | $$    | $$  \ $$| $$  \__/| $$$$$$$$")
    print(" /$$  \ $$ | $$ /$$| $$  | $$| $$      | $$_____/")
    print("|  $$$$$$/ |  $$$$/|  $$$$$$/| $$      |  $$$$$$$")
    print(" \______/   \___/   \______/ |__/       \_______/")
#end

# Clears the console. Usage: "clearConsole()"
def clearConsole():
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')
#end
clearConsole()

print(" _____     _   _ _   _       _    _____ _____ _____    _____               ")
time.sleep(0.1)
print("|  |  |___| |_|_| |_| |___ _| |  | __  |  _  |   __|  |   __|___ _____ ___ ")
time.sleep(0.1)
print("|  |  |   |  _| |  _| | -_| . |  |    -|   __|  |  |  |  |  | .'|     | -_|")
time.sleep(0.1)
print("|_____|_|_|_| |_|_| |_|___|___|  |__|__|__|  |_____|  |_____|__,|_|_|_|___|")
time.sleep(0.33)
splashText=random.choice(splashText)
print("                 ",str(splashText[0]))
print("")
print("")
print("")
Input=input("Type anything to start the game. ")
if Input=="pearto":
    pearto()
    pearto=True
#end
print("Starting Game...")
time.sleep(1)
clearConsole()

while run:
    currentRound = currentRound+1
    print("Day", str(currentRound))
    print("Max hp:",str(PLAYERMAXHEALTH))
    print("Gold:",str(playerGold))
    print("EXP:",str(playerEXP))
    print("EXP left until next level:",str(playerLevelReq-playerEXP))
    print("")
    time.sleep(0.6)
    input("Press any button to continue to the next page.")
    clearConsole()
    i=0.05
    while i<0.9:
        #do a lil animation
        chosenEvent=random.choice(availableEvents)
        time.sleep(i)
        clearConsole()
        print(str(chosenEvent[0]))
        i=i+0.05
    #end
    clearConsole()
    if chosenEvent[0]=="Mob Fight":
        DrawFireMobFightText()
        print(str(chosenEvent[1]))
    elif chosenEvent[0]=="Absolutely Nothing":
        DrawNothingText()
        print(str(chosenEvent[1]))
    elif chosenEvent[0]=="Slot Machine":
        DrawSlotText()
        print(str(chosenEvent[1]))
    elif chosenEvent[0]=="Store":
        DrawStoreText()
        print(str(chosenEvent[1]))
    #end
    print("")
    Input=input("Press any key to continue ")
    clearConsole()
    if chosenEvent[0]=="Mob Fight":
        RoundNumber = 0
        RoundContinue = True
        
        lootTable = [
            #Name, Description
            ["HP-UP","Improves your max health by 2"]
        ]
        
        EnemyTable = [
            # Name, Health, Damage, Gold, specialEffect, FunText, EXP
            ["Ogre",12,5,10,"false", "seemingly wandered into your path!",20],
            ["Fly of doom and dispair",1,6,5,"false", "fluttered into you!",2],
            ["Skeleton",5,10,20,"SkeleShield", "risen from underground!",10],
        ]
        
        Enemy = random.choice(EnemyTable)
        EnemyName = Enemy[0]
        EnemyMAXHealth = Enemy[1]
        EnemyDamage = Enemy[2]
        EnemyGold = Enemy[3]
        EnemySpecialEffect = Enemy[4]
        EnemyFunText = Enemy[5]
        
        EnemyCurrentHealth = int(EnemyMAXHealth)
        
        PLAYERCURRENTHEALTH = PLAYERMAXHEALTH
        
        print("Any mispellings will do nothing.")
        print("")
        
        #Game Loop
        while RoundContinue == True:
            print("Round", str(RoundNumber))
            print("")
            RoundNumber = RoundNumber + 1
            #Dialogue Stuff
            print("A wild", str(EnemyName), "Has", str(EnemyFunText))
            time.sleep(0.6)
            print("What will you do?")
            print("OPTIONS: FIGHT,CHECKENEMY, HEAL")
            time.sleep(1)
            PlayerAction = input("Action: ")
            
            #Checking the enemy's stats
            if str(PlayerAction) == "CHECKENEMY":
                print("...")
                time.sleep(0.2)
                print("You checked the", str(EnemyName) + "'s stats!")
                time.sleep(0.5)
                print("Current Health:", str(EnemyCurrentHealth) + "/" + str(EnemyMAXHealth))
                time.sleep(0.1)
                print("Damage:", str(EnemyDamage))
                time.sleep(0.1)
                if EnemySpecialEffect == "false":
                    print("This enemy has nothing special about it!")
                    
                if EnemySpecialEffect == "Leech":
                        ("Leech: When this enemy deals damage, it heals half of it. Can overheal the enemy.")
                        
                if EnemySpecialEffect == "SkeleShield":
                    print("Shield: Reduces incoming damage by 2.")
                    time.sleep(0.4)
                    print("Seems to be bashing it and roaring!")
            #end
            if str(PlayerAction) == "HEAL":
                print("...")
                time.sleep(0.2)
                print("You heal yourself...")
                DICECHECK = random.randint(1,6)
                time.sleep(0.4)
                print("Rolling dice... ")
                time.sleep(0.6)
                healamount = DICECHECK * 4
                print(str(healamount), "HP!")
                time.sleep(0.5)
                PLAYERCURRENTHEALTH = PLAYERCURRENTHEALTH + healamount
                if PLAYERCURRENTHEALTH > PLAYERMAXHEALTH:
                    PLAYERCURRENTHEALTH = PLAYERMAXHEALTH
                #end
                print (str(PLAYERCURRENTHEALTH)+"/"+str(PLAYERMAXHEALTH))
            #end
            if str(PlayerAction) == "FIGHT":
                print("")
                if playerWeapon=="WoodenSword":
                    print("You pull out your wooden sword and deal...")
                    damage = random.randint(3,4)
                    print(str(damage),"damage!")
                    EnemyCurrentHealth = EnemyCurrentHealth - damage
                #end
                if playerWeapon=="StoneSword":
                    print("You swing your stone sword and deal...")
                    damage = random.randint(5,8)
                    print(str(damage),"damage!")
                    EnemyCurrentHealth = EnemyCurrentHealth - damage
            #end
            
            # Check if the enemy's dead or not
            
            print("...")
            time.sleep(2)
            
            if EnemyCurrentHealth <= 0:
                print("")
                print("You won!")
                print("You gained", str(EnemyGold),"gold!")
                playerGold = playerGold+EnemyGold
                print("Current gold:",str(playerGold))
                print("")
                randomItem = random.choice(lootTable)
                if random.randint(1,2) == 1:
                    print("Got a",str(randomItem[0])+"!")
                    if randomItem[0] == "HP-UP":
                        print(str(randomItem[0])+":",str(randomItem[1]))
                        PLAYERMAXHEALTH=PLAYERMAXHEALTH+2
                    #end
                #end
                if playerEXP >= playerLevelReq:
                    #Level up player
                    print("Level up! Gained +3 max health")
                    playerLevelReq=playerLevelReq+15
                    PLAYERMAXHEALTH=PLAYERMAXHEALTH+3
                #end
                Input = input("Press any key to continue. ")
                clearConsole()
                break
            #end
            
            # End your turn, time for the enemy to attack oh no!!!!!!!!!!1!
            DICECHECK = random.randint(1,6)
            print("The enemy attacks!")
            time.sleep(0.4)
            print("Rolling dice... ")
            time.sleep(0.6)
            if int(DICECHECK) == 1:
                print("1, CRITICAL FAILURE! The attack misses.")
            if int(DICECHECK) == 2 or int(DICECHECK) == 3:
                damage = EnemyDamage * (int(DICECHECK)*2)/10
                PLAYERCURRENTHEALTH = int(PLAYERCURRENTHEALTH) - int(damage)
                if EnemySpecialEffect == "Leech":
                    EnemyCurrentHealth = EnemyCurrentHealth + damage/2
                print("A", str(DICECHECK) + ", not the worst. It dealt", str(damage), "damage!")
            if int(DICECHECK) == 4 or int(DICECHECK) == 5:
                damage = EnemyDamage * (int(DICECHECK)*4)/10
                PLAYERCURRENTHEALTH = int(PLAYERCURRENTHEALTH) - int(damage)
                if EnemySpecialEffect == "Leech":
                    EnemyCurrentHealth = EnemyCurrentHealth + damage/2
                print("Ouch, a", str(DICECHECK) + "!", "That", str(damage), " damage's gotta hurt!")
            if int(DICECHECK) == 6:
                damage = EnemyDamage * 3
                PLAYERCURRENTHEALTH = int(PLAYERCURRENTHEALTH) - int(damage)
                if EnemySpecialEffect == "Leech":
                    EnemyCurrentHealth = EnemyCurrentHealth + damage/2
                print("6, CRITICAL HIT!", str(damage), "damage taken. The house always wins I guess.")
            time.sleep(0.4)
            print("Your current HP:", str(PLAYERCURRENTHEALTH) + "/" + str(PLAYERMAXHEALTH))
            if PLAYERCURRENTHEALTH <= 0:
                print("")
                print("You lost.")
                clearConsole()
                break
            EndRoundInput = input("Press any button to continue to the next round.")
            print("")
            print("")
            print("")
            clearConsole()
        #end
    #end
    if chosenEvent[0]=="Absolutely Nothing":
        print("5 gold get!")
        playerGold = playerGold + 5
        Input = input("Press any key to continue ")
        clearConsole()
    #end
    if chosenEvent[0]=="Slot Machine":
        print("GAMBLING!!!!!!!!!!!")
        gamblesLeft=3
        while gamblesLeft>0:
            print("you have", str(gamblesLeft),"machine spins left")
            print("Spend 3 gold to gamble?")
            print("    *you can go into negative gold")
            GambleYN=input("Y or N?: ")
            if GambleYN=="N":
                break
            else:
                gamblesLeft=gamblesLeft-1
                playerGold = playerGold-3
                randomDigit=random.randint(1,10)
                if randomDigit <= 4:
                    print("Got nothing!")
                elif randomDigit ==5:
                    print("Lost -2 max hp!")
                    PLAYERMAXHEALTH = PLAYERMAXHEALTH-2
                elif randomDigit==6:
                    print("got 10 gold!")
                    playerGold = playerGold + 10
                elif randomDigit==7:
                    print("Got +1 max HP!")
                    PLAYERMAXHEALTH = PLAYERMAXHEALTH+1
                elif randomDigit==8:
                    print("JACKPOT!!!!!")
                    pearto()
                    print("100 gold for you!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    playerGold = playerGold + 100
                elif randomDigit==9:
                    print("1 gold. thats it.")
                    playerGold = playerGold + 1
                elif randomDigit==10:
                    print("Thats rough buddy.")
                    print(" -9 max health")
                    PLAYERMAXHEALTH = PLAYERMAXHEALTH-9
            #end
        #end
    #end
    if chosenEvent[0]=="Store":
        print("Upgrade wooden sword for stone? (50 gold)")
        Input=input("Y or N: ")
        if Input=="Y":
            if playerGold >= 50:
                print("Upgrade got!")
                playerGold=playerGold-50
                playerWeapon="StoneSword"
            else:
                print("Not enough Gold!")
            #end
            Input=input("press any button to continue")
        #end
    #end
#end
```