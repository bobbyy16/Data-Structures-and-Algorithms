# *****
# *****
# *****
# *****

rows = int(input("Enter the number of rows: "))
columns = int(input("Enter the number of columns: "))

for i in range(rows):
    for j in range(columns):
        print('*', end=" ")
    print()
    # end= " " -> makes all the astreks to print on the same line and next line print is used to go to next line