import React from 'react'
import './News.css'
import { FaArrowRight } from "react-icons/fa";

const News = () => {
    return (
        <section className='news'>
            <div className='container'>
                <div className="row">
                    <div className="title text-center d-flex justify-content-center px-5">
                        <div className="col-lg-6">
                            <h2>Latest News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>
                    </div>

                    <div className=" row news-text">
                    <div className="col-lg-4 col-md-3 px-0">
                        <div className="card_12 mx-2 h-100">
                            <div className="card-body">
                                <p><span>By Admin</span> | <a href="#">Snacks</a></p>
                                <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                <a href="#" className='read'>Read More <i><FaArrowRight /></i></a>
                            </div>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" className="card-img-top" alt="..." />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-3 px-0">
                        <div className="card_12 mx-2 h-100">
                            <div className="card-body">
                                <p><span>By Admin</span> | <a href="#">Food</a></p>
                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                <a href="#" className='read'>Read More <i><FaArrowRight /></i></a>
                            </div>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" className="card-img-top" alt="..." />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-3 px-0">
                        <div className="card_12 mx-2 h-100">
                            <div className="card-body">
                                <p><span>By Admin</span> | <a href="#">Snacks</a></p>
                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                <a href="#" className='read'>Read More <i><FaArrowRight /></i></a>
                            </div>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" className="card-img-top" alt="..." />
                        </div>
                    </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
