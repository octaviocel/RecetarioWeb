import React from "react";

import Product1 from "../../assets/img/product/product50.jpg";
import Product2 from "../../assets/img/product/product51.jpg";
import Product3 from "../../assets/img/product/product52.jpg";
import Product4 from "../../assets/img/product/product53.jpg";
import Product5 from "../../assets/img/product/product54.jpg";
import Product6 from "../../assets/img/product/product55.jpg";
import Product7 from "../../assets/img/product/product56.jpg";
import Product8 from "../../assets/img/product/product57.jpg";
import Product9 from "../../assets/img/product/product58.jpg";
import Product10 from "../../assets/img/product/product59.jpg";
import Product11 from "../../assets/img/product/product17.jpg";
import Product12 from "../../assets/img/product/product18.jpg";
import Product13 from "../../assets/img/product/product19.jpg";

import Latest1 from "../../assets/img/product/latest1.jpg";
import Latest2 from "../../assets/img/product/latest2.jpg";
import Latest3 from "../../assets/img/product/latest3.jpg";
import Latest4 from "../../assets/img/product/latest4.jpg";

import Figure1 from "../../assets/img/figure/figure4.jpg";

import Social1 from "../../assets/img/social-figure/social-figure9.jpg";
import Social2 from "../../assets/img/social-figure/social-figure10.jpg";
import Social3 from "../../assets/img/social-figure/social-figure11.jpg";
import Social4 from "../../assets/img/social-figure/social-figure12.jpg";
import Social5 from "../../assets/img/social-figure/social-figure13.jpg";
import Social6 from "../../assets/img/social-figure/social-figure14.jpg";
import Social7 from "../../assets/img/social-figure/social-figure14.jpg";
import Social8 from "../../assets/img/social-figure/social-figure15.jpg";
import Social9 from "../../assets/img/social-figure/social-figure16.jpg";

const Recipes = () => {
  return (
    <section className="all-recipes-page-wrap padding-top-80 padding-bottom-22">
      <div className="container">
        <div className="row gutters-60">
          <div className="col-lg-8">
            <div className="adv-search-wrap">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author Name or Recipe Search . . ."
                />
                <div className="btn-group">
                  <div className="input-group-btn">
                    <button
                      type="button"
                      id="adv-serch"
                      className="btn-adv-serch"
                    >
                      <i className="icon-plus flaticon-add-plus-button" />
                      <i className="icon-minus fas fa-minus" />
                      Advanced Search
                    </button>
                  </div>
                  <div className="input-group-btn">
                    <button type="submit" className="btn-search">
                      <i className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="advance-search-form">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="item-title">BY CATEGORIES</h3>
                    <ul className="search-items">
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox101" type="checkbox" />
                          <label htmlFor="checkbox101">Baking</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox102" type="checkbox" />
                          <label htmlFor="checkbox102">Dinner</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox103" type="checkbox" />
                          <label htmlFor="checkbox103">Lunch</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox104" type="checkbox" />
                          <label htmlFor="checkbox104">Sea Food</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox105" type="checkbox" />
                          <label htmlFor="checkbox105">Sweets</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="item-title">BY INGREDIENTS</h3>
                    <ul className="search-items">
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox106" type="checkbox" />
                          <label htmlFor="checkbox106">Oil</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox107" type="checkbox" />
                          <label htmlFor="checkbox107">Vegitables</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox108" type="checkbox" />
                          <label htmlFor="checkbox108">Fish</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox109" type="checkbox" />
                          <label htmlFor="checkbox109">White Salt</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox110" type="checkbox" />
                          <label htmlFor="checkbox110">Pizza</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox111" type="checkbox" />
                          <label htmlFor="checkbox111">Meat</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox112" type="checkbox" />
                          <label htmlFor="checkbox112">Juice</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="item-title">BY CUISINE</h3>
                    <ul className="search-items">
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox113" type="checkbox" />
                          <label htmlFor="checkbox113">Indian</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox114" type="checkbox" />
                          <label htmlFor="checkbox114">Italian</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox115" type="checkbox" />
                          <label htmlFor="checkbox115">Maxican</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox116" type="checkbox" />
                          <label htmlFor="checkbox116">Bengali</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox117" type="checkbox" />
                          <label htmlFor="checkbox117">Franch</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="item-title">BY METHOD</h3>
                    <ul className="search-items">
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox118" type="checkbox" />
                          <label htmlFor="checkbox118">Baking</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox119" type="checkbox" />
                          <label htmlFor="checkbox119">Freezing</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox120" type="checkbox" />
                          <label htmlFor="checkbox120">Frying</label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox121" type="checkbox" />
                          <label htmlFor="checkbox121">Grilling</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product1} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product2} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product3} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product4} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product5} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product6} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product7} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product8} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product9} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="product-box-layout1">
                  <figure className="item-figure">
                    <a href="single-recipe1.html">
                      <img src={Product10} alt="Product" />
                    </a>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title">CHICKEN</span>
                    <h3 className="item-title">
                      <a href="single-recipe1.html">
                        Tomatoes Stuffed with Foie and Chanterelles
                      </a>
                    </h3>
                    <ul className="item-rating">
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-fill">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-empty">
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          9<span> / 10</span>
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      More off this less hello salamander lied porpoise much
                      over tightly circa outside crud mightily rigorouse.{" "}
                    </p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          <i className="fas fa-clock" />
                          15 Mins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-user" />
                          by <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
            <div className="widget">
              <div className="section-heading heading-dark">
                <h3 className="item-heading">&Uacute;LITMAS RECETAS</h3>
              </div>
              <div className="widget-latest">
                <ul className="block-list">
                  <li className="single-item">
                    <div className="item-img">
                      <a href="#">
                        <img src={Latest1} alt="Post" />
                      </a>
                      <div className="count-number">1</div>
                    </div>
                    <div className="item-content">
                      <div className="item-ctg">DESERT</div>
                      <h4 className="item-title">
                        <a href="#">
                          Salami Oven Roasted are Mozzarella Oelette
                        </a>
                      </h4>
                      <div className="item-post-by">
                        <a href="single-blog.html">
                          <i className="fas fa-user" />
                          <span>by</span>
                          John Martin
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="single-item">
                    <div className="item-img">
                      <a href="#">
                        <img src={Latest2} alt="Post" />
                      </a>
                      <div className="count-number">2</div>
                    </div>
                    <div className="item-content">
                      <div className="item-ctg">DESERT</div>
                      <h4 className="item-title">
                        <a href="#">
                          Salami Oven Roasted are Mozzarella Oelette
                        </a>
                      </h4>
                      <div className="item-post-by">
                        <a href="single-blog.html">
                          <i className="fas fa-user" />
                          <span>by</span>
                          John Martin
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="single-item">
                    <div className="item-img">
                      <a href="#">
                        <img src={Latest3} alt="Post" />
                      </a>
                      <div className="count-number">3</div>
                    </div>
                    <div className="item-content">
                      <div className="item-ctg">DESERT</div>
                      <h4 className="item-title">
                        <a href="#">
                          Salami Oven Roasted are Mozzarella Oelette
                        </a>
                      </h4>
                      <div className="item-post-by">
                        <a href="single-blog.html">
                          <i className="fas fa-user" />
                          <span>by</span>
                          John Martin
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="single-item">
                    <div className="item-img">
                      <a href="#">
                        <img src={Latest4} alt="Post" />
                      </a>
                      <div className="count-number">4</div>
                    </div>
                    <div className="item-content">
                      <div className="item-ctg">DESERT</div>
                      <h4 className="item-title">
                        <a href="#">
                          Salami Oven Roasted are Mozzarella Oelette
                        </a>
                      </h4>
                      <div className="item-post-by">
                        <a href="single-blog.html">
                          <i className="fas fa-user" />
                          <span>by</span>
                          John Martin
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget">
              <div className="widget-ad">
                <a href="#">
                  <img src={Figure1} alt="Ad" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="widget">
              <div className="section-heading heading-dark">
                <h3 className="item-heading">RECOMENDACI&Oacute;N</h3>
              </div>
              <div className="widget-featured-feed">
                <div
                  className="rc-carousel nav-control-layout1"
                  data-loop="true"
                  data-items={3}
                  data-margin={5}
                  data-autoplay="true"
                  data-autoplay-timeout={5000}
                  data-smart-speed={700}
                  data-dots="false"
                  data-nav="true"
                  data-nav-speed="false"
                  data-r-x-small={1}
                  data-r-x-small-nav="true"
                  data-r-x-small-dots="false"
                  data-r-x-medium={1}
                  data-r-x-medium-nav="true"
                  data-r-x-medium-dots="false"
                  data-r-small={1}
                  data-r-small-nav="true"
                  data-r-small-dots="false"
                  data-r-medium={1}
                  data-r-medium-nav="true"
                  data-r-medium-dots="false"
                  data-r-large={1}
                  data-r-large-nav="true"
                  data-r-large-dots="false"
                  data-r-extra-large={1}
                  data-r-extra-large-nav="true"
                  data-r-extra-large-dots="false"
                >
                  <div className="featured-box-layout1">
                    <div className="item-img">
                      <img src={Product11} alt="Brand" className="img-fluid" />
                    </div>
                    <div className="item-content">
                      <span className="ctg-name">BREAKFAST</span>
                      <h4 className="item-title">
                        <a href="single-recipe1.html">Baked Garlic Prawn</a>
                      </h4>
                      <p>
                        Definitiones noel ei verear intelle gatpri civibus
                        consequat area refund efficiantue.
                      </p>
                    </div>
                  </div>
                  <div className="featured-box-layout1">
                    <div className="item-img">
                      <img src={Product12} alt="Brand" className="img-fluid" />
                    </div>
                    <div className="item-content">
                      <span className="ctg-name">DINNER</span>
                      <h4 className="item-title">
                        <a href="single-recipe1.html">Baked Garlic Prawn</a>
                      </h4>
                      <p>
                        Definitiones noel ei verear intelle gatpri civibus
                        consequat area refund efficiantue.
                      </p>
                    </div>
                  </div>
                  <div className="featured-box-layout1">
                    <div className="item-img">
                      <img src={Product13} alt="Brand" className="img-fluid" />
                    </div>
                    <div className="item-content">
                      <span className="ctg-name">SALAD</span>
                      <h4 className="item-title">
                        <a href="single-recipe1.html">Baked Garlic Prawn</a>
                      </h4>
                      <p>
                        Definitiones noel ei verear intelle gatpri civibus
                        consequat area refund efficiantue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="section-heading heading-dark">
                <h3 className="item-heading">INSTAGRAM</h3>
              </div>
              <div className="widget-instagram">
                <ul>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social1}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social2}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social3}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social4}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social5}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social6}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social7}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social8}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-box">
                      <img
                        src={Social9}
                        alt="Social Figure"
                        className="img-fluid"
                      />
                      <a href="#" className="item-icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget">
              <div className="section-heading heading-dark">
                <h3 className="item-heading">TAGS POPULARES</h3>
              </div>
              <div className="widget-tag">
                <ul>
                  <li>
                    <a href="#">DESERT</a>
                  </li>
                  <li>
                    <a href="#">CAKE</a>
                  </li>
                  <li>
                    <a href="#">BREAKFAST</a>
                  </li>
                  <li>
                    <a href="#">BURGER</a>
                  </li>
                  <li>
                    <a href="#">DINNER</a>
                  </li>
                  <li>
                    <a href="#">PIZZA</a>
                  </li>
                  <li>
                    <a href="#">SEA FOOD</a>
                  </li>
                  <li>
                    <a href="#">SALAD</a>
                  </li>
                  <li>
                    <a href="#">JUICE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
