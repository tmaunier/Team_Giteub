//cpp
//1
//calculer l'air d'un rectangle dont les mesures sont donnés par l'utilisateur
//2
//cpp_1_2_air.png

#include<iostream>
using namespace std;
int main()
{
    int width,height,area,perimeter;
    cout<<"Entrer la largeur du rectangle = ";
    cin>>width;
    cout<<"Entrer la hauteur du rectangle = ";
    cin>>height;
    area=2*(height+width);
    cout<<"Air du rectangle ="<<area<<endl;
return 0;
}
