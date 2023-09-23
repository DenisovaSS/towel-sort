// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix !== undefined) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let numColumn = i % 2 === 0 ? j : matrix[i].length - j - 1;
                result.push(matrix[i][numColumn]);
            }
        }
        return result;
    } else {
        return [];
    }
};
