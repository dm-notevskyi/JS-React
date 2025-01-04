import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    // Ми хочемо не тільки передавати стан term (те, що написано в інпуті) нагору, але й хочемо зберігати його тут, локально
    // Щоб наш інпут нормально синхронізувався з локальним стейтом (в середині цього компоненту)
    // Тому треба і тут написати окрему функцію для збереження стану term локально
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        
        // І тепер можна викликати функцію з props, яка сюди передається з App і передати в неї аргумент term:
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Find employee"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;