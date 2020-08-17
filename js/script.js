

const personalMovieDB = {
count: 0,
movies:{},
actors:{},
genres:[],
privat: false,
start: function(){
    personalMovieDB.count = + prompt('Сколько фильмов вы уже посмотрели?', '');

    while(personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = + prompt('Сколько фильмов вы уже посмотрели?', '');
    }
},
rememberMyFilms: function(){
    for (let i=0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('Как вы его оцените?','');
     
             if(a !=null && b != null && a !='' && b !='' && a.length <50){
                 personalMovieDB.movies[a] = b;
                 console.log('done');
            } else{
                 console.log('error');
                 i--;
            }
    }
},
detectPersonalLevel: function(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Ошибка');
    }
},
showMyDB: function(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }else{
        console.log('Privat');
    }
},
toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
    personalMovieDB.privat = false;
    }else{
    personalMovieDB.privat = true;
     }
},
writeYourGenres: function(){
    for (let i=0; i<3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);

        if(genre ==='' || genre === null){
            console.log('Вы ввели некорректные данные');
            i--;
        }else{
            personalMovieDB.genres.push(genre);
        }
    }
    // console.log(personalMovieDB.genres);
    personalMovieDB.genres.forEach((item, i)=>{
        console.log(`Любимы жанр ${i+1} - это ${item}`);
    });
}
};

console.log(personalMovieDB);