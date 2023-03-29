import React from "react";

// import Image from "../../assets/img/slider/product/product29.jpg";
// import Image2 from "../../assets/img/slider/product/product30.jpg";
// import Image3 from "../../assets/img/slider/product/product31.jpg";

import I1 from '../../assets/img/product/product29.jpg';
import I2 from '../../assets/img/product/product30.jpg';
import I3 from '../../assets/img/product/product31.jpg';
import I4 from '../../assets/img/product/product32.jpg';
import I5 from '../../assets/img/product/product33.jpg';
import I6 from '../../assets/img/product/product35.jpg';
import I7 from '../../assets/img/product/product35.jpg';
import I8 from '../../assets/img/product/product36.jpg';
import I9 from '../../assets/img/product/product37.jpg';
import I10 from '../../assets/img/product/product38.jpg';
import I11 from '../../assets/img/product/product39.jpg';
import I12 from '../../assets/img/product/product40.jpg';




const Communities = () => {
  return (
    <>
      <section
        className="inner-page-banner bg-common"
        data-bg-image="img/figure/inner-page-banner1.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Comunidades</h1>
                {/* <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>/Categories</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category-page-wrap padding-top-80 padding-bottom-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I1}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Veganos</a></h3>
                                <span className="sub-title"> 15 Recetas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I2}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Diabetica</a></h3>
                                <span className="sub-title"> 10 Recetas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I3}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Carnivoros</a></h3>
                                <span className="sub-title"> 20 Recetas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I4}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Sin Gluten</a></h3>
                                <span className="sub-title"> 14 Recetas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I5}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Flexitariana</a></h3>
                                <span className="sub-title"> 14 Recetas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="category-box-layout1">
                            <figure className="item-figure"><a href="single-recipe1.html"><img src={I6}
                                        alt="Product" /></a></figure>
                            <div className="item-content">
                                <h3 className="item-title"><a href="single-recipe1.html">Cetogénica</a></h3>
                                <span className="sub-title"> 14 Recetas</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default Communities;
