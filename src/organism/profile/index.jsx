const Profilepage = () => {
    return (
        <div>

            <div className="section">
                <div className="container">
                    <div className="pricing">
                        <div className="pricing-header">
                            <span className="meta">META </span>Subscriptions
                        </div>
                        <div className="profileinfo">
                            <p><span>Amigo :</span> Krishna</p>
                            <p><span>Contact : </span>9182536</p>
                            <p><span>Mail_Id : </span> azazel007@outlook.com,</p>
                        </div>
                        <div className="pricing-list">
                            <div className="row">

                                <div className="pricing-box">
                                    <div className="pricing-box-header">
                                        <div className="pricing-name">
                                            Basic
                                        </div>
                                        <div className="pricing-price">
                                            Free
                                        </div>
                                    </div>
                                    <div className="pricing-box-content">

                                        <p>Swich plans anytime</p>
                                        <p><del>Free Delivery </del></p>
                                        <p><del>Bank and Sale Benifits</del></p>
                                    </div>
                                    <div className="pricing-box-action">
                                        <a href="#" className="buyLink">
                                            <span>Register now</span>
                                        </a>
                                    </div>
                                </div>


                                <div className="pricing-box hightlight">
                                    <div className="pricing-box-header">
                                        <div className="pricing-name">
                                            Pro!
                                        </div>
                                        <div className="pricing-price">
                                            &#8377;999 <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-box-content">

                                        <p>Swich plans anytime</p>
                                        <p>Free Delivery</p>
                                        <p>Bank And Early Sale Access</p>
                                    </div>
                                    <div className="pricing-box-action">
                                        <a href="#" className="buyLink">
                                            <span>Register now</span>
                                        </a>
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
export default Profilepage;