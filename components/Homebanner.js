import React from 'react'
import Image from 'next/image'
import styles from '../styles/Homebanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import right from '../public/images/homebanner/right-arrow.webp'
import rating from '../public/images/homebanner/rating.webp'

function Homebanner(props) {
    return (
        <>

            <div className={`${styles.herofold} ${styles.newhomepagehero}`}>
                <Container>
                    <Row className={styles.rowalign}>

                        <Col xl={8}>
                            <div>


                                {props.subtitle ?
                                    <p className="f-montserrat f-700 f-16 mb-1 black lheight24 t-justify"> {props.subtitle}</p>
                                    :
                                    ''
                                }

                                {props.subtitl2 ?
                                    <p className="f-montserrat f-700 f-20 mb-1 orange lheight24 t-justify"> {props.subtitl2}</p>
                                    :
                                    ''
                                }

                                {props.title ?
                                    <h1 className="f-60 f-playfair f-700 mb-3 black lheight70">{props.title}</h1>
                                    :
                                    ''
                                }

                                {props.subtitle3 ?
                                    <p className="f-montserrat f-700 f-14 mb-3 black lheight24 t-justify"> {props.subtitle3}</p>
                                    :
                                    ''
                                }



                                {props.text ?
                                    <p className="f-14 f-montserrat mb-2 t-justify lheight23">
                                        {props.text}
                                    </p>
                                    :
                                    ''
                                }


                                {props.text ?
                                    <p className="f-14 f-montserrat mb-3 mb-xxl-4 t-justify lheight23">
                                        {props.text2}
                                    </p>
                                    :
                                    ''
                                }

                                <Link href='#' className={`${styles.arrowBtn} btns`}>
                                    <span>Get Free <br /> Consultation </span>
                                    <Image alt="bitswits" src={right} width="50" height="21" loading="lazy" />
                                </Link>


                            </div>

                        </Col>
                        <Col xl={3}>
                            <div className="d-none d-xl-block">

                                <p className="f-16 f-montserrat f-700 t-center mb-0">With The Rating Of</p>

                                <h3 className={styles.ratingNumber}>4.9</h3>

                                <div className="stars">
                                    <Image alt="bitswits" src={rating} width="271" height="31" className="Image-fluid" loading="lazy" />
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