function solve(input) {
    let register = {};
    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');       
        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }
		if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];
        }
		register[systemName][componentName].push(subcomponentName);
    }
	let sortedKeys = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));
    sortedKeys.forEach((key) => {
        console.log(key);
		let sortedSubKeys = Object.keys(register[key]).sort((a, b) => Object.keys(register[key][b]).length - Object.keys(register[key][a]).length);
		sortedSubKeys.forEach((subKey) => {
			console.log(`|||${subKey}`);
			register[key][subKey].forEach((subComponent) => {
				console.log(`||||||${subComponent}`);				
			});			
		});
    });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);



function solve2(params) {
    let systems = new Map();
    for (const row of params) {
        let [name, component, subComponent] = row.split(' | ');
        if (!systems.get(name)) {
            systems.set(name, new Map());
        }
        let setOfSybcomponents = systems.get(name).get(component);
        if (!setOfSybcomponents) {
            systems.get(name).set(component, []);
            setOfSybcomponents = systems.get(name).get(component);
        }
        setOfSybcomponents.push(subComponent);
    }
    let ident = '|||';
    let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size // By components count -> x[1].size
        : a[0] < b[0] ? -1 // By Name -> x[0]
            : a[0] > b[0] ? 1
                : 0;
    let result = [...systems]
        .sort((a, b) => sortSystems(a, b))
        .map(sys => sys[0]
            + '\n' + [...sys[1]]
                .sort((a, b) => b[1].length - a[1].length) // By subcomponents count -> x[1].length
                .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
                .join('\n')
        )
        .join('\n');
    console.log(result.trim());
}