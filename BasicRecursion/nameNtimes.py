
def rec(i, n):
    if i > n:
        return
    print("Abhishek") # n = 5
    rec(i + 1, n) # 1st iteration i = 0, so 0 + 1 to n, 2 to n, 3 to n. 4 to n, 5 to n and returns

def run():
    n = int(input("Enter the number: "))
    rec(1, n) # starts from 1 to n

run()