import { all } from 'redux-saga/effects';

import reserve from './reserve/sagas';

//método que combina todos os reducers que podem ser utilizados dentro da aplicação
export default function* rootSaga(){
    return yield all([
        reserve,
    ])
}