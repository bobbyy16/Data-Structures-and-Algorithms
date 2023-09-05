# 1
# 1 2
# 1 2 3
# 1 2 3 4


n = int(input("Enter number: "))

for i in range(n):
    for j in range(i + 1):
        print(j + 1, end=" ")  # j will start from 0 thats why we are printing j+1
    print()