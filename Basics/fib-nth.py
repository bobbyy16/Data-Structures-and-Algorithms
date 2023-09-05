# problem

# https://www.codingninjas.com/studio/problems/nth-fibonacci-number_74156?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=1

# n = int(input())
# a = 1
# b = 0
# c = 2

# if n == 0:
#     print("-1")

# while c <= n:
#     fib = a + b # a, b, c  and now c = a+b  put c to a and a to b
#     b = a
#     a = fib
#     c = c + 1
# print (a)


# while 2 <= 6(n):
    # curr = 1 + 0
    # 0 = 1
    # 1 = 1
    # 2++


n = int(input())

a = 1
b = 0
c = 2

if n == 0 and n == 1:
    print("1")


while c <= n:
    fib = a + b
    b = a
    a = fib
    c = c + 1
print(a)