# *
# * *
# * * *
# * * * * 
# * * * * *


n = int(input("Enter number of lines to print: "))

for i in range(n):
    for j in range(i + 1):
        print("*", end=" ")
    print()