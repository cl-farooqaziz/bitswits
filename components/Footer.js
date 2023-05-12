import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footerNav}>
                        <Row>
                            <Col lg={5} className="mb-lg-0 mb-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3>Services</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="javascript:;">iPhone App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Cross Platform App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Android App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">React Native App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Flutter App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Wearable App Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="javascript:;">UI / UX App Design</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Mobile App Development USA</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Mobile App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Web App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Game Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">2D Game Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">3D Game Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;">Blockchain Game Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className="mb-lg-0 mb-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3>On Demand Solutions</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">On Demand App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Taxi App Solution</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Food Delivering App Solutions</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Elearning App Solutions</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Lifestyle App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Healthcare App Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">On Demand eWallet App Solutions</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Fantasy Sports App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Grocery Delivery App Development</Link>
                                            </li>
                                            <li>
                                                <Link href="javascript:;" className="modal-toggle">Live Streaming App Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2}>
                                <div className={`${styles.footTitle} mb-3 pb-3 linkspost`}>
                                    <h3 className="f-montserrat f-w f-22">Useful Links</h3>
                                </div>
                                <ul className='p-0'>
                                    <li>
                                        <Link href="javascript:;">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">Works</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">Terms & Conditions</Link>
                                    </li>
                                </ul>
                                <ul className={`${styles.contacts} ${styles.myLinks}`}>
                                    <li className="mb-3">
                                        <Link href="mailto:info@bitswits.co">
                                            <img width="18" height="12" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/email-icon.webp" loading="lazy" />
                                            <span className="email f-upperCase">Contact Email</span>
                                        </Link>
                                    </li>
                                    <li className="fw-bold">
                                        <Link href="tel:13123795987">
                                            <img width="15" height="15" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/phone-icon.webp" loading="lazy" />
                                            <span className="number">+1 312 379 5987</span>
                                        </Link>
                                    </li>
                                    <li className="fw-bold">
                                        <Link href="tel:18335006007">
                                            <img width="15" height="15" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/phone-icon.webp" loading="lazy" />
                                            <span className="number">+1 833 500 6007</span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="footer--copyright new-styled">
                    <div className="container">
                        <div className="row align-items-md-center">
                            <div className="col-md-4 col-lg-3 mt-md-0 mt-4">
                                <ul className="socials">
                                    <li>
                                        <Link href="https://www.facebook.com/officialbitswits" target="_blank" rel="noopener noreferrer">
                                            <img width="30" height="30" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/fb-icon.webp" loading="lazy" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/officialbitswits/" target="_blank" rel="noopener noreferrer">
                                            <img width="30" height="30" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/insta-icon.webp" loading="lazy" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                                            <img width="30" height="30" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/twitter-icon.webp" loading="lazy" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/officialbitswits" target="_blank" rel="noopener noreferrer">
                                            <img width="30" height="30" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/linkedin-icon.webp" loading="lazy" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/@officialbitswits" target="_blank" rel="noopener noreferrer">
                                            <img width="30" height="30" alt="bitswits" className="img-fluid" src="https://bitswits.co/src/media/footer/youtube-icon.webp" loading="lazy" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-lg-6">
                                <p className="f-montserrat f-15 f-w f-500 home-color-3">
                                    Copyright © 2023 BitsWits. |
                                    <Link href="https://bhaooinc.com/" className="f-w" target="_blank">
                                        Brand Of Bhaoo Incorporation Company
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="termsMain">
                                    <ul className="termsCondition">
                                        <li><Link href="https://bitswits.co/terms-and-conditions/" className="f-w">Terms of Use</Link>
                                        </li>
                                        <li><p className="f-w px-2"> | </p></li>
                                        <li><Link href="https://bitswits.co/privacy-policy/" className="f-w">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer