##Python
##2
##Input a String, Return "Palindrome" if Palindrome, "Not Palindrome" if not.
##2
##../img/python_2_2.png

Word = str(input("Word : "))
Reverse = Word[::]
if Word == Reverse:
    print("Palindrome")
else:
    print("Not Palindrome")
