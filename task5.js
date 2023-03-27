const n = 6; 

for (let i = n; i >= 1; i--) {
  let string= '';

  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i ===n) {
      string += '*';
    } else {
      string += ' ';
    }
  }

  console.log(string);
}
