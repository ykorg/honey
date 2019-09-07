import React,{Component}from 'react';
import '../css/index.css';
import GoodsDetail from '../js/goodDetail.js';
import ConnectUs from '../js/connect.js';
import About from '../js/about.js';
import { Anchor } from 'antd';

const { Link } = Anchor;
const bgimg = require('../img/bg.webp');

class IndexPage extends Component {


  renderHead(){
    return (
    <div className="farmHead">
      <div className='headtitle'>honey farms</div>
      <div className="headline"></div> 
      {this.renderNavigation()}   
    </div> 
    );
  }
  renderNavigation(){
    return(
        <Anchor affix={false} id="navigation">
            <Link className="navigationItem" href="#navigation" title="home" />
            <Link className="navigationItem" href="#honey-introduce-id" title="honey farms" />
            <Link className="navigationItem" href="#product-introduce_id" title="products" />
            <Link className="navigationItem" href="#connect-id" title="connect" />
            <Link className="navigationItem" href="#about-id" title="About" />
        </Anchor>
    );
  }
  renderHoney(){
    var title = "Key Facts about our Manuka";
    var content = ["Manuka honey is produced by bees from the flowers (nectar) of Leptospermum species plants, native to Australia and New Zealand.",
  "Australia is home to over 80 species of Leptospermum, while New Zealand has only one species (Leptospermum scoparium), which is believed to have originated from Tasmania, Australia.",
"Since beekeeping was introduced into Australia, we have had a long history of producing Manuka honey."];


var title1 = "Manuka Health Properties";
var content1 = ["Manuka honey is one of the most famous honeys in the world because of its medicinal properties,including:",
"Antimicrobial activity – that is, the ability to kill superbugs (antibiotic‐resistant bacteria and other difficult to treat microbes) that cause serious infections",
"Wound healing and anti‐inflammatory activity."];


    return(
      <div className="honey-introduce" id="honey-introduce-id">
        <div className='honey-headtitle'>Manuka Honey</div>
        <div className='info-content'>
          {/* <p className="info-detail-left" >zuo</p> */}
          {/* <p className="info-detail-right" >you</p> */}
          {this.renderIntroduceLeftUlLi()}
          {this.renderIntroduceRightUlLi()}

        </div>
      </div>
    );
  }

  renderIntroduceLeftUlLi(){
    var title = "Manuka Health Properties";
    var content = ["Manuka honey is one of the most famous honeys in the world because of its medicinal properties,including:",
    "Antimicrobial activity – that is, the ability to kill superbugs (antibiotic‐resistant bacteria and other difficult to treat microbes) that cause serious infections",
    "Wound healing and anti‐inflammatory activity."];    
    var uls = [];
    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      var ui = <li>{element}</li>
      uls.push(ui);
    }
    return(
      <div className="info-detail-left">
        <h2 style={{'padding-left':'10px'}}>Key Facts about our Manuka</h2>
        <ul style={{'line-height':'30px'}}>
          {uls}
        </ul>
      </div>
    );
  }

  renderIntroduceRightUlLi(){
    var title = "Key Facts about our Manuka";
    var content = ["Manuka honey is produced by bees from the flowers (nectar) of Leptospermum species plants, native to Australia and New Zealand.",
  "Australia is home to over 80 species of Leptospermum, while New Zealand has only one species (Leptospermum scoparium), which is believed to have originated from Tasmania, Australia.",
"Since beekeeping was introduced into Australia, we have had a long history of producing Manuka honey."];
    var uls = [];
    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      var ui = <li>{element}</li>
      uls.push(ui);
    }
    return(
      <div className="info-detail-right">
        <h2 style={{'padding-left':'10px'}}>Key Facts about our Manuka</h2>
        <ul style={{'line-height':'30px'}}>
          {uls}
        </ul>
      </div>
    );
  }

  renderProducts(){
    var products = this.renderProductsList();
    return(
      <div className="product-introduce" id="product-introduce_id">
          <div className='honey-headtitle'>Our Products</div>
          <div className='product-introduce-subtitle'>Straight from the Farm</div>
          {products}
      </div>
    );
  }
  renderProductsList(){
    var htmls = [];
    let datas = [{'id':1,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':2,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':3,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':4,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':5,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':6,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':7,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':8,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'},
    {'id':9,'img':'img1.jpg','name':'makahoney 813_','weight':'100g'}];
    for (let i = 0; i < datas.length; i++) {
      const element = datas[i];
        var innerDiv = <GoodsDetail key={i}></GoodsDetail>
        htmls.push(innerDiv);
    }
    return (
      <div className="elementContain">{htmls}</div>
    );
  }

  renderConnectUs(){
    return(
      <ConnectUs></ConnectUs>
    );
  }

  renderAbout(){
    return(
      <About></About>
    );
  }

  render() {
    return (
      <div>
        <img className="bgimg" src={bgimg}></img>
        {this.renderHead()}
        {this.renderHoney()}
        {this.renderProducts()}
        {this.renderConnectUs()}
        {this.renderAbout()}
      </div>
    );
  }
  
  clickHead (){
      console.log('abccc');
  }
  
  
}



export default IndexPage;