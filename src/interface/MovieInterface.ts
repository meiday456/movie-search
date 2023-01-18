export interface MovieParam {
    s? : string
    page : number
    i? : string
    plot? :string
}


export interface MovieInfo {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}
export interface MovieList {
    totalResults? : number
    Response? : string
    Search : MovieInfo[]
    Error? : string
}

export interface MovieInfoById {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: {
        Source: string
        Value: string
    }[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
}

export interface ViewStoreState {
    searchText : string,
    activeMovieId : string,
    currentPage : number,
    maxPage : number,
    statusMessage : string
}

export interface ServerStoreState{
    movieList : MovieInfo[]
    listLoading : boolean
    infoLoading : boolean
    movieInfo : MovieInfoById | null
}