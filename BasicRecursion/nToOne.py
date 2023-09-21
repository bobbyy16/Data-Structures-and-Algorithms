def rec(i, n):
    if i > 0:
        print(i) # if n = 3, prints 3 at 1st, 2, 1
        rec(i - 1, n) # now 3 - 1, 2 - 1, 1 - 1 (base condition does not meet) hence it returns

def run():
    n = int(input("Enter the number: "))
    rec(n, n)

run()