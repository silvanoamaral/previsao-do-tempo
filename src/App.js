import React, { Component } from 'react'
import InputCustomizado from "./components/InputCustomizado";

import './Style/Style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cidade: '',
            formErrors: null,
            previsao: null,
            result: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const fieldValue = target.type === "checkbox" ? target.checked : target.value;        

        this.setState({ 
            cidade: fieldValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var _self = this;

        const city = this.state.cidade;
        if(city === '') return;

        const search =     "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + ", ak') and u='c'";
        const searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
        const urlWeather = "https://query.yahooapis.com/v1/public/yql?q=" + search + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        fetch(urlWeather, {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Could not reach the API: " + response.statusText);
            }
        }).then(data => {
            if(data.query.results.channel) {
                const channel = data.query.results.channel;

                const result = `
                    <div class="result">
                        <p><strong>${ channel.location.city }, ${ channel.location.region } - ${ channel.location.country }</strong></p>
                        <p><strong>${ channel.item.condition.temp }°C ${ channel.item.condition.text } </strong></p>
                        <p>
                            <span class="high-low">high ${ channel.item.forecast.high } - low ${ channel.item.forecast.low }</span>
                            <span>Sensação <strong>${ channel.item.condition.code }°C</strong></span>
                        </p>
                        <p>
                            <span>Vento <strong>${ channel.wind.speed }Km/h</strong></span>
                            <span>Humidade <strong>${ channel.atmosphere.humidity }%</strong></span>
                        </p>
                    </div>
                `;
                
                //console.log(result);
                const msg = "Temperature in " + channel.location.city + " is " + data.query.results.channel.item.condition.temp + "°C";

                _self.setState({
                    formErrors: msg,
                    result: result
                });
            } else {
                throw new Error("Could not reach the API: ");
            }
              
        }).catch(function(error) {
            //console.log('Error',error);
            const msg = error.message;
            _self.setState({
                formErrors: msg
            });
        });
    }

    unescapeHTML(html) {
        var escapeEl = document.createElement('textarea');
        escapeEl.innerHTML = html;
        return escapeEl.textContent;
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Previsão do tempo</h1>
                    <div className="resultado-previsao" dangerouslySetInnerHTML={{ __html: this.state.result }} />
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
                        <input type="submit" value="Submit" className="button" className="btn btn-primary" />
                    </form>
                </div>
            </section>
        );
   }
}
export default App;