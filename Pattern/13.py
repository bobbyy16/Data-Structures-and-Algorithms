# 1
# 0 1
# 1 0 1
# 0 1 0 1
# 1 0 1 0 1

n = int(input("Enter the number: "))

start = 0
for i in range(n):
    if i % 2 == 0:
        start = 0
    else:
        start = 1
    for j in range(i):
        print(start, end="")
        start = 1 - start   # if i equals to 1 in else: start = 1, it remains start = 1, so we are defining start = 1 - start
    print()
