import React from 'react'
import styles from '../styles/Endorsements.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import right from '../public/images/homebanner/right-arrow.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banslider1 from '../public/images/endorsements/1.webp'
import banslider2 from '../public/images/endorsements/2.webp'
import banslider3 from '../public/images/endorsements/3.webp'
import banslider4 from '../public/images/endorsements/4.webp'
import banslider5 from '../public/images/endorsements/5.webp'
import banslider6 from '../public/images/endorsements/6.webp'
import banslider7 from '../public/images/endorsements/7.webp'

const Endorsements = () => {

    let bannerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                }
            }
        ]
    };


    
    return (
        <>
            <section className={`${styles.endorsements} endor`}>
                <Container>
                    <Row className={styles.align}>

                        <Col xl={4}>
                            <div>


                                <p className="f-montserrat f-700 f-14 mb-0 grey lheight24 t-justify">Endorsements on different Platforms</p>

                                <h1 className="f-50 f-playfair f-700 mb-3 black lheight60">Awards And Recognition</h1>


                                <br className="d-block d-md-none d-sm-none" />

                                <p className="f-14 f-montserrat mb-2 lheight23 t-justify">
                                    Thriving on accelerating the path to disruption and value creation in all directions has enabled us to receive acknowledgment and recognition by leading ratings and review platforms.
                                </p>





                                <Link href='#' className={styles.arrowBtn}>
                                <span> VIEW REVIEWS </span> 
                                    <Image alt="bitswits"      src={right} width="50" height="21"  loading="lazy" />
                                </Link>


                            </div>

                        </Col>
                        <Col xl={7}>
                          
                        <div className={styles.homebannerlogo}>
                                <Slider {...bannerslider}>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider1}
                                      
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider2}
                                           
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider3}
                                            
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider4}
                                          
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider5}
                                           
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider6}
                                            
                                        />
                                    </div>
                                    <div>
                                        <Image alt="bitswits"      loading="lazy" className='img-fluid'
                                            src={banslider7}
                                           
                                        />
                                    </div>
                                </Slider>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Endorsements