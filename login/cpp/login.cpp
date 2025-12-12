#include <bits/stdc++.h>
using namespace std;

string getFileName(const string& username) {
    return "login/cpp/users/" + username + ".txt";
}

// Registration function
bool registerUser(const string& username, const string& password) {
    string filename = getFileName(username);
    ifstream infile(filename);
    if(infile.good()) {
        cout << "Username already exists!\n";
        return false;
    }
    ofstream outfile(filename);
    outfile << password;
    outfile.close();
    cout << "Registration successful!\n";
    return true;
}

// Login function
bool loginUser(const string& username, const string& password) {
    string filename = getFileName(username);
    ifstream infile(filename);
    if(!infile.good()) {
        cout << "Username not found!\n";
        return false;
    }
    string storedPass;
    infile >> storedPass;
    infile.close();
    if(storedPass == password) {
        cout << "Login successful!\n";
        return true;
    } else {
        cout << "Incorrect password!\n";
        return false;
    }
}

int main() {
    // Create users folder if not exists
    system("mkdir -p login/cpp/users");

    int choice;
    string username, password;
    while(true) {
        cout << "\n1. Register\n2. Login\n3. Exit\nEnter choice: ";
        cin >> choice;
        if(choice == 1) {
            cout << "Enter username: "; cin >> username;
            cout << "Enter password: "; cin >> password;
            registerUser(username, password);
        } else if(choice == 2) {
            cout << "Enter username: "; cin >> username;
            cout << "Enter password: "; cin >> password;
            loginUser(username, password);
        } else if(choice == 3) {
            cout << "Exiting...\n"; break;
        } else {
            cout << "Invalid choice!\n";
        }
    }
    return 0;
}
