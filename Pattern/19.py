#       A 
#     A B A 
#   A B C B A 
# A B C D C B A



n = int(input("Enter the number: "))

for i in range(n):
    # spaces
    for j in range(n - i - 1):
        print(" ", end=" ")

    # Alphabets (increasing order)
    for j in range(i + 1):
        print(chr(ord('A') + j), end=" ")

    # Alphabets (decreasing order)
    for j in range(i - 1, -1, -1):
        print(chr(ord('A') + j), end=" ")
    
    # spaces
    for j in range(n - i - 1):
        print(" ", end=" ")
    
    print()