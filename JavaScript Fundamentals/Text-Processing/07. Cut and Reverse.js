function cutReverse(str) {
    let half = Math.trunc(str.length / 2);
    let first = str.substring(0, half).split('').reverse().join(''); 
    let second = str.substring(half).split('').reverse().join('');
    console.log(first);
    console.log(second); 
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');