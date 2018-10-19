import React, { Component } from 'react';
import trim from "trim";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.cnt = 0;
        this.state = {
            amount: 0
        }
        // This binding is necessary to make `this` work in the callback
        this.minusAmount = this.minusAmount.bind(this);
        this.plusAmount = this.plusAmount.bind(this);
        this.order = this.order.bind(this);
    }

    plusAmount = () => {
        const {amount} = this.state;
        this.setState({
            amount: amount + 1
        })
    }
    minusAmount = () => {
        const {amount} = this.state;
        this.setState({
            amount: amount - 1
        })
    }

    order = (e) => {
        var db = this.props.db;
        const {amount} = this.state;
        let current_deal = db.collection("time_deal").doc("current_deal");
        let datas = 0;
        var _this = this;
        current_deal.get().then(function(doc) {
            datas = doc.data()['totalOrderCnt'];
            console.log(datas);
            current_deal.update({
                totalOrderCnt: _this.state.amount + datas
            })
            .then(function (docRef) {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        });
    }

    render() {
        return (
            <div>
                <div>구매개수: {this.state.amount}</div>
                <div className="button" onClick={this.plusAmount}>+</div>
                <div className="button" onClick={this.minusAmount}>-</div>
                <div className="button" onClick={this.order}>구매하기</div>
            </div>
        );
    }
}

export default OrderForm;