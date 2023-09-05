n = int(input())

e = 0
o = 0

while n!= 0:
    rem = n % 10
    if rem % 2 == 0:
        e = e + rem
    else:
        o = o + rem
    n = n // 10
print(e, " ", o)
