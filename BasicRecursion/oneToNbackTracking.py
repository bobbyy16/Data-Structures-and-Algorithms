def rec(i, n):
    if i < 1:
        return
    rec(i - 1, n) # recursion call 1st and then print
    print(i)

def run():
    n = int(input("Enter the number: "))
    rec(n, n)

run()