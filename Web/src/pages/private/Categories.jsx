import React from "react";

import I1 from "../../assets/img/product/product45.jpg";
import I2 from "../../assets/img/product/product47.jpg";
import I3 from "../../assets/img/product/product48.jpg";
import I4 from "../../assets/img/product/product38.jpg";
import I5 from "../../assets/img/product/product39.jpg";
import I6 from "../../assets/img/product/product40.jpg";

const Categories = () => {
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
                <h1>Categor&iacute;as</h1>
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
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I1} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Bebidas</a>
                  </h3>
                  <span className="sub-title"> 54 Recetas</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="category-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I2} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Postres</a>
                  </h3>
                  <span className="sub-title"> 32 Recetas</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="category-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I3} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Agridulce</a>
                  </h3>
                  <span className="sub-title"> 46 Recetas</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="category-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I4} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Ensaladas</a>
                  </h3>
                  <span className="sub-title"> 82 Recetas</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="category-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I5} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Gourmet</a>
                  </h3>
                  <span className="sub-title"> 94 Recetas</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="category-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img src={I6} alt="Product" />
                  </a>
                </figure>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-recipe1.html">Pastas</a>
                  </h3>
                  <span className="sub-title"> 25 Recetas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
