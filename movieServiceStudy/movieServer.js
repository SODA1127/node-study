const express = require('express');
const app = express();

app.listen(3000);

let movies = [
    {title: "리틀 포레스트", date: "2017"},
    {title: "퍼시픽림2", date: "2018"},
    {title: "블랙팬서", date: "2018"},
    {title: "지금 만나러 갑니다", date: "2015"}
    //{title: "너의 이름은"}
];

//const movieModel = require('./moviseModel');

class Movie{
    constructor(id, title, date){
        this.id = id;
        this.title = title;
        this.date = date;
    }
}

class MovieModel {
    constructor(movies) {
        this.movieList = movies;
    }

    setMovies(movies) {
        this.movieList = movies;
    }

    getMovies() {
        return new Promise((resolve, reject) => {
            resolve(this.movieList);
        });
    }


}

const movieList = new MovieModel(movies);
app.get('/movies', async (req, res) => {
    movieList.getMovies().then(
        (data) => {
            let id = 0;
            let movieString = "";
            for(let movie of data){
                let movieInfo = new Movie(++id, movie.title, movie.date);
                console.log(movieInfo);
                if(movieInfo.title == undefined || movieInfo.date == undefined){
                    Error.data = "잘못된 데이터";
                    throw Error;
                }else {
                    movieString += "영화 이름 : " + movieInfo.title + " | 영화 출시일 : " + movieInfo.date + "<br/>";
                }
            }
            res.send(movieString);
        },
        (error) => {
            console.log(error);
        }
    ).catch((error) => {
        console.log('잘못된 영화 데이터입니다.');
        res.status(500).send(error.data);
    });

});

app.post('/movies/add', async (req, res) =>{

});
