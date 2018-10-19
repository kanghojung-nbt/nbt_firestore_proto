// Header.js

import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            extra_amount: 0
        };
    }

    componentDidMount() {
        let db = this.props.db;

        let current_deal = db.collection("time_deal").doc("current_deal");
        let datas = 0;
        var _this = this;

        current_deal.onSnapshot(snapshot => {
            var totalOrderCnt = snapshot.data()['totalOrderCnt'];
            var limitCnt = snapshot.data()['limitCnt'];
            var extra_amount = limitCnt - totalOrderCnt
            this.setState({extra_amount: extra_amount});
        });

    }

    render(){
        return (
            <div className="container">
                <div className="columns notification">
                    <div className="column is-3"></div>
                    <div className="column is-3">{this.props.title}</div>
                    <div className="column is-6"> 잔여 수량: {this.state.extra_amount}</div>
                </div>
                <div className="columns section"></div>
            </div>
        )
    }
}
export default Header