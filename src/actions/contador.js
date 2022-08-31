//essse arquivo está mais pra uma tipagem do que um action
///////////////action        prefixo
export const INCREMENTAR = 'CONTADOR::INCREMENTAR';
export const DECREMENTAR = 'CONTADOR::DECREMENTAR';

export const incrementarContador = () => ({
    //tipo da ação/action
  type: INCREMENTAR
});

export const decrementarContador = () => ({
  type: DECREMENTAR
})