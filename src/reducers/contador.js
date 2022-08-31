import { INCREMENTAR, DECREMENTAR } from '../actions/contador';

const initialState = {
  contador: 0
}
// As Actions são ações que devem ser disparadas quando 
// queremos que algo seja mudado no nosso estado global.
const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENTAR:
      return {
        ...state,
        contador: state.contador - 1,
      };
    default:
      return state;
  }
};

export default contadorReducer;