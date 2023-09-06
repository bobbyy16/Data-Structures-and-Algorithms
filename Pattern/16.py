# A
# A B
# A B C
# A B C D


n = int(input("Enter the number: "))


for i in range(n):
    for j in range(i + 1):
        print (chr(ord('A') + j), end=" ")
    print()

    
    # chr() ->  function in Python is used to convert an integer Unicode code point back to its corresponding character
    # ord() -> function in Python is used to get the Unicode code point (integer representation) of a character. In this case, it returns the integer value corresponding to 'A', which is typically 65 in the ASCII encoding.