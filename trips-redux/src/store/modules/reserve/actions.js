//Isolando as actions numa classe 


//Quem vai ouir é o saga
export function addReserveRequest(id){
  return {
    type: 'ADD_RESERVE_REQUEST',
    id
  }
}

//Quem vai ouir é o reducer
export function addReserveSuccess(trip){
  return {
    type: 'ADD_RESERVE_SUCCESS',
    trip
  }
}
  
export function removeReserve(id){
  return {
    type: 'REMOVE_RESERVE',
     id,
  }
}

export function updateAmountReserve(id, amount){
  return {
    type: 'UPDATE_RESERVE',
     id,
     amount
  }
}