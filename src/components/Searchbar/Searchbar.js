import { Component } from 'react';
import PropTypes from 'prop-types'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './Searchbar.module.css';


export default class Searchbar extends Component{
    state = {
        searchQuery: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }


    changeQuery = e => {
        this.setState({ searchQuery: e.target.value });
    }

    submitForm = (e) => {
        e.preventDefault();
        const searchQuery = this.state.searchQuery.trim();

        // searchQuery - is emty
        if (!searchQuery) {
            toast("to finds some, needs type some");
            this.setState({ searchQuery: '' });
            return;
        }


        this.props.onSubmit(searchQuery.toLowerCase());
    }

    render() {
                return (
                    <>
                        <header className={s.Searchbar} id="searchbar">
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
                    
            <ToastContainer/>
                    </>
        )
    }
    
}
