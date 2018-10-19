// Message.js

import React, {Component} from 'react';

class StoreItemInfo extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img height="250px" src="http://static.chemistwarehouse.com.au/ams/media/pi/81858/2DF_800.jpg"/>
            </div>
        )
    }
}
export default StoreItemInfo