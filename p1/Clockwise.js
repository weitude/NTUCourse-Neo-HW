const myArgs = process.argv.slice(2);
const n = Number(myArgs[0]);

let map = Array(n + 2);
for (let i = 0; i < n + 2; i++) {
    map[i] = Array(n + 2);
}

let idx = 1, col = 1, row = 1;
let right = n, left = 1, top = 1, bottom = n;
while (idx <= n * n) {
    // 往右
    while (idx <= n * n) {
        map[row][col] = idx++
        if (col + 1 > right) {
            top++;
            row++;
            break;
        }
        col++;
    }
    // 往下
    while (idx <= n * n) {
        map[row][col] = idx++
        if (row + 1 > bottom) {
            right--;
            col--;
            break;
        }
        row++;
    }
    // 往左
    while (idx <= n * n) {
        map[row][col] = idx++
        if (col - 1 < left) {
            bottom--;
            row--
            break;
        }
        col--;
    }
    // 往上
    while (idx <= n * n) {
        map[row][col] = idx++
        if (row - 1 < top) {
            left++;
            col++;
            break;
        }
        row--;
    }
}

let ans = Array(n + 2).fill('')
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        ans[i] += map[i][j] + ' '

for (let i = 1; i <= n; i++)
    console.log(ans[i])
