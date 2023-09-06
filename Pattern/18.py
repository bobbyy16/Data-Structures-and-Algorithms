# A
# B B 
# C C C 
# D D D D


n = int(input("Enter the number: "))

for i in range(n):
    for j in range(i + 1):
        print(chr(ord('A') + i), end=" ")
    print()