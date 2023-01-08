import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted footer" >

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block social">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div>



                        <a href="8" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/malladi-ravi-varma-63a46a216/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Varma390" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Food Recipe
                                </h6>
                                <p>
                                    Here you can manage all the recipes and can also search for the recipes that are stored
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Tehcnologies Used
                                </h6>

                                <p className="text-reset">ReactJS</p>
                                <p className="text-reset">NodeJS</p>
                                <p className="text-reset">MongoDB</p>
                                <p className="text-reset">ExpressJS</p>


                            </div>



                

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Andhra Pradesh, India</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    ravitejavarma@mail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 91 97345674</p>
                                <p><i className="fas fa-print me-3"></i> + 91 95673456</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4 last" >

                    <a className="text-reset fw-bold" href="https://github.com/Varma390">GitHub</a>
                </div>

            </footer>

        </>
    )
}

export default Footer