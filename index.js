function start() {
    console.log('有反應');
    const input = document.getElementById('num').value;
    const numArray = input.split(/[\s,]+/).map(x => Number(x)).filter(n => !isNaN(n));
    const selectedValue = document.getElementById('sortType').value;
    let ans = [];
    if (selectedValue === "up") {
        ans = numArray.sort((a, b) => a - b);
    }
    else if (selectedValue === 'down') {
        ans = numArray.sort((a, b) => b - a);
    }

    const output = document.getElementById('screen');
    output.innerHTML = '';
    const result = document.createElement('div');
    result.innerHTML = `排序後的數字為${ans.join(", ")}`;
    output.appendChild(result);
}
