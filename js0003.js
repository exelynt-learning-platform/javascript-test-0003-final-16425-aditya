let rows = 6;

for (let i = 1; i <= rows; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        let value;

        if ((i + j) % 2 === 0) {
            value = 1;
        } else {
            value = 0;
        }

        row += value + " ";
    }

    console.log(row.trim());
}