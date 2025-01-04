import { styled } from 'styled-components';
import { Component } from 'react';
import './App.css';

// Styled Components
const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
    // Ми можемо навіть задавати стилі для дочірніх елементів компоненту:
    a {
        display: block;
        margin: 10px 0 10px 0;
        // Ми можемо використовувати props для динамічних стилів:
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin: 10px auto 0;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;

// Ми можемо експортувати styled components:
export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    margin: 0 auto;
    background-color: gold;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
`;

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
            // onChange - в react те саме, що і onInput
            // Ми також можемо передавати props в styled components
            <EmpItem active>
                <Button onClick={this.nextYear}>+++</Button>
                <Header>
                    My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}
                </Header>
                <a href={link}>My profile</a>

                <form>
                    <span>Type a position</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </EmpItem>
        )
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

function App() {
    return (
        <div className="App">
            <Wrapper>
                <WhoAmI name="John" surname="Smith" link="facebook.com"/>
                <WhoAmI name="Sara" surname="Blane" link="instagram.com"/>
            </Wrapper>
        </div>
    );
}

export default App;
