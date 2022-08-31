
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, createStore } from "redux";
import { combineReducers } from "redux";
import contadorReducer from "../reducers/contador";

// para adicionar mais reducers é só adicionar a virgula e adicionar o reducer
const reducers = combineReducers({ contadorReducer });
// a propriedade reducer é obrigatoria pra que funcione o configureStore
const store = configureStore({reducer: reducers})
// const store = createStore(reducers) //caiu em desuso

export default store;