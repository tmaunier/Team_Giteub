##Python
##3
##Return the n-th number of fibonnaci sequence.
##1
##../img/python_3_1.png

def fib(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return fib(n-1)+fib(n-2)

Number = input("Number : ")
print(fib(Number))
