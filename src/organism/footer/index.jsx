const Footer = () => {
    return (

        <footer className="section">
            <div className="container">
                <div className="row">

                    <div className="content">
                        <a href="#" className="logo">
                            <i className='bx bxl-tailwind-css bx-burst' ></i><span className="main-color">META</span>
                        </a>
                        <p>
                           Meta is a website that allows you to buy and sell tangible goods, digital products or services online. Trade, be it barter exchange or buying and selling of goods and services has been prevalent for centuries.
                        </p>
                        <div className="social-list">
                            <a href="#" className="social-item">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#" className="social-item">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#" className="social-item">
                                <i className="bx bxl-instagram"></i>
                            </a>
                        </div>
                    </div>


                    <div className="row about-download">

                        <div className="content">
                            <p><b><span className="meta">Meta</span></b></p>
                            <ul className="footer-menu">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Browse</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">My profile</a></li>
                                <li><a href="#">Pricing plans</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="content">
                            <p><b><span className="meta">Download app</span></b></p>
                            <ul className="footer-menu">
                                <img src="" alt="" />
                                <li><img src="./image/google-play.png" alt="googleplay"/></li>
                                <li><img src="./image/app-store.png" alt="appstore"/></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



        </footer >



    )
}
export default Footer