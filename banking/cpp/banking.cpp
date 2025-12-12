#include <bits/stdc++.h>
using namespace std;

class Account{
public:
    string name;
    double balance;
    vector<string> transactions;

    Account(string n, double b):name(n), balance(b){
        transactions.push_back("Account created with balance " + to_string(b));
    }

    void deposit(double amt){
        balance += amt;
        transactions.push_back("Deposited: " + to_string(amt));
    }

    void withdraw(double amt){
        if(amt>balance) {
            cout << "Insufficient balance!\n"; return;
        }
        balance -= amt;
        transactions.push_back("Withdrawn: " + to_string(amt));
    }

    void showInfo(){
        cout << "Name: " << name << "\nBalance: " << balance << "\nTransactions:\n";
        for(auto &t: transactions) cout << t << "\n";
    }
};

int main(){
    string name; double bal;
    cout << "Enter Customer Name: "; cin >> name;
    cout << "Enter Initial Balance: "; cin >> bal;

    Account acc(name, bal);

    int choice;
    while(true){
        cout << "\n1.Deposit 2.Withdraw 3.Show Info 4.Exit\nChoice: ";
        cin >> choice;
        if(choice==1){
            double amt; cout<<"Deposit Amount: "; cin>>amt;
            acc.deposit(amt);
        } else if(choice==2){
            double amt; cout<<"Withdraw Amount: "; cin>>amt;
            acc.withdraw(amt);
        } else if(choice==3){
            acc.showInfo();
        } else if(choice==4){
            cout << "Exiting...\n"; break;
        } else cout << "Invalid choice!\n";
    }
    return 0;
}
