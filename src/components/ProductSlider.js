import React from 'react';
import product1 from '../assets/images/product1.jpg';

class ProductSlider extends React.Component {
  render() {
    return (
      <div className="product-slider-wrapper">
        <div className="container">
          <h2 className="product-slider-heading">Top Offers On</h2>
          <div className="row">
            <div className="col-sm-3">
              <div className="product-box">
                <div className="product">
                  <div className="product-img">
                    <div className="product-img-box">
                      <img src={product1} alt="product" />
                    </div>
                    <div className="product-action">
                      <ul>
                        <li><span className="icon-cart"></span></li>
                        <li><span className="icon-zoom-in"></span></li>
                        <li><span className="icon-heart"></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Blue Dress For Woman</h4>
                    <div className="product-price">
                      <span className="price">$45.00</span>
                      <del>$55.25</del>
                      <span className="on-sale">35% Off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSlider;
