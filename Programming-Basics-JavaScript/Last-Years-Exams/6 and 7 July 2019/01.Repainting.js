function repainting(input) {
    let nailon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
    let totalNailon = (nailon + 2) * 1.50;
    let totalBoq = (boq + (boq * 0.10)) * 14.50;
    let totalRazreditel = razreditel * 5.00;
    let totalSum = totalNailon + totalBoq + totalRazreditel + 0.40;
    let maistoriCena = (0.30 * totalSum) * hours;
    let totalExpenses = totalSum + maistoriCena;
    console.log(`Total expenses: ${totalExpenses.toFixed(2)} lv.`);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
repainting(["90", "99", "28", "9"]);
