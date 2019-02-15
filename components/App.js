import React from 'react';
import { QuoteBox } from '../components/QuoteBox/QuoteBox';
import { donnees } from '../assets/datas.js';
import { colors } from '../assets/datas.js';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: donnees,
            colors: colors,
            currentData: {
                id: '',
                author: '',
                citation: ''
            },
            currentColor: '',
            fadeState: "",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        this.onLoad();
    }

    onLoad() {
        const randomData = Math.floor(Math.random() * this.state.data.length);
        const randomColor = Math.floor(Math.random() * this.state.colors.length);
        const data = this.state.data[randomData];
        const color = this.state.colors[randomColor];
        this.setState({
            currentData: data,
            currentColor: color,
        })
    }

    handleClick() {
        let index = this.state.currentData.id >=  this.state.data.length - 1 ? 0 : this.state.currentData.id + 1;
        const randomColor = Math.floor(Math.random() * this.state.colors.length);
        const color = this.state.colors[randomColor];
        const data = this.state.data[index];
        this.setState({
            currentData: data,
            currentColor: color,
        })
    }
 
    render() {
        
        let colorStyle = {backgroundColor: this.state.currentColor}
        
        return (
            <div className="app" style={colorStyle} >
                <div className="container">
                    <QuoteBox  color={this.state.currentColor} currentData={this.state.currentData} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}