import produce from 'immer';

export default function reserve(state = [], action ){

  //switch para capturar o tipo de action lançada
  switch(action.type){
    case 'ADD_RESERVE_SUCCESS':
      //com esse produce do immer eu resolvo o problema de imutabilidade das states no reducer
    //não posso alterar diretamente uma state, então mexo com ela no produce 

      return produce(state, draft => {
        
          draft.push(action.trip);

      });

    //aqui estou atuando caso a action lançada seja de remossão 
    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if(tripIndex >= 0){
          draft.splice(tripIndex, 1);
        }

    });


    //aqui estou atuando caso a action lançada seja de atualizacao da quantidade 
    case 'UPDATE_RESERVE': {

      //Se a quantidade de reservas chegar a 1 ele nao pode mais diminuir
      if(action.amount <= 0){
          return state;
      }

      return produce(state, draft => {
          const tripIndex = draft.findIndex(trip => trip.id === action.id);

          if(tripIndex >= 0){
            draft[tripIndex].amount = Number(action.amount);
          }

      });

    }
    default:
      return state;
  }
}