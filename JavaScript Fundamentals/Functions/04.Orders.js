function orders(product, count) {
    let total = 0;
    if (product === 'coffee') {
        total = count * 1.50;
    } else if ( product === 'water') {
        total = count * 1;
    } else if ( product === 'coke') {
        total = count * 1.40;
    } else if ( product === 'snacks') {
        total = count * 2;
    }
    console.log(total.toFixed(2));
}

orders('water', 5);