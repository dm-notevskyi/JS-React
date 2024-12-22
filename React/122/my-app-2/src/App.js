import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };

//   return <input 
//           placeholder={holder} 
//           type="text" 
//           style={styledField}
//         />;
// }

// Зараз в основному використовують функціональні компоненти (функції)
// Але також можна використовувати і класи як в js
// Для цього потрібно імпортувати 'React' і наслідуватись від нього
class Field extends Component {
    // В класі обов'язково має бути функція 'render()'
    render() {
        const holder = 'Enter here';
        const styledField = {
            width: '300px'
        };

        return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}
          />;
    }
}

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
