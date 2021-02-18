// import {movieData} from '../data/SearchData';
import { genre } from './../data/Genre';
import _ from 'lodash';
// get genre description

function getGenreDesc(genreIds) {

    let genreDesc = [];
    for (let genreId of genreIds) {
        genreDesc.push(_.find(genre, x => x.id === genreId).name);
    }

    return genreDesc;
}

export default getGenreDesc