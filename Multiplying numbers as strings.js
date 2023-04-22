function multiply(a, b) {
    const product = [];
    const aDigits = a.split("").map(Number);
    const bDigits = b.split("").map(Number);
  
    for (let i = aDigits.length - 1; i >= 0; i--) {
      for (let j = bDigits.length - 1; j >= 0; j--) {
        const position = aDigits.length + bDigits.length - i - j - 2;
        const digit = aDigits[i] * bDigits[j] + (product[position] || 0);
        product[position] = digit % 10;
        product[position + 1] = Math.floor(digit / 10) + (product[position + 1] || 0);
      }
    }
  
    while (product.length > 1 && product[product.length - 1] === 0) {
      product.pop();
    }
  
    return product.reverse().join("");
  }
  