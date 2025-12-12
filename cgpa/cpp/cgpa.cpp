#include <bits/stdc++.h>
using namespace std;

// Simple grade-to-points mapping
double gradeToPoints(const string &g) {
    if(g == "A+" || g == "S") return 10;
    if(g == "A") return 9;
    if(g == "B+") return 8;
    if(g == "B") return 7;
    if(g == "C") return 6;
    if(g == "D") return 5;
    if(g == "F" || g == "E") return 0;
    return 0;
}

int main() {
    int n;
    cout << "Enter number of courses: ";
    if(!(cin >> n) || n <= 0) {
        cout << "Invalid number\n";
        return 0;
    }

    double totalCredits = 0.0;
    double totalGradePoints = 0.0;

    for(int i = 1; i <= n; ++i) {
        string grade;
        double credits;
        cout << "Course " << i << " Grade (A+, A, B+, B, C, D, F): ";
        cin >> grade;
        cout << "Course " << i << " Credits: ";
        cin >> credits;
        double gp = gradeToPoints(grade) * credits;
        totalCredits += credits;
        totalGradePoints += gp;
    }

    double cgpa = (totalCredits > 0) ? (totalGradePoints / totalCredits) : 0.0;
    cout << fixed << setprecision(2);
    cout << "Total Credits = " << totalCredits << "\n";
    cout << "CGPA = " << cgpa << "\n";

    return 0;
}
