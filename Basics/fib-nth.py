# problem

# https://www.codingninjas.com/studio/problems/nth-fibonacci-number_74156?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=1

n = int(input())
a = 1
b = 0
i = 2
if n==0:
    print(0)
while i <= n:
    curr = a+b
    b = a
    a = curr
    i = i + 1
print(a)