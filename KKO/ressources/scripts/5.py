##Python
##2
##Input a String, Return "Palindrome" if Palindrome, "Not Palindrome" if not.
##1
##../img/python_2_1.png

Word = str(input("Word : "))
Reverse = Word[::-1]
if Word == Reverse:
    print("Palindrome")
else:
    print("Not Palindrome")
