def rec(i, n):
    if i == n:
        return
    rec(i + 1, n)
    print(i)

rec(1, 5)

