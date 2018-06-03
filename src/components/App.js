import React, { Component } from 'react';
import ListSuggestions from './list_suggestions';
import 'bootstrap/dist/css/bootstrap.css';

export const ROOT_URL = 'http://www.omdbapi.com/?';
export const API_KEY = 'apikey=192c9fa9';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: [],
            iconName: 'search',
            isSuggestion: false
        };
    }

    clearSuggestions() {
        this.setState({
            suggestions: [],
            iconName: 'search',
            isSuggestion: false
        })
    }

    highlight(data, value) {
        const valueRegex = new RegExp(value, 'i');
        const valueLength = value.length;
        const newData = data.map((item) => {
            let str = item.Title;
            const valueStartPoint = str.search(valueRegex);
            str = str.slice(0, valueStartPoint) +'<b>'+ str.slice(valueStartPoint, (valueStartPoint +valueLength))+'</b>'+ str.slice((valueStartPoint +valueLength), -1);
            item.Title = str;
            return item;
        })

        return newData;
    }

    getSuggestions(value) {
        const currentView = this;
        fetch(`${ROOT_URL}s=${value}&${API_KEY}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if(data.Response == "True") {
                    const withHighlight = currentView.highlight(data.Search, value);
                    currentView.setState({
                        suggestions: withHighlight
                    })
                    console.log(currentView.state);
                }
            })
    }

    render() {
        return (
            <div className={this.state.isSuggestion ? "row suggestion-wrapper suggestion-active": "row suggestion-wrapper"}>
                <div className="col-md-12">
                    <div className="search-area">
                        <div className="search-bar">
                            <input type="text"
                                value={this.state.value}
                                onChange={(event) => this.onInputChange(event.target.value)}
                                className="form-control"
                                placeholder="Bulmak istediğiniz filmin adını yazınız"
                            />
                            <i className="material-icons">{this.state.iconName}</i>
                        </div>
                        <div className="suggestion">
                            <ListSuggestions suggestions={this.state.suggestions} where="search" searchTerm={this.state.value} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onInputChange(value) {
        this.setState({
            value: value,
            iconName: 'arrow_forward',
            isSuggestion: true
        });   

        this.getSuggestions(value);

        if(value.length == 0) {
            this.clearSuggestions();
        }
    }
}

export default App;
