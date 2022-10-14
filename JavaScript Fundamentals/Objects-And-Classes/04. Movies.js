   function movies(arr){
        for(let text of arr){  
            let movieObj = {};  
            if(text.includes(`addMovie`)){
                let name = text.replace("addMovie ", "");
                //replace(substr, newSubstr) substr is string replaced by newSubstr
                //If newSubstr is empty str - substr are removed. // like splice for Array.
                movieObj.name = name; // add name to new obj.
                for(let second of arr){
                    if (second.includes(`${name} onDate`)){
                        let theDate = second.replace(`${name} onDate `, ""); // delete, left date with integers
                        movieObj.date = theDate;
                    }
                    if(second.includes(`${name} directedBy`)){
                        let director = second.replace(`${name} directedBy `, ""); //delete left the name of director at the end.
                        movieObj.director = director;
                    }
                }  
                if (Object.keys(movieObj).length === 3) {
                    console.log(JSON.stringify(movieObj));
                  }
            }
        }
    }

    movies([
        'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
        ]);


    // function movies(list) {
    //     let movieList = [];
    
    //     for (let command of list) {
    //         if (command.includes('addMovie')) {
    //             let [_, ...movieName] = command.split(' ');
    //             let movieNameAsString = movieName.join(' ');
    
    //             let movieObject = {
    //                 name:movieNameAsString
    //             };
    //             movieList.push(movieObject);
    
    //         } else if (command.includes('directedBy')) {
    //             let tokens = command.split(' ');
    //             let movieNameTokens = [];
    //             let directorNameTokens = [];
    
    //             let directedByIndex = tokens.findIndex(x => x === 'directedBy');
    
    //             for (let i = 0; i < directedByIndex; i++) {
    //                 movieNameTokens.push(tokens[i]);
    //             }
    //             for (let i = directedByIndex + 1; i < tokens.length; i++) {
    //                 directorNameTokens.push(tokens[i])
    //             }
    
    //             let name = movieNameTokens.join(' ');
    //             let director = directorNameTokens.join(' ');
    
    //             let movie = movieList.find(x => x.name === name);
    
    //             if (movie) {
    //                 movie.director = director;
    //             }
    //         } else {
    //             let tokens = command.split(' ');
    //             let date = tokens.pop(); // delete date 20.04.2002
    //             tokens.pop(); //delete command onDate
    //             let name = tokens.join(' ');
    
    //             let movie = movieList.find(x => x.name === name);
    
    //             if (movie) {
    //                 movie.date = date;
    //             }
    //         }
    //     }
    //     for (let movie of movieList) {
    //         if(movie.director && movie.date && movie.name) {
    //             console.log(JSON.stringify(movie))
    //         }
    //     }
    // }

    // movies([
    //     'addMovie Fast and Furious',
    //     'addMovie Godfather',
    //     'Inception directedBy Christopher Nolan',
    //     'Godfather directedBy Francis Ford Coppola',
    //     'Godfather onDate 29.07.2018',
    //     'Fast and Furious onDate 30.07.2018',
    //     'Batman onDate 01.08.2018',
    //     'Fast and Furious directedBy Rob Cohen'
    //     ]);




    // function solve(input) {
    //     let movies = {};
    //     for (let i = 0; i < input.length; i++) {
    //         if (input[i].includes('addMovie')) {
    //             let movieName = input[i].replace(/addMovie\s*/, '');
    //             if (!movies.hasOwnProperty(movieName)) {
    //                 movies[movieName] = { name: movieName };
    //             }
    //         } else if (input[i].includes('onDate')) {
    //             let [movieName, date] = input[i].split(/\s*onDate\s*/);
    //             if (movies.hasOwnProperty(movieName)) {
    //                 movies[movieName]['date'] = date;
    //             }
    //         } else if (input[i].includes('directedBy')) {
    //             let [movieName, director] = input[i].split(/\s*directedBy\s*/);
    //             if (movies.hasOwnProperty(movieName)) {
    //                 movies[movieName]['director'] = director;
    //             }
    //         }
    //     }
    //     for (const movieName in movies) {
    //         const movie = movies[movieName];
    //         if (
    //             movie.hasOwnProperty('name') &&
    //             movie.hasOwnProperty('date') &&
    //             movie.hasOwnProperty('director')
    //         ) {
    //             console.log(JSON.stringify(movie));
    //         }
    //     }
    // }