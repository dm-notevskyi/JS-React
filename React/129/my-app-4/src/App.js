import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
    // props в класовому компоненті передаються через constructor.
    constructor(props) {
        super(props);
        
        // props не можуть динамічно змінюватись
        // якщо ми хочемо змінювати динамічно якісь властивості
        // то ми маємо записати їх в об'єкт 'this.state':
        this.state = {
            years: 27,
            position: ''
        }
    }

    nextYear = () => {
        // Ми не можемо напряму змінювати значення об'єкту 'state'
        // Для цього треба використовувати метод 'setState'
        // Він приймає в себе аргумент - об'єкт з новим станом

        // В нашому випадку ми використовуємо 'setState' з callback функцією
        // Тому що 'setState' - асинхронний метод, який може не встигнути повернути нам правильне значення, якщо швидко натискати на кнопку багато разів
        // Тому ми передаємо аргумент 'state' який є нашим 'this.state'. Таким чином лічильник не зіб'ється
        this.setState(state => ({ // круглі скобки, в середині яких фігурні означають 'return'
            years: state.years + 1
        }));
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        });
    }

    render() {
        // Робимо деструкуризацію об'єкту 'this.props', дістаючи з нього потрібні нам змінні (name, surname, link)
        const {name, surname, link} = this.props;
        const {years, position} = this.state;

        return (
            // onChange - в react те саме, що і inInput
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>
                    My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}
                </h1>
                <a href={link}>My profile</a>

                <form>
                    <span>Type a position</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Sara" surname="Blane" link="instagram.com"/>
        </div>
    );
}

export default App;
