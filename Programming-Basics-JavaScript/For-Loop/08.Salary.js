function salary(input) {
    let openTabs = Number(input[0]);
    let incomeSalary = Number(input[1]);
    let isLostSalary = false;
    let index = 2;

    for (let i = 0; i < openTabs; i++) {
        let name = input[index];
        index++
        if (name == "Facebook") {
            incomeSalary -= 150;
        } else if (name == "Instagram") {
            incomeSalary -= 100;
        } else if ( name == "Reddit") {
            incomeSalary -= 50;
        }
        if (incomeSalary <= 0) {
            console.log(`You have lost your salary.`);
            isLostSalary = true;
            break;
            }    
        }
        if (incomeSalary > 0) {
            console.log(incomeSalary.toFixed(0));
        }
    }

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])