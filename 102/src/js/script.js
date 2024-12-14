'use strict';

// import {one, two} from './main';

// console.log(`${one} and ${two}`);


// Також ми можемо перейменувати імпортовані змінні:
// import {one as first} from './main';

// console.log(first);


// Також можно імпортувати відразу все:
import * as data from './main';

console.log(`${data.one} and ${data.two}`);
// data.sayHi();


// Коли ми використали в 'main.js' export default, то ми можемо цю функцію імпортувати напряму без додаткових змінних:
import sayHi from "./main";

sayHi();