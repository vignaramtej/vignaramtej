// #include<iostream>
// #include<cmath>
// int main() {
//     int n;
//     std::cout << "Enter a number: ";
//     std::cin >> n;

//     double sq_rt = sqrt(n);

//     std::cout << "The square root of the given number is " << sq_rt;
// }
// #include<iostream>
// using namespace std;

// int main() {
//     int ae[4];

//     for(int i=0; i<4 ; i++) {
//         cout<<"Enter element :";
//         cin>>ae[i];
//     }

//     for(int i=0 ; i<4 ; i++) {
//         cout << ae[i] << "\t";
//     }
// }

// Fixed vectors using manifest constant
// #include<iostream>
// #include<vector>
// #define MAX 100
// using namespace std;

// int main() {
//     vector<int> arr(MAX);
//     cout << "Enter the no. of elements : ";
//     int count, sum = 0;
//     cin >> count;
//     for(int i=0 ;i<count; i++) {
//         arr[i] = i; sum += arr[i];
//     }
//     cout << "Array Sum : " << sum << endl;
// }

// // Dynamically managed array size using vectors
// #include <iostream>
// #include <vector>
// using namespace std;

// int main() {
//     int count,sum=0;
//     cout << "Enter the no. of elements : ";
//     cin >> count;

//     vector<int> arr;
//     arr.resize(count);

//     for(int i=0 ;i<count; i++) {
//         arr[i] = i; sum += arr[i];
//     }
//     cout << "Array Sum : " << sum << endl;
// }

// #include<iostream>
// #include<algorithm>
// using namespace std;

// bool compare(int i,int j) {
//     return (i < j);
// }
// int main() {
//     int data[] = {32,71,12,45,26};
//     // Start ptr, end ptr, func. ptr
//     sort(data, data+sizeof(data)/sizeof(int),compare);

//     for(int i=0;i<5;i++) 
//         cout<<data[i]<<" ";
// }

// #include<iostream>
// #include<algorithm>
// using namespace std;

// int main() {
//     int data[] = {1,2,4,5,6}, k = 5;

//     if(binary_search(data,data+(sizeof(data)/sizeof(int)), k))
//         cout << "Found!\n";
//     else
//         cout << "Not Found\n";
// }

// ----> Stack implementation - Reverse a String
// #include<iostream>
// #include<cstring>
// #include<stack> //Library codes
// using namespace std;

// strlen() function takes only `char` data types.
// int main() {
//     char str[10] = "ABCDE";
//     stack<char> s;

//     for(int i=0 ; i<strlen(str) ; i++) {
//         s.push(str[i]);
//     }
//     cout << "Reversed String : ";
//     while(!s.empty()) {
//         cout << s.top();
//         s.pop();
//     }
// }

// ----> Postfix Evaluation <----
// #include<iostream> 
// #include<stack>
// #define MAX 100
// using namespace std;

// int main() {
//     // Postfix expression : 123*+4-
//     char postfix[MAX], ch;
//     cout << "Enter the expression : "; cin >> postfix;
//     stack <int> s;

//     for(int i=0; i<7 ; i++) {
//         ch = postfix[i];
//         if(isdigit(ch)) {
//             s.push(ch-'0');
//         }
//         else {
//             int op1 = s.top(); s.pop();
//             int op2 = s.top(); s.pop();
//             switch(ch) {
//                 case '*': s.push(op2 * op1); break;
//                 case '/': s.push(op2 / op1); break;
//                 case '+': s.push(op2 + op1); break;
//                 case '-': s.push(op2 - op1); break;
//             }
//         }
//     }
//     cout << "\nEvaluation " << s.top();
// }

// #include<iostream>
// #include<cstring>
// #include<stack>
// using namespace std;

// int main() {
//     char str[10] = "COMPUTER";
//     stack<char> s1, s2;
//     int i;

//     for(i=0 ; i<strlen(str)/3 ; i++)
//         s1.push(str[i]);
//     for(; i < strlen(str); i++) {
//         s2.push(str[i]);
//         cout << "s2 initially : " << s2.top() << endl;
//     }
//     while(!s1.empty()) {
//         cout << s1.top() << endl;
//         s2.push(s1.top()); 
//         cout << s2.top() << endl;
//         s1.pop();
//     }
//     while(!s2.empty()) {
//         cout << s2.top(); s2.pop();
//     }
// }

// #include<iostream>
// #include<algorithm>
// using namespace std;

// void modify(int *ar) {
//     rotate(ar, ar+4, ar+4);
// }
// int main() {
//     int iarr[5];
//     for(int i=0; i<5; i++)
//         *(iarr+i) = i*2;
//     modify(iarr);
//     for(int i=0; i<5; i++)
//         cout << *(iarr+i) << " ";
// }

// #include<iostream>
// #include<algorithm>
// using namespace std;
// int main() {
//     int iarr[] = {10,20,50,40,10,50};
//     rotate(&iarr[0], &iarr[2], &iarr[5]); //Divides the given array into 2 parts base on the given middle n last elements in the parameters and rotats the groups
//     int arr[] = {10,20,50,40,10,50};
//     rotate(&arr[0], &arr[2], &arr[6]);
//     for(int i=0; i<(sizeof(iarr)/sizeof(int)); i++)
//         cout << iarr[i] << " ";
//     cout << endl;
//     for(int i=0; i<(sizeof(arr)/sizeof(int)); i++)
//         cout << arr[i] << " ";
// }

#include<iostream>
#include<algorithm>
#include<string.h>
using namespace std;

bool  compare(char c1, char c2) {
    return tolower(c1) > tolower(c2); 
}
int main() {
    char arr1[20] = "C Program", arr2[20] = "C Program";
    cout << lexicographical_compare(arr1, arr1+strlen(arr1), arr2, arr2+5, compare); 
    // Syntax:- lexicographical_compare(first begin, first end, last begin, last end);
}
/*
#include<iostream>
using namespace std;

int main() {
    int m = 4, n=5;
    // int * const p = &n;
    const int *p = &n;
    // const int * const p = &n;
    p = &m;
    cout << *p;
} */

/*#include<iostream>
using namespace std;
inline int SQUARE(int x) { return x*x; }
int main() {
    int a=3, b;
    b = SQUARE(++a);
    cout << "Square = " << b << endl;
}*/

#include<iostream>
using namespace std;

int main() {
    
}