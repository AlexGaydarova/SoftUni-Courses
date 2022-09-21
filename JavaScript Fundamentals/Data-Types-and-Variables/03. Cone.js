function cone(radius,height) { 
    // конус обем и лице;
    let l = Math.sqrt((radius * radius) + (height * height));
    let area = (Math.PI * radius * l) + (Math.PI * radius * radius);
    let volume = (Math.PI * radius * radius * height) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3,5);