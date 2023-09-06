#      *
#      * *
#      * * *
#      * * * *
#      * * *
#      * *
#      *

n = int(input("Enter the number: "))

# Upper half of the pattern
for i in range(n):
    for j in range(i):
        print("*", end=" ")
    print()

# Lower half of the pattern
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()