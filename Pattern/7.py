#       *
#     * * *
#   * * * * *
# * * * * * * *


n = int(input("Enter the number: "))

# 3 loops = 1 - spaces, 2 - stars, 3 - spaces

for i in range(n): #
    # space
    for j in range(n - i - 1):
        print(" ", end="")
    # star
    for j in range(2 * i + 1):
        print("*", end="")
    #space
    for j in range(n - i - 1):
        print(" ", end="")
    print()