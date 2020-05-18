import React from "react";
import { Provider } from "react-redux";
// Provider é responsavel por atualizar os componentes da aplicação quando houver
//alterações no estado da aplicação
import store from "./store";
import TodoList from "./TodoList";
import Counter from "./counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
