function companyUsers(input) {
    let company = {};

    for (let line of input) {
        let [companyName, idEmployee] = line.split(' -> ');

        if (!company.hasOwnProperty(companyName)) {
            company[companyName] = new Set(); //  set пази уникални стойности, може и масив за неуникални. []
        }
        company[companyName].add(idEmployee); // ако е масив push
    }  
    let sortedCompanies = Object.entries(company).sort((a,b) => a[0].localeCompare(b[0]));

    for (let el of sortedCompanies) {
        console.log(el[0]);

        for (let num of el[1]){
            console.log(`-- ${num}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);