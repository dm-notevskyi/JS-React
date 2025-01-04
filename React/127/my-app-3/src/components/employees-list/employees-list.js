import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        // Робимо деструктуризацію, щоб витягнути з об'єкту 'data' лише значення 'id'
        // Значення 'id' потрібно окремо для пропса 'key' в 'EmployeesListItem'
        // Дослівно: ми дістаємо 'id' серед всіх інших значень ('itemProps')
        const {id, ...itemProps} = item;

        return <EmployeesListItem 
                    key={id} 
                    {...itemProps} // в 'itemProps' містяться елементи 'name', 'salary', 'increase' (усі крім 'id')
                    onDelete={() => onDelete(id)} // прийняли цей метод з App, і передаємо його далі з аргументом id (унікальний ключ співробітника)
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                /> 
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;