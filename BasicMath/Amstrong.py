n = int(input("Enter the number: "))

ams = 0
orginal = n
while n > 0:
    rem = n % 10
    ams = ams + (rem * rem * rem)
    n //= 10
if orginal == ams:
    print(f"{ams} is a amstrong number")
else:
    print(f"{ams} is not equal to {orginal} so its not a Amstrong number")
