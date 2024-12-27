import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        // В даному випадку нас не цікавить стан state.name/state.salary до виклику функції
        // Тому ми можемо обійтись без callback функції
        this.setState({
            // ES6 дозволяє звернутись до атрибуту name поточного інпуту за допомогою [e.target.name]
            // і так як значення 'name' інпутів співпадає з 'this.state', то ця конструкція працює
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label" 
                        placeholder="Name"
                        name="name"
                        // Якщо ми хочемо, щоб React рендерив форму і контролював її поведінку
                        // у відповідь на те, що вводить юзер, ми маємо додати атрибут 'value'
                        // і помістити в нього значення 'state'
                        value={name}
                        // Логіка така:
                        // 1. Ми викликаємо метод 'onValueChange'
                        // 2. В цьому методі використовується 'setState', який вносить зміни в наш 'this.state'
                        // 3. Кожного разу, коли змінюється 'this.state' - запускається заново render сторінки
                        // 4. І коли сторінка перебудовується, нам необхідно, щоб в інпутах були актуальні 'value', які зараз в 'this.state'
                        // Тому і важливо додавати інпутам атрибути 'value' зі значенням з 'this.state'
                        onChange={this.onValueChange}
                    />
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="Salary"
                        name="salary"
                        // Якщо ми хочемо, щоб React рендерив форму і контролював її поведінку
                        // у відповідь на те, що вводить юзер, ми маємо додати атрибут 'value'
                        // і помістити в нього значення 'state'
                        value={salary}
                        onChange={this.onValueChange}
                    />
    
                    <button className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;