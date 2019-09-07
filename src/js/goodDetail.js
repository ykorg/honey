import React,{Component}from 'react';
import '../css/index.css';

const logo = require('../img/honey2.webp');

class IndexPage extends Component{
    render(){
        return (
            <div className="element element13">
                <span className="goodsDetailTitle">Manuka Honey MGO 830+ 500g</span>
                <img className="goodsDetailImg" src={logo}></img>
            </div>
        );
    }
}

export default IndexPage;