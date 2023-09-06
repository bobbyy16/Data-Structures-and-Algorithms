#      1
#    1 2 3
#  1 2 3 4 5
# 1 2 3 4 5 6 7

n = int(input())

for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for j in range(2 * i + 1):
        print(j+1, end="")
    for j in range(n - i - 1):
        print(" ", end="")
    print()