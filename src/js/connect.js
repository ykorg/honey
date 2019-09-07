import React, { Component } from 'react';
import { Input  } from 'antd';
const { TextArea } = Input;
class ConnectUs extends Component {

    render() {
       return (
       <div className="connect" id="connect-id"> 
       <div className="connect-form">
            <div className="connect-headtitle">Come on Down to the Farm!</div>
            <div  className="connect-input-container">
                <Input placeholder="Basic usage" />
                <Input placeholder="Basic usage" />
            </div>
            <div className="connect-input-container1"><Input  placeholder="Basic usage" /></div>
            <div className="connect-input-container2">
                <TextArea
                    placeholder="Controlled autosize"
                    autosize={{ minRows: 3, maxRows: 5 }}
                />
            </div>
        </div>
        </div>
       )
    }
}

export default ConnectUs;