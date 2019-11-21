import React from 'react';

export default class Calendar extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' +  (today.getMonth() + 1) + '-' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                <span>{this.state.date}</span>
            </div>
        );
    }
}