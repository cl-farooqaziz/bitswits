import React from 'react'
import Image from 'next/image'
import styles from '../styles/Videotestimonial.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import daniel from '../public/images/videotestimonials/daniel.webp'
import isabella from '../public/images/videotestimonials/isabella.webp'

const Videotestimonial = () => {
    return (

        <section className={styles.videotestimonial}>
            <Container>
                <Row>

                    <Col col={10} className={styles.danial}>


                        <div className={styles.estate}>
                            <Image src={daniel} className='img-fluid' />
                            <div className={styles.cardtxt}>
                                <div>
                                    <h6 className="f-16 f-playfair white">Daniel Gonzalez</h6>
                                    <p className="f-poppins f-14 white">Founder Capital Real Estate</p>
                                </div>
                                <div>
                                    <a href="#" className={styles.playicon} ></a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.real}>
                            <Image src={isabella} className='img-fluid' />
                            <div className={styles.cardtxt}>
                                <div>
                                    <h6 className="f-16 f-playfair white">Isabella Riccardo</h6>
                                    <p className="f-poppins f-14 white">CEO Secret Vault</p>
                                </div>
                                <div>
                                    <a href="#" className={styles.playicon} ></a>
                                </div>
                            </div>
                        </div>




                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Videotestimonial