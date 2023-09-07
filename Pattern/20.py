# E 
# D E 
# C D E 
# B C D E 
# A B C D E 



n = int(input("Enter the number: "))


for i in range(n + 1): 
    for j in range(n - i, n): # 5 - 0 to 5 in row 1 and in row 2 [5 - 1 to 5], that is 4 to 5 => 2 characters in row 2
        print(chr(ord('A') + j), end=" ")
    print()