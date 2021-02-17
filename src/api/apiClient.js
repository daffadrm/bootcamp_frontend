import {movieData} from './../data/SearchData'; 
import {genre} from'./../data/Genre'; 
import _ from 'lodash'; 
// get genre description
function getGenreDesc(movieId) { 
    let genreIds = _.find(movieData, x => x.id === movieId).genre_ids; 
    let genreDes = []; 
    for (let genreId of genreIds) {
        genreDes.push(_.find(genre, x => x.id === genreId).name);
    }
    console.log('genres : ' + genreDes);
    
    return genreDes; //7

}
export default getGenreDesc