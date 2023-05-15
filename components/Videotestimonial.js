import React from 'react'
import Image from 'next/image'
import styles from '../styles/Videotestimonial.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import daniel from '../public/images/videotestimonials/daniel.webp'
import isabella from '../public/images/videotestimonials/isabella.webp'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Videotestimonial = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    function modal1(e) { e.preventDefault(); setShow1(true); }
    function closemodal1() { setShow1(false); }


    return (

        <section className={`${styles.videotestimonial}`}>
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
                                    <a onClick={modal} href="#" className={styles.playicon} ></a>
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
                                    <a onClick={modal1} href="#" className={styles.playicon} ></a>
                                </div>
                            </div>
                        </div>




                    </Col>

                </Row>
            </Container>

            <Modal centered size="xl" show={show}  onHide={closemodal} className='getmodalvideo'>
                <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/daniel.mp4" type="video/mp4"></video> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

            </Modal>


            <Modal centered size="xl" show={show1}  onHide={closemodal1} className='getmodalvideo'>
                <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/leba.mp4" type="video/mp4"></video> <span onClick={closemodal1} className={styles.cross1}>x</span> </Modal.Body>

            </Modal>

        </section>




    )
}

export default Videotestimonial