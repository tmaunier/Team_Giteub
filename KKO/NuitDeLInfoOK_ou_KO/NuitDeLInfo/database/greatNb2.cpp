//cpp
//3
//trouver le plus grand nombre parmis trois nombres donnés par l'utilisateur
//2
//cpp_3_2_greatNb.png

#include<iostream>
using namespace std;
int main()
{
    int num1,num2,num3;
    cout<<" Enter value for first number";
    cin>>num1;
    cout<<" Enter value for second number";
    cin>>num2;
    cout<<" Enter value for third number";
    cin>>num3;
    if(num1>num2&&num1<num3)
    {
        cout<<" First number is greatest:"<<endl<<"whick is= "<<num1;
    }
    else if(num2>num1&&num2<num3)
    {
        cout<<" Second number is greatest"<<endl<<"whick is= "<<num2;
    }
    else
    {
        cout<<" Third number is greatest"<<endl<<"whick is= "<<num3;
    }
return 0;
}
