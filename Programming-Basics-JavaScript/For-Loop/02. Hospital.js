function hospital(input) {
    let days = Number(input[0]);
    let patients = Number(input[1]);

    let doctors = 7;
    let treatedPatients = 0;
    let unTreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        patients = Number(input[i]);
        if (i % 3 == 0) {
            if (unTreatedPatients > treatedPatients) {
                doctors += 1
            }
        }
        if (patients > doctors) {
        treatedPatients += doctors
        unTreatedPatients += patients - doctors
        } else {
        treatedPatients += patients
        }
    }
console.log(`Treated patients: ${treatedPatients}.`);
console.log(`Untreated patients: ${unTreatedPatients}.`);
}

hospital(["4", "7", "27", "9", "1"]);
