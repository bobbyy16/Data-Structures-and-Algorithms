from cmath import sqrt
import math


n = int(input("Enter the number: "))

# for i in range(1, n):
#     if n % i == 0:
#         print(i, end=" ") -> o(n)

factors = []

for i in range(1, int(math.sqrt(n)) + 1):
    if n % i == 0:
        factors.append(i)
        # Check if the factors are different
        if (n / i) != i:
            factors.append(n // i)

factors.sort()  # Sort the factors in ascending order

for factor in factors:
    print(factor, end=" ")

        
