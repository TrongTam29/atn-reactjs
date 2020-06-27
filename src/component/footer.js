import React, { Component } from 'react'

//css
import "../Css/page/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">ATN is a Vietnamese company which is selling toys to teenagers in many provinces all over Vietnam. The company has the revenue over 500.000 dollars/year.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <p>Assembly Logo</p>
                                <p>Control Toys</p>
                                <p>Creative toys</p>

                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Contact Us</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">Facebook</a></li>
                                <li><a href="http://scanfcode.com/contact/">Youtube</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Instagram</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Zalo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
