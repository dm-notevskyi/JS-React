import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World!';

const elem = (
  // У багаторядкових елементах має бути один материнський елемент
  <div>
    {/* У фігурні скобки {} ми можемо вставляти змінні, різні вирази, все, що завгодно, 
    окрім об'єктів, наприклад: new Date(); або просто пустих об'єктів: {};
    А масиви виводяться з канкатанацією: [1, 3, 44, 'ab'] => 1344ab */}
    <h2>Текст: {text}</h2>

    {/* Слова "class" і "for" вже зарезервовані в js, тому ці атрибути відрізняються від звичайних html: */}
    <h3 className="text">Some Text</h3>
    <label htmlFor=""></label>

    <input type="text" />

    {/* Також атрибути в jsx пишуться в формати camelCase.
    А значення атрибутів можна вказувати в фігурних скобках
    або як і зазвичай в лапках ("") */}
    <button tabInded={1}>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);