import React from 'react'
import styles from '../styles/Locations.module.css'

const Locations = () => {
    return (
        <div className={styles.locations}>
            <div className={styles.mapVideo}>
                <div className="map h-100">
                    <video autoPlay muted className='w-100' loop src="video.mp4" type="video/mp4"></video>
                </div>
            </div>
            <div className={styles.upside}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 d-lg-block d-none"></div>
                <div className="col-lg-7">
                    <div className="locations">
                        <p className="f-18  f-montserrat f-700 mb-xxl-5">Areas We Serve</p>
                        <h3 className="f-50 mb-4 mb-xxl-5">Our Locations Globally</h3>
                        <div className="d-lg-block d-none">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="location-details one mb-lg-5">
                                        <h4 className="f-28 f-montserrat f-700 heading mb-2">USA</h4>
                                        <div className="detail border-btm-dg">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Delaware</p>
                                            <p className="f-14 f-500 f-montserrat">8 The Green STE 300, Dover DE 19901.
                                            </p>
                                            <a className="f-16 f-p f-500" href="tel:+18335006007">+1 833 500 6007</a><br/>
                                            <a className="f-16 f-p f-500" href="tel:+13123795987">+1 312 379 5987</a>
                                        </div>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">California</p>
                                            <p className="f-14 f-500 f-montserrat">350 South Grand Avenue, Los Angeles,
                                                CA 90071</p>
                                            <a className="f-16 f-p f-500" href="tel:+13123795987">+1 312 379 5987</a><br/>
                                            <a className="f-16 f-p f-500" href="tel:+18335006007">+1 833 500 6007</a>
                                        </div>
                                    </div>
                                    <div className="location-details two">
                                        <h4 className="f-28 f-montserrat f-700 heading mb-2">UAE</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Sharjah</p>
                                            <p className="f-14 f-500 f-montserrat">Office #101, 32 Street, Al Mujarrah,
                                                Sharjah</p>
                                            <a className="f-16 f-p f-500" href="tel:+971555031266">+97 155 503 1266</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="location-details three mb-lg-5">
                                        <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Malaysia</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Labuan</p>
                                            <p className="f-14 f-500">13 f-500A Main Office Tower Financial Park, Labuan
                                            </p>
                                        
                                        </div>
                                    </div>
                                    <div className="location-details four">
                                        <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Pakistan</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Karachi</p>
                                            <p className="f-14 f-500 f-montserrat">12th Floor Caesar's Tower, Karachi,
                                                Pakistan</p>
                                            <a className="f-16 f-p f-500" href="tel:923468280101">+92 346 828 0101</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-none d-block">
                            <div className="row locationSlider-newStyled">
                                <div className="col-lg-6">
                                    <div className="location-details one mb-lg-5">
                                        <h4 className="f-28 f-montserrat f-700 heading mb-2">USA</h4>
                                        <div className="detail border-btm-dg">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Delaware</p>
                                            <p className="f-14 f-500 f-montserrat">8 The Green STE 300, Dover DE 19901.
                                            </p>
                                            <a className="f-16 f-p f-500" href="tel:+18335006007">+1 833 500 6007</a>
                                            <a className="f-16 f-p f-500" href="tel:+13123795987">+1 312 379 5987</a>
                                        </div>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">California</p>
                                            <p className="f-14 f-500 f-montserrat">350 South Grand Avenue, Los Angeles,
                                                CA 90071</p>
                                            <a className="f-16 f-p f-500" href="tel:+13123795987">+1 312 379 5987</a>
                                            <a className="f-16 f-p f-500" href="tel:+18335006007">+1 833 500 6007</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="location-details three mb-lg-5">
                                        <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Malaysia</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Labuan</p>
                                            <p className="f-14 f-500 f-montserrat">13 f-500A Main Office Tower Financial
                                                Park, Labuan</p>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="location-details two">
                                        <h4 className="f-28 f-montserrat f-700 heading mb-2">UAE</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Sharjah</p>
                                            <p className="f-14 f-500 f-montserrat">Office #101, 32 Street, Al Mujarrah,
                                                Sharjah</p>
                                            <a className="f-16 f-p f-500" href="tel:+97 155 503 1266">+97 155 503 1266</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="location-details four">
                                        <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Pakistan</h4>
                                        <div className="detail">
                                            <p className="f-18 f-p f-700 f-montserrat mb-1 f-uppercase">Karachi</p>
                                            <p className="f-14 f-500 f-montserrat">12th Floor Caesar's Tower, Karachi,
                                                Pakistan</p>
                                            <a className="f-16 f-p f-500" href="tel:+923468280101">+92 346 828 0101</a>
                                        </div>
                                    </div>
                                </div>
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

export default Locations