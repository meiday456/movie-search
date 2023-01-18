import axios from "axios"
import {MovieInfo, MovieInfoById, MovieList, MovieParam} from "../../interface/MovieInterface";
import {apiKey, omdbApiBaseUrl} from "../../const/config";


const fetchClient = () => {

    let instance = axios.create();

    instance.interceptors.request.use(function (config) {
        return config;
    });

    return instance;
};
export const xhr = fetchClient()


export const fetchMovie = async (param : MovieParam) =>{

    if (param.i){
        param = {...param, plot:'full'}
    }

    const {data} = await xhr.get(omdbApiBaseUrl,{
        params : {...param , apiKey : apiKey}
    })

    return data
}