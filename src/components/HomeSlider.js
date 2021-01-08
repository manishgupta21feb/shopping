import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Button from 'react-bootstrap/Button';

const slides = [
  {
    title: 'Quick parcel delivery, from $25',
    description: 'Normann Compenhangan - Craft salt and pepper grinder',
    btntext: 'Start Shopping',
    image: "https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide11.png?v=1585668470"
  },
  {
    title: 'Quick parcel delivery, from $25',
    description: 'Wood Minimal Office Chair Extra 40% off now',
    btntext: 'Start Shopping',
    image: "https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide12.png?v=1585668596"
  },
  {
    title: 'Quick parcel delivery, from $25',
    description: 'Everyone Talking About Sweeper and funnel',
    btntext: 'Start Shopping',
    image: "https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide13.png?v=1585906183"
  }
];

class HomeSlider extends React.Component {
  render() {
    var setting = {
      slider: 'slider',
      animateIn: 'animateIn',
      animateOut: 'animateOut'
    }
    return (
      <div>
        <Slider {...setting}>
          {slides.map((slide, index) =>
            <div key={index} className="banner-wrapper" style={{ background: `url('${slide.image}') no-repeat center center` }}>
              <div className="container">
                <h2 className="banner-text">{slide.title}</h2>
                <h3 className="banner-heading">{slide.description}</h3>
                <Button variant="primary" className="banner-btn">{slide.btntext}</Button>{' '}
              </div>
            </div>)}
        </Slider>
      </div>
    )
  }
}

export default HomeSlider;
