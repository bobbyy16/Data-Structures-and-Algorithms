# * * * * *
#   * * *
#     *


n = int(input("Enter the number: "))

# Outer loop for rows
for i in range(n):
    # Print leading spaces
    for j in range(i):
        print(" ", end=" ")

    # Print leading stars
    for j in range(2 * n - (2 * i + 1)):
        print("*", end=" ")
    
    # Print leading spaces
    for j in range(i):
        print(" ", end=" ")

    # Move to the next line
    print()