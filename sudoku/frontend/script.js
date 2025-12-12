function goHome() {
    window.location.href = "../../index.html";
}

const grid = document.getElementById('grid');
let cells = [];

// Create 9x9 table
for(let i=0;i<9;i++){
    let tr=document.createElement('tr');
    let row=[];
    for(let j=0;j<9;j++){
        let td=document.createElement('td');
        let inp=document.createElement('input');
        inp.type='number'; inp.min='0'; inp.max='9';
        inp.value='0';
        td.appendChild(inp);
        tr.appendChild(td);
        row.push(inp);
    }
    grid.appendChild(tr);
    cells.push(row);
}

// Check if number can be placed
function isValid(board, row, col, num){
    for(let i=0;i<9;i++){
        if(board[row][i]==num || board[i][col]==num) return false;
    }
    let startRow=Math.floor(row/3)*3;
    let startCol=Math.floor(col/3)*3;
    for(let i=0;i<3;i++)
        for(let j=0;j<3;j++)
            if(board[startRow+i][startCol+j]==num) return false;
    return true;
}

// Backtracking solver
function solveSudoku(board){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]==0){
                for(let num=1;num<=9;num++){
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

document.getElementById('solve').onclick = ()=>{
    let board = cells.map(r=>r.map(c=>+c.value||0));
    if(solveSudoku(board)){
        for(let i=0;i<9;i++)
            for(let j=0;j<9;j++)
                cells[i][j].value = board[i][j];
    } else alert("No solution found!");
};
