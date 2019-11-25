import React from 'react';
const Todolist = ({ todo }) => {
    const newtableau = todo.map((index) => {
        return (
            <div>
                <p>{index.contenu}</p>
            </div>
        )
    });

    return (<div>
        {newtableau}
    </div>

    );
}
export default Todolist;
