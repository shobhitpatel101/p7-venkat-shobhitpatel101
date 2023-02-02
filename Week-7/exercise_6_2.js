function spiralMatrix(matrix){
    let rowCount = matrix.length
    let colCount = matrix[0].length
    let x = 0;
    let y = 0;
    let res = []
    let temp = 0;
    let totalrun = rowCount*colCount

    while(temp<totalrun){
        
        for(let i=y; i<colCount; i++){
            res.push(matrix[x][i]);
            temp++;
        }
        x++;

        for(let i=x; i<rowCount; i++){
            res.push(matrix[i][colCount-1]);
            temp++;
        }

        colCount--;

        for(let i=colCount-1; i>=y; i--){
            res.push(matrix[rowCount-1][i]);
            temp++;
        }

        rowCount--;

        for(let i=rowCount-1; i>=x; i--){
            res.push(matrix[i][y]);
            temp++;
        }

        //x++;
        y++;
        //rowCount--;
        //colCount--;
        
    }
    return res;
}

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]]
console.log(spiralMatrix(matrix))


matrix = [[ 1, 2, 3, 4],
          [ 5, 6, 7, 8],
          [ 9,10,11,12],
          [13,14,15,16]]
console.log(spiralMatrix(matrix))
