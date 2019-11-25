import React from 'react';
import Todolist from './todolist';
export default class List extends React.Component {
    
    state = {
        tab: [
            { id: 1, contenu: 'Wake up' },
            { id: 2, contenu: 'Good morning' },
            { id: 3, contenu: 'Have a good day!' }
        ]
    }
  

    render() {
        return (
            <div>
                < Todolist todo={this.state.tab} />
            </div>




        );
    }
}  
console.log(todo);