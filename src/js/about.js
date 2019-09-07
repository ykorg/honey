import React,{Component}from 'react'; 

const honey =require('../img/bee.webp');

class About extends Component{
    render(){
        return (
            <div className="about" id="about-id">
                <img className="about-img" src={honey}></img>
                <h1>About Our Farm</h1>
                <p className="about-text">Get to know all about NovaFarms - what we do, our mission and our history. </p>
                <p className="about-text"> NovaFarms is a large Australian Manuka Honey supplier based in Adelaide, South Australia.</p>

                <p className="about-text">At NovaFarms we feel incredibly lucky that we get to do what we love. For more information, get in touch!</p>

                <p className="about-text">Email:  honey@novafarms.com.au</p>
                <button className='about-button'>get in touch</button>
                <p className='about-bottom'>©2019 by NovaFarms</p>
            </div>
        );
    }
}

export default About;