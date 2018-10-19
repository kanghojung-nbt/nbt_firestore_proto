import React, { Component } from 'react';
import './App.css';
import OrderForm from "./components/OrderForm";
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firestore from './lib/FireStore';
import StoreItemInfo from "./components/StoreItemInfo";

class App extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Header title="타임딜 상품" db={firestore}/>
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-2"></div>
                    <div className="column is-2">
                        <StoreItemInfo title="비타민C 유한양행" db={firestore}/>
                    </div>
                    <div className="column is-2">
                        <OrderForm db={firestore}/>
                    </div>
                </div>
                <MessageList db={firestore}/>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firestore}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
