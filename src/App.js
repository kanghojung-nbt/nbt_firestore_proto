import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderForm from "./components/OrderForm";
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
// import firebase from 'firebase';
import firestore from './lib/FireStore';

class App extends Component {


    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="container">
            <Header title="경매 상품" db={firestore}/>
            <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-2"></div>
                <div className="column is-4">
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
