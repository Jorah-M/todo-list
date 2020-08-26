import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label : event.target.value
        })
    };

    onSubmit = (event) => {
        //Не даёт браузеру обновить страницу сразу после добавления айтема (формы так работают)
        event.preventDefault();
        this.props.onItemAdding(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {

        return (
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}>

                <input  type='text' 
                        className='form-control'
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done?" 
                        //value, устанавливаемое из state, позволяет сделать элемнент контролируемым
                        value={this.state.label}/>
                <button 
                className='btn btn-outline-secondary shadow-sm'> 
                    Add
                </button> 
            </form>
        )
    }
};