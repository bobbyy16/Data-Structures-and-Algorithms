#       *
#     * * *
#   * * * * *
#   * * * * *
#     * * *
#       *

n = int(input("Enter the number: "))

for i in range(n):
    for j in range(n - i - 1): # descending order numbers
        print(" ", end="")
    for j in range(2 * i + 1): # ascending order odd number
        print("*", end="")
    for j in range(n - i - 1):
        print(" ", end="")
    print()

for i in range(n):
    for j in range(i):
        print(" ", end="")
    for j in range(2 * n - (2 * i + 1)): # descending order odd number
        print("*", end="")
    for j in range(i):
        print(" ", end="")
    print()