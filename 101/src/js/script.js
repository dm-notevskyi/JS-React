'use strict';

// Імпортуємо модуль з файлу 'main.js'
const myModule = require('./main');

// По суті ми імпортували функцію-конструктор,
// тож тепер ми можемо створити екземпляр нашого модуля і використовувати всі його властивості і методи

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();