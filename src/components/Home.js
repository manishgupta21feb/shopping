import React from 'react';
import HomeSlider from './HomeSlider';
import ProductSlider from './ProductSlider';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSlider/>
        <ProductSlider/>
      </div>
    )
  }
}

export default Home;
