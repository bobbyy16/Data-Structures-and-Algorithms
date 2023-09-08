# https://www.codingninjas.com/studio/problems/count-digits_8416387?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf
import math



n = int(input("Enter the number: "))

count = int(math.log10(n))

print(count)

# count = 0
# while n > 0:
#     count += 1
#     n //= 10
# print (count)
