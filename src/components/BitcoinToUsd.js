import React, {Component} from "react";
import axios from "axios"

export default class Header extends Component {
    constructor () {
        super()
        this.state = { 
            bitcoin: '', 
            bitcoinToUsdRatio: 0,
            conertedValue: null
        };

        this.convertToUsd = this.convertToUsd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async convertToUsd () {
        const {data} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        this.state.bitcoinToUsdRatio = data.bpi.USD.rate_float / 1 // converting string to number 
        this.state.conertedValue = this.state.bitcoin * this.state.bitcoinToUsdRatio
        this.setState(this.state) // triggers the rerender
    }

    handleChange (event){
        this.setState({bitcoin: event.target.value});
    }

    render() {
        return (
            <div className="currency-box-container">
                <div className="currency-box bitcoin-to-usd">
                    <div className="logo-container">
                        <img className="logo" src="https://bitcoin.org/img/icons/opengraph.png?1600258243"/>
                    </div>
                    <div className="calc-container">
                        <div className="calc">
                            <input onChange={this.handleChange} type="number"/>
                            <button onClick={this.convertToUsd} >Convert to USD</button>
                        </div>
                         <div className="result">
                            Rate: {this.state.conertedValue && <span>${this.state.conertedValue}</span>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
