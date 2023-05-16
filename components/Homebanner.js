import React from 'react'
import Image from 'next/image'
import styles from '../styles/Homebanner.module.css'
import { Container, Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import right from '../public/images/homebanner/right-arrow.webp'
import rating from '../public/images/homebanner/rating.webp'

function Homebanner() {
    return (
        <>

            <div className={`${styles.herofold} ${styles.newhomepagehero}`}>
                <Container>
                    <Row className={styles.rowalign}>

                        <Col xl={8}>
                            <div>

                                <p className="f-montserrat f-700 f-16 mb-1 black lheight24 t-justify">Elevate Your Mobile App Experience With</p>

                                <h1 className="f-60 f-playfair f-700 mb-3 black lheight70">Top Mobile App <br className="d-xl-block" /> Development Company</h1>


                                <br className="d-block d-md-none d-sm-none" />

                                <p className="f-14 f-montserrat mb-2 t-justify lheight23">
                                    At BitsWits, we are dedicated to revolutionizing the mobile technology industry as the top mobile app development company. We strive to unlock the industry's full potential by offering innovative and customized solutions for both Android and iOS platforms.
                                </p>


                                <p className="f-14 f-montserrat mb-3 mb-xxl-4 t-justify lheight23">
                                    Let us help you bring your vision to life and take your business to the next level with our industry-leading mobile app development solutions.
                                </p>


                                <Link href='#' className={`${styles.arrowBtn} btns`}>
                                    <span>Get Free <br /> Consultation </span>
                                    <Image alt="bitswits"      src={right} width="50" height="21"  loading="lazy" />
                                </Link>


                            </div>

                        </Col>
                        <Col xl={3}>
                            <div className="d-none d-xl-block">

                                <p className="f-16 f-montserrat f-700 t-center mb-0">With The Rating Of</p>

                                <h3 className={styles.ratingNumber}>4.9</h3>

                                <div className="stars">
                                    <Image alt="bitswits"      src={rating} width="271" height="31" className="Image-fluid" loading="lazy"  />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Homebanner