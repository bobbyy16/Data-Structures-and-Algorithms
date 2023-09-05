# * * * * *
# * * * * 
# * * *
# * *
# *


n = int(input("Enter the number: "))

for i in range(n, 0, -1): #5 and 1st row will be like 5 and next row will be 5-1 untill line reaches 5
    for j in range(i): # 5 coulumns or i coloums
        print("*", end=" ")
    print("\r")