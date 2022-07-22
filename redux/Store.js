import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
const reduxlogger = require('redux-logger')
import reducer from "./content/contentReducer";
import rootReducer from "./rootReducer";
const logger = reduxlogger.createLogger()


// const store = createStore(rootReducer,applyMiddleware(logger))

const store = configureStore({
    reducer: rootReducer
})
console.log('store', store);

export default store