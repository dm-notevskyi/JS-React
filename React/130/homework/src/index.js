import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter
    }
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  inc = () => {
    this.setState(stateItem => {
      if (stateItem.counter < 50) {
        return {
          counter: stateItem.counter + 1
        }
      }
    });
  }

  dec = () => {
    this.setState(stateItem => {
      if (stateItem.counter > -50) {
        return {
          counter: stateItem.counter - 1
        }
      }
    });
  }

  rnd = () => {
    let min = -50,
        max = 50,
        num = Math.floor((Math.random() * (max - min + 1) + min));
    
    this.setState(stateItem => ({
      counter: num
    }));
  }

  reset = () => {
    this.setState({
      counter: this.props.counter
    });
  }

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.inc}>INC</button>
          <button onClick={this.dec}>DEC</button>
          <button onClick={this.rnd}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App counter={0}/>
  </React.StrictMode>
);

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов