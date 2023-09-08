# https://leetcode.com/problems/reverse-integer/


n = int(input("Enter the number: "))

revN = 0

while n > 0:
    rem = n % 10
    revN = (revN * 10) + rem
    n //= 10
print (revN)
