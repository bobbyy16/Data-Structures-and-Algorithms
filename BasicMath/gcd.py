n1 = int(input("Enter the number1: "))
n2 = int(input("Enter the number2: "))

gcd = 0

# for i in range (1, n1):
#     if n1 % i == 0 and n2 % i == 0:
#         gcd = i
# print (gcd)


# in case if n1 will be lesser than n2, so we can avoid additional iteration by taking min(n1, n2)

for i in range(1, min(n1, n2)):
    if n1 % i == 0 and n2 % i == 0:
        gcd = i
        break
print (gcd)