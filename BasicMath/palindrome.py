n = int(input("Enter the number: "))

orginal = n
rev = 0
while n > 0:
    rem = n % 10
    rev = (rev * 10) + rem
    n //= 10

if orginal == rev:
    print("PALINDROME")
else:
    print("It is not palindrome") 