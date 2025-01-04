import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Dilan Parker', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'George Prost', salary: 5000,  increase: true, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            // Ми знаємо, що об'єкт 'data' всередині 'state' ми міняти не можемо,
            // тому ми повертаємо новий об'єкт, в якому буде властивість 'data',
            // в якому формується новий масив через callback функцію всередині методу 'map'
            data: data.map(item => {
                // callback функція перебирає всі об'єкти всередині масиву 'data'
                // і якщо в нас співпали id, то значить ми зайшли в потрібний нам об'єкт
                if (item.id === id) {
                    // в цьому об'єкті ми залишаємо всі значення, окрім 'increase', значення якого ми міняємо на протилежне
                    return {...item, [prop]: !item[prop]}
                }
                // Якщо ж id не співпали, то тоді ми просто повертаємо поточний об'єкт
                return item;
            })
            // Тож в підсумку ми отримали новий масив об'єктів (копію 'this.state.data') з одним зміненим.
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            // Шукаємо співпадіння шматочку рядку 'term' з якимось із item.name
            // Якщо співпадіння є, то нам поверне індекс, де було знайдено співпадіння
            // А якщо ні, то поверне -1
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term}); // Те саме, що і {term: term}, просто коротка форма
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
                // 'break' можна не ставити, так як React і сам знає, що далі робити
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;