import math


n = int(input("Enter the number: "))

count = 0
# for i in range(2, n):
#     if n % i == 0:
#         count += 1
#         break 
# if count == 0:
#     print("prime")
# else:
#     print("not prime") => O(n)


for i in range (2, int(math.sqrt(n)) + 1):
    if n % i == 0:
        count += 1
if count == 0: #count is zero, it means that no divisors other than 1 and n itself were found during the loop, indicating that n is a prime number.
    print ("Prime")
else:
    print("not prime")