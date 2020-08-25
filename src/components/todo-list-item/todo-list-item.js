import React, {Component} from 'react';

import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };
  
  //Если новое состояние зависит от предыдущего - нужно делать через функцию, а не изменять объект напрямую.
  //Иначе в некоторых случаях Реакт может не успеть поменять наш state и он будет не таким, какой ожидался.
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }    
    });
  };

  //Вариант с деструктуризацией
  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    });
  };
  
  render () {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}