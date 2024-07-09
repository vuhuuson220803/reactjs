import React from 'react';
import '../../App.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="contact-form">
                <div className="container">
                    <div className="row contact-form-area mt-5 " data-wow-delay="0.4s">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                                <h2>Mẫu Liên Hệ</h2>
                            <div className="contact-block mt-5">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Tên" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" placeholder="Email" id="email" className="form-control" name="Email" required data-error="Please enter your email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="number" placeholder="Số Điện Thoại" id="msg_subject" className="form-control" required data-error="Please enter your phone" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Yêu Cầu" rows="5" data-error="Write your message" required></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button">
                                                <button className="btn btn-common" id="submit" type="submit">Gửi</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                                <h2>Địa Chỉ Liên Hệ</h2>
                            <div className="footer-right-area ">
                                <div className="footer-right-contact">
                                    <div className="single-contact d-flex">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <p>Ha Noi</p>
                                    </div>
                                    <div className="single-contact d-flex">
                                        <div className="contact-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div>
                                        <p><a href="/cdn-cgi/l/email-protection#b4dcd1d8d8dbf4c0dbd99ad7dbd9"><span className="__cf_email__" data-cfemail="c6aea3aaaaa986b2a9abe8a5a9ab">sv@gmail.com.vn</span></a></p>
                                        <p><a href="/cdn-cgi/l/email-protection#d9adb6b4aab8acb5b7b0bcab99beb4b8b0b5f7bab6b4"><span className="__cf_email__" data-cfemail="c3b7acaeb0a2b6afadaaa6b183a4aea2aaafeda0acae">sv@gmail.com.vn</span></a></p>
                                        </div>
                                    </div>
                                    <div className="single-contact d-flex">
                                        <div className="contact-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div>
                                        <p><a href="#">+ (00) 123 456 789</a></p>
                                        <p><a href="#">+ (00) 123 344 789</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="mt-5">
                            <div id="container-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7447.799305131142!2d105.77138191307218!3d21.036700786200985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b6163c392f%3A0x1ebf64facbb56d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaMawxqFuZyBt4bqhaQ!5e0!3m2!1svi!2s!4v1715348008714!5m2!1svi!2s" 
                            width="100%" height="500" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
