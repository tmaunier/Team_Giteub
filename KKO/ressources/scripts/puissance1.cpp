//cpp
//4
//calcul la puissance d'un nombre, les deux étants donnés par l'utilisateur
//1
//cpp_4_1_puissance.png

#include <iostream>
using namespace std;
int main()
{
    int exponent;
    float base, result = 1;
    cout << "Enter base and exponent respectively:  ";
    cin >> base >> exponent;
    cout << base << "^" << exponent << " = ";
    while (exponent != 0) {
        result *= base;
        --exponent;
    }
    cout << result;
    return 0;
}
