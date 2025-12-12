#include <bits/stdc++.h>
using namespace std;

bool isValid(vector<vector<int>>& board, int row, int col, int num){
    for(int i=0;i<9;i++)
        if(board[row][i]==num || board[i][col]==num) return false;
    int startRow = row/3*3, startCol = col/3*3;
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            if(board[startRow+i][startCol+j]==num) return false;
    return true;
}

bool solveSudoku(vector<vector<int>>& board){
    for(int i=0;i<9;i++){
        for(int j=0;j<9;j++){
            if(board[i][j]==0){
                for(int num=1;num<=9;num++){
                    if(isValid(board,i,j,num)){
                        board[i][j]=num;
                        if(solveSudoku(board)) return true;
                        board[i][j]=0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main(){
    vector<vector<int>> board(9, vector<int>(9));
    cout << "Enter Sudoku grid (0 for empty cells):\n";
    for(int i=0;i<9;i++)
        for(int j=0;j<9;j++)
            cin >> board[i][j];

    if(solveSudoku(board)){
        cout << "\nSolved Sudoku:\n";
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++) cout << board[i][j] << " ";
            cout << "\n";
        }
    } else cout << "No solution exists!\n";

    return 0;
}
