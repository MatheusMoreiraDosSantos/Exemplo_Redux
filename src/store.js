// responsavel por inicializar o redux
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

export default store;
