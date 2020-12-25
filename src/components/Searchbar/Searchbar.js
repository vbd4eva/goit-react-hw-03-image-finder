import { Component } from 'react';

import s from './Searchbar.module.css';


export default class Searchbar extends Component{
    state = {
        searchQuery: '',
    }

    changeQuery = e => {
        this.setState({ searchQuery: e.target.value });
    }

    submitForm = (e) => {
        e.preventDefault();
        const searchQuery = this.state.searchQuery.trim();

        // searchQuery - is emty
        if (!searchQuery) {
            alert('Введите запрос');
            this.setState({ searchQuery: '' });
            return;
        }


        this.props.onSubmit(searchQuery.toLowerCase());
    }

    render() {
                return (
            <header className={s.Searchbar}>
            <form className={s.form} onSubmit={this.submitForm}>
                <button type="submit" className={s.button}>
                <span className={s.label}>Search</span>
                </button>

                <input
                    className={s.input}
                    type="text"
                     autoComplete="off"
                    autoFocus
                     placeholder="Search images and photos"
                     onChange={this.changeQuery}
                    value={this.state.searchQuery}
                />
            </form>
            </header>
        )
    }
    
}
