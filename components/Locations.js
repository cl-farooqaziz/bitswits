import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Locations.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Locations = () => {
    return (
        <>
            <section className={styles.locations}>
                <div className={styles.mapVideo}>
                    <div className={`${styles.map} h-100`}>
                        <video autoPlay muted className='w-100' loop src="video.mp4" type="video/mp4"></video>
                    </div>
                </div>
                <div className={styles.upside}>
                    <Container>
                        <Row>
                            <Col lg={5} className="d-lg-block d-none"></Col>
                            <Col lg={7}>
                                <div className="locations">
                                    <p className="f-16 f-montserrat f-700 orange f-uppercase mb-0">
                                        Areas We Serve
                                    </p>
                                    <h3 className="f-50 f-playfair white f-700 mb-4">
                                        Our Locations Globally
                                    </h3>
                                    <div className="d-lg-block d-none">
                                        <Row>
                                            <Col lg={6}>
                                                <div className={`${styles.loctnDetls} ${styles.one} mb-lg-5`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        USA
                                                    </h4>
                                                    <div className={`${styles.detail} border-btm`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase orange">
                                                            Delaware
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            8 The Green STE 300, Dover DE 19901.
                                                        </p>
                                                        <a className="f-16 f-500 orange"
                                                            href="tel:+18335006007">
                                                            +1 833 500 6007
                                                        </a><br />
                                                        <a className="f-16 f-500 orange"
                                                            href="tel:+13123795987">
                                                            +1 312 379 5987
                                                        </a>
                                                    </div>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase orange">
                                                            California
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">350 South Grand Avenue, Los Angeles,
                                                            CA 90071</p>
                                                        <a className="f-16 f-500 orange"
                                                            href="tel:+13123795987">
                                                            +1 312 379 5987
                                                        </a><br />
                                                        <a className="f-16 f-500 orange"
                                                            href="tel:+18335006007">
                                                            +1 833 500 6007
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={`${styles.loctnDetls} ${styles.two}`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        UAE
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase orange">
                                                            Sharjah
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            Office #101, 32 Street, Al Mujarrah, Sharjah
                                                        </p>
                                                        <a className="f-16 f-500 orange"
                                                            href="tel:+971555031266">
                                                            +97 155 503 1266
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={`${styles.loctnDetls} ${styles.three} mb-lg-5`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        Malaysia
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase orange">
                                                            Labuan
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            13 f-500A Main Office Tower Financial Park, Labuan
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`${styles.loctnDetls} ${styles.four}`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        Pakistan
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase orange">
                                                            Karachi
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            12th Floor Caesar's Tower, Karachi, Pakistan
                                                        </p>
                                                        <a className="f-16 f-500 orange" href="tel:923468280101">
                                                            +92 346 828 0101
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-lg-none d-block">
                                        <Row className="locationSlider-newStyled">
                                            <Col lg={6}>
                                                <div className="location-details one mb-lg-5">
                                                    <h4 className="f-28 f-montserrat f-700 heading mb-2">USA</h4>
                                                    <div className={`${styles.detail} border-btm`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase">Delaware</p>
                                                        <p className="f-14 f-500 f-montserrat">8 The Green STE 300, Dover DE 19901.
                                                        </p>
                                                        <a className="f-16 f-500" href="tel:+18335006007">+1 833 500 6007</a>
                                                        <a className="f-16 f-500" href="tel:+13123795987">+1 312 379 5987</a>
                                                    </div>
                                                    <div className="detail">
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase">California</p>
                                                        <p className="f-14 f-500 f-montserrat">350 South Grand Avenue, Los Angeles,
                                                            CA 90071</p>
                                                        <a className="f-16 f-500" href="tel:+13123795987">+1 312 379 5987</a>
                                                        <a className="f-16 f-500" href="tel:+18335006007">+1 833 500 6007</a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="location-details three mb-lg-5">
                                                    <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Malaysia</h4>
                                                    <div className="detail">
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase">Labuan</p>
                                                        <p className="f-14 f-500 f-montserrat">13 f-500A Main Office Tower Financial
                                                            Park, Labuan</p>

                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="location-details two">
                                                    <h4 className="f-28 f-montserrat f-700 heading mb-2">UAE</h4>
                                                    <div className="detail">
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase">Sharjah</p>
                                                        <p className="f-14 f-500 f-montserrat">Office #101, 32 Street, Al Mujarrah,
                                                            Sharjah</p>
                                                        <a className="f-16 f-500" href="tel:+97 155 503 1266">+97 155 503 1266</a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="location-details four">
                                                    <h4 className="f-28 f-montserrat f-700 heading f-uppercase mb-2">Pakistan</h4>
                                                    <div className="detail">
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase">Karachi</p>
                                                        <p className="f-14 f-500 f-montserrat">12th Floor Caesar's Tower, Karachi,
                                                            Pakistan</p>
                                                        <a className="f-16 f-500" href="tel:+923468280101">+92 346 828 0101</a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Locations