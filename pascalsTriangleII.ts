function getRow(rowIndex: number): number[] {
    var pascalsTriangle:number[][] = [[1]];
    var i:number
    for(i = 1; i<=rowIndex; i++){
        const currentRow:number[] = pascalsTriangle[i-1];
        var j:number;
        var newRow:number[] = [1];
        for(j=0; j<currentRow.length-1; j++){
            newRow.push(currentRow[j]+currentRow[j+1])
        }
        newRow.push(1);
        pascalsTriangle.push(newRow);
    }
    return pascalsTriangle.pop();
};
