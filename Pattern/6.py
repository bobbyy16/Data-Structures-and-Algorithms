# 1 2 3 4 5
# 1 2 3 4
# 1 2 3
# 1 2 
# 1


n = int(input("Enter the number: "))

for i in range(n, 0, -1):
    for j in range(i):
        print(j + 1, end=" ")
    print()