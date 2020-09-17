import React, {Component} from "react";
import {numm} from "../lib/Utils";
import ConnectButton from "./ConnectButton";
import GlobalStats from "./GlobalStats";
import BorrowLimit from "./BorrowLimit";
import BitcoinToUsd from "./BitcoinToUsd"

export default class Header extends Component {
    render() {

        const {info, onConnect} = this.props;

        return (
            <div className="top-panel">
                <div className="container">
                    <div className="split title-bar">
                        <h1>#MakerDAO</h1>
                        <ConnectButton onConnect={onConnect} />
                    </div>
                    <div className="btu-container">
                        <div className="btu-column">
                            <BitcoinToUsd/>
                        </div>
                    </div>
                    {info &&
                    <div className="header-stats split">
                        <GlobalStats userInfo={info} />
                        <BorrowLimit userInfo={info} />
                    </div>
                    }
                </div>
            </div>
        )
    }
}
