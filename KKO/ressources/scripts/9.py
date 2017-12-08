##Python
##3
##Return the n-th number of fibonnaci sequence.
##2
##../img/python_3_2.png

def fib(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return fib(n-2)+fib(n-3)

Number = input("Number : ")
print(fib(Number))
