import { combineReducers } from 'redux';

import reserve from './reserve/reducer';

//método que combina todos os reducers que podem ser utilizados dentro da aplicação
export default combineReducers({
    reserve,
})