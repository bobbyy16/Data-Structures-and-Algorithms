# 1             1
# 1 2         2 1
# 1 2 3     3 2 1
# 1 2 3 4 4 3 2 1


n = 5

# Upper half of the pattern
for i in range(1, n + 1):
    # Print the increasing sequence
    for j in range(1, i + 1):
        print(j, end=" ")
    
    # Add spaces
    for k in range(2 * (n - i)):
        print(" ", end=" ")
    
    # Print the decreasing sequence
    for j in range(i, 0, -1):
        print(j, end=" ")
    
    # Move to the next line
    print()