module.exports = class movieModel{

    constructor(movies){
        this.movieList = movies;
    }

    set movies(movies){
        this.movieList = movies;
    }

    get movies(){
        return this.movieList;
    }
}