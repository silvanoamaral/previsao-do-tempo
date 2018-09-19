import React, { Component } from 'react'
import InputCustomizado from "./components/InputCustomizado";

import './Style/Style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cidade: '',
            formErrors: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const fieldValue = target.type === "checkbox" ? target.checked : target.value;        

        this.setState({ 
            'cidade': fieldValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const city = this.state.cidade;
        if(city === '') return;

        const search =     "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + ", ak') and u='c'";
        const searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
        const urlWeather = "https://query.yahooapis.com/v1/public/yql?q=" + search + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        fetch(urlWeather, {
            method: "GET"
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log(data);
            console.info("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
        }).catch(function(error) {
            console.error(error);
            this.state.formErrors = error.mesage;
        });
    }

    render() {
        return (
            <div>
                <h1>Previsão do tempo ;)</h1>
                <form onSubmit={ this.handleSubmit } autoComplete="off">
                    <InputCustomizado 
                        type = "text" 
                        id = "cidade" 
                        name = "cidade" 
                        label = ""
                        placeholder= "Insira aqui o nome da cidade"
                        value = { this.state.cidade } 
                        data = { this.state.formErrors } 
                        onChange = { this.handleChange }
                    />
                    <input type="submit" value="Submit" className="button" />
                </form>
            </div>
        );
   }
}
export default App;