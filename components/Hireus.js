import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Hireus.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import team1 from '../public/images/hire/1.webp'
import team2 from '../public/images/hire/2.webp'
import team3 from '../public/images/hire/3.webp'
import team4 from '../public/images/hire/4.webp'
import team5 from '../public/images/hire/5.webp'
import team6 from '../public/images/hire/6.webp'
import team7 from '../public/images/hire/7.webp'
import team8 from '../public/images/hire/8.webp'
import team9 from '../public/images/hire/9.webp'

const Hireus = () => {

    let teamSlider = {
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.hireUs}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className="white f-20 f-700 f-montserrat">WHY HIRE US?</h3>
                            <h2 className="g-color f-50 f-700  f-playfair mt-3">
                                What Makes Bitswits The Most <br />
                                Recommended Mobile App <br /> Development Company?
                            </h2>
                            <p className="black f-poppins text-center f-14 f-400 t-justify mt-3 mb-5">
                                As the leading mobile app development agency, we've gathered top-notch resources to create exceptional solutions for mobile applications. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to instantly provide unparalleled solutions to our valued clients.
                            </p>
                            <Link href='#' className={`${styles.btnHire}`}>
                                Get Free Consultation
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.team} mt-5`}>
                <Row className={styles.teamRow}>
                    <Col lg={12}>
                        <Slider {...teamSlider} className='mt-3'>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team1}
                                   
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Skilled Team</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team2}
                                    
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Guaranteed <br /> Innovation</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team3}
                                    
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Result-Driven <br /> Approach</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team4}
                               
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Quality & Security</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team5}
                             
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Increase ROI</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team6}
                              
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Non-Disclosure <br /> Agreement</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team7}
                                  
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>In-Depth Domain <br /> Knowledge</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team8}
                                  
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Integrity <br /> Transparency</p>
                            </div>
                            <div className={styles.slideBox}>
                                <Image alt="bitswits"      className='img-fluid mx-auto'
                                    src={team9}
                                   
                                />
                                <p className='f-14 f-500 f-montserrat black mb-0 mt-2'>Quick and Easy  <br /> Communication</p>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Hireus