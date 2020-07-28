import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

//ISSO TUDO É PADRÃO (CONFIGS PADROES), SEMPRE IGUAL  

const sagaMiddleware = createSagaMiddleware();


//precisamos dar uma aplly nesse saga middleware criado
const enhancer = applyMiddleware(sagaMiddleware);


//Para criar uma store eu preciso de um reducer
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);


export default store;