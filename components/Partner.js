import React from 'react'
import styles from '@/styles/Partner.module.css'
import right from '../public/images/homebanner/right-arrow.webp'
import laptop from '../public/images/partner/laptop.webp'
import servicecard from '../public/images/partner/service-card.webp'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Partner = () => {
    return (
        <section className={styles.hearfelt}>
            <Container>
                <div className={styles.makes}>
                    <p className="f-20 orange f-montserrat f-700 mb-2">OUR HEARTFELT SERVICES</p>
                    <h2 className="f-50 f-playfair f-700 black">The Partner That Makes You A <br className="d-lg-block d-none" />
                        Shining Star!</h2>
                </div>
                <div>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.rightpadding}>
                                <h3 className="black f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" /> Application Development</h3>
                                <p className="f-14 black f-500 f-montserrat mb-4 t-justify">
                                    BitsWits mobile app developers love creating awesome mobile apps for you with all the challenges accepted. With the best Android and iOS app development, we are the perfect app development company in the USA to get your app idea off the ground!
                                </p>
                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="orange f-poppins f-600 f-capitalize">Explore more</span>
                                    <Image alt="bitswits"      src={right} width="35" height="15"  loading="lazy" />
                                </Link>
                                <div className="card-img left mt-5">
                                    <Image alt="bitswits"      src={servicecard} className="img-fluid" width="486" height="528"  loading="lazy" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className={styles.leftpadding}>
                                <h3 className="black f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" /> Game
                                    Development</h3>
                                <p className="card-pra f-14 black f-500 f-montserrat mb-4 t-justify">
                                    Our expert game developers are best when it comes to developing a concept, launching the game, and sustaining success. We strive to develop engaging gaming applications to elevate your project to its full potential - all with the utmost professionalism.
                                </p>
                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="orange f-poppins f-600 f-capitalize">Explore more</span>
                                    <Image alt="bitswits"      src={right} width="35" height="15"  loading="lazy" />
                                </Link>
                                <div className="card-img right mt-5">
                                    <Image alt="bitswits"      src={laptop} className="img-fluid" width="805" height="658"  loading="lazy" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Partner