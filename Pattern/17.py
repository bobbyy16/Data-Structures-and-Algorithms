# A B C D E
# A B C D
# A B C
# A B
# A

n = int(input("Enter the number: "))

for i in range(n, 0, -1):
    for j in range(i):
        print(chr(ord('A') + j), end=" ")
    print()