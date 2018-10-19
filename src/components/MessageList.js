
import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import trim from "trim";

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };

        this.getData = this.getData.bind(this);

    }
    componentDidMount() {
        let db = this.props.db;
        db.collection("messages").onSnapshot(snapshot => {
            let that = this;
            let messages = [];
            snapshot.forEach(function(doc) {
                var message = that.getData(doc.data());
                messages.push(message);
            });
            that.setState({messages: messages});
        });

    }

    getData(values){
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                return cloned;
            })
            .value();
        return messages
    }

    render() {
        let messageNodes = this.state.messages.map((message) => {
            return (
                <div className="card">
                    <div className="card-content">
                        <Message message = {message}/>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {messageNodes}
            </div>
        );
    }
}

export default MessageList