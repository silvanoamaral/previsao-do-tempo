import React, { Component } from 'react'

export default class InputCustomizado extends Component {

    render() {
        return(
            <div className="field">
                <label htmlFor={ this.props.id }>{ this.props.label }</label>               
                <input id={ this.props.id } type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } value={ this.props.value } onChange={ this.props.onChange } />
                <span className="error-message">{ this.props.data }</span>
            </div>
        );
    }
}