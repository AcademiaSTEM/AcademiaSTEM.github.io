```python
print("""Calculadora basica :D
Si desea calcular, en la sección de operación debe escribir: 
suma, resta, multi (multiplicación) o div (división).
Si desea salir, escriba salir en operación. Disfrute :D""")

operación = ''
operación = input("Ingrese operación: ")

while operación != "salir":
    n1 = float(input("Ingrese numero: "))
    n2 = float(input("Ingrese siguiente numero: "))
    # operación = input("Ingrese operación: ")
    
    suma = n1 + n2
    resta = n1 - n2
    multi = n1 * n2
    div = n1 / n2
    
    if operación == "suma":
        print("La respuesta es:", suma)
    elif operación == "resta":
        print("La respuesta es:", resta)
    elif operación == "multi":
        print("La respuesta es:", multi)
    elif operación == "div":
        print("La respuesta es:", div)
    else:
        print("Operación no valida")

    operación = input("Ingrese operación: ")
```