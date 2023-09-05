# 1
# 2 2
# 3 3 3
# 4 4 4 4
# 5 5 5 5 5


n = int(input("Enter number: "))

for i in range(n):
    for j in range(i + 1):
        # just print the row number
        print(i + 1, end=" ")  # i will start from 0 thats why we are printing i+1
    print()