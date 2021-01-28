import React,{Component} from 'react';


import './App.css';

import Form from './Form';//新たにForm.JSを作ったためインポート

import Todo from './Todo';// 新たにインポート


let  currentId = 0

//Appクラスを継承
class App extends Component　{
  constructor(props){
    super(props);

    this.state = {
      todos: []
    };
  }
    render (){
      return(
        <div>
        <h1>TO DO APP</h1>
          <Form onSubmit={this.handleSubmit} />



          <ul>
          {this.state.todos.map(({ id, text ,completed}) => (
            <li key={id}>
            <Todo
            id={id}
            text={text}
            completed={completed}
            onChange={this.handleChangeCompleted}
            onDelete={this.handleClickDelete}
            />
            </li>
          ))}
          </ul>

       </div>

　　　 );

    }

    handleSubmit = text => {
      const newTodo = {
        id: currentId,
        text,
        completed: false
      };
      const newTodos = [...this.state.todos,newTodo]
      this.setState({ todos: newTodos })
      currentId+=1;//currentIdをインクリメントするということ
    };

    /**
     * TODO の完了フラグを変更する
     * @param {number} id 完了フラグを操作する TODO の id
     * @param {boolean} completed 完了したかどうか
     */
    handleChangeCompleted = (id, completed) => {
      // Map 関数で配列の要素を一つづつ操作する
      const newTodos = this.state.todos.map(todo => {
        // もし TODO の id が目的の id だったら、completed の値を上書きする
        if (todo.id === id) {
          todo.completed = completed
        }
        return todo
      })
      this.setState({ todos: newTodos })
    };

    handleClickDelete = id => {
      const newTodos = this.state.todos.filter( todo => todo.id !== id)
      this.setState({ todos: newTodos });
    };
}

export default App;
