# 1
# 2 3
# 4 5 6
# 7 8 9 10

n = int(input("Enter the number: "))

number = 0
for i in range(n):
    for j in range(i):
        number = number + 1
        print(number, end=" ")
    print()