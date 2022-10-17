function songs(input) {
    class Song  {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let arrSongs = []; // create new array
    let numberSongs = input.shift(); // cut 1st
    let typeSongLast = input.pop(); //cut last element.

    for (let i = 0; i < numberSongs; i++) {
        let [typeList, name, time] = input[i].split('_'); 
        let song = new Song(typeList, name, time); // извикваме инстанция клас
        arrSongs.push(song); // добавям в масива новите обекти.
    }

    if (typeSongLast == 'all') {
        arrSongs.forEach((el) => console.log(el.name)); // за всеки елемент от масива/в случая са обекти/ отпечатай тяхното име.
        // song.name  От обекта song => name.
    } else {
        let filtered = arrSongs.filter((el) => el.typeList == typeSongLast);
        filtered.forEach((el) => console.log(el.name));
    }
    
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);