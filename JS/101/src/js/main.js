function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye');
    }
}

// Експортуємо модуль назовні
module.exports = myModule;