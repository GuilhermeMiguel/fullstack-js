import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserve } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

function* addToReserve({ id }){
   
    //para usar um side effect eu preciso do yield 
    //para utilizar um state do reducer eu utilizo um select
    const tripExists = yield select (
        state => state.reserve.find(trip => trip.id === id)
    );

    if (tripExists) {
       const amount = tripExists.amount + 1;  
       
       //chamando a action que aumenta o amount
       yield put(updateAmountReserve(id, amount));
    }
    else {
        //yield é o await do generator
        const response = yield call(api.get, `trips/${id}` );
        
        const data = {
            ...response.data,
            amount: 1,
        };

        //yield também pode ser utilizado para chamar actions dentro do saga -- actions escutadas pelo reducer
        yield put(addReserveSuccess(data));

            //mandando para pagina de reservas
        //a diferença é que ele vai para a proxima pagina somente quando a requisicao das informalçoes necessaria acabarem
        //history.push('/reservas');
    }    
    
}


export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
])