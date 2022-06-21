function diagonalDifference(arr) {

    let leftTotal = 0
    let rightTotal = 0
    let diff = 0

    // Get elements from first diagonal
    for (let row = 0; row < arr.length; row++) {

        // element indexes
        const rightDiagonalIndex = arr[row].length - 1
        const leftDiagonalIndex = row

        const elFromLeft = arr[row][leftDiagonalIndex]
        const elFromRight = arr[row][rightDiagonalIndex - row]

        leftTotal += elFromLeft
        rightTotal += elFromRight
    }

    diff = Math.abs(leftTotal - rightTotal)

    return diff;
}