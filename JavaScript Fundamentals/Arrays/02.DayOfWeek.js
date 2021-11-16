function dayOfWeek(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]); // index започва от 0-6 
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);