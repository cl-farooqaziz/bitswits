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
        <>
            <section className={`${styles.videotestimonial}  d-lg-block d-none`}>
                <Container>
                    <Row>

                        <Col col={10} className={styles.danial}>


                            <div className={styles.estate}>
                                <Image alt="bitswits" loading="lazy" src={daniel} className='img-fluid' />
                                <div className={styles.cardtxt}>
                                    <div>
                                        <h6 className="f-16 f-playfair white">Daniel Gonzalez</h6>
                                        <p className="f-poppins f-14 white">Founder Capital Real Estate</p>
                                    </div>
                                    <div>
                                        <a href="https://player.vimeo.com/progressive_redirect/playback/810341576/rendition/1080p/file.mp4?loc=external&signature=7284fab0439363e8fc7a95f0e1d97a97be5964b2147450233e0719f1c56fef38"
                                            data-fancybox="video" className={styles.playicon}></a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.real}>
                                <Image alt="bitswits" loading="lazy" src={isabella} className='img-fluid' />
                                <div className={styles.cardtxt}>
                                    <div>
                                        <h6 className="f-16 f-playfair white">Isabella Riccardo</h6>
                                        <p className="f-poppins f-14 white">CEO Secret Vault</p>
                                    </div>
                                    <div>
                                        <a href="https://player.vimeo.com/progressive_redirect/playback/810340528/rendition/1080p/file.mp4?loc=external&signature=d37cbde3922bdb6320227624c3890f13a2a99ca8186c5ef07a77f3c5b94a272f"
                                            data-fancybox="video" className={styles.playicon}></a>
                                    </div>
                                </div>
                            </div>




                        </Col>

                    </Row>
                </Container>

                <Modal centered size="xl" show={show} onHide={closemodal} className='getmodalvideo'>
                    <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/daniel.mp4" type="video/mp4"></video> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

                </Modal>


                <Modal centered size="xl" show={show1} onHide={closemodal1} className='getmodalvideo'>
                    <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/leba.mp4" type="video/mp4"></video> <span onClick={closemodal1} className={styles.cross1}>x</span> </Modal.Body>

                </Modal>

            </section>

            <section className={`${styles.videotestimonial}  d-lg-none d-block`}>
                <Container>
                    <Row>

                        <Col col={10} className={styles.danial}>

                        
                                <div className={styles.estate}>
                                    <Image alt="bitswits" loading="lazy" src={daniel} className='img-fluid' />
                                    <div className={styles.cardtxt}>
                                        <div>
                                            <h6 className="f-16 f-playfair white">Daniel Gonzalez</h6>
                                            <p className="f-poppins f-14 white">Founder Capital Real Estate</p>
                                        </div>
                                        <div>
                                            <a href="https://player.vimeo.com/progressive_redirect/playback/810341576/rendition/1080p/file.mp4?loc=external&signature=7284fab0439363e8fc7a95f0e1d97a97be5964b2147450233e0719f1c56fef38"
                                                data-fancybox="video" className={styles.playicon}></a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.real}>
                                    <Image alt="bitswits" loading="lazy" src={isabella} className='img-fluid' />
                                    <div className={styles.cardtxt}>
                                        <div>
                                            <h6 className="f-16 f-playfair white">Isabella Riccardo</h6>
                                            <p className="f-poppins f-14 white">CEO Secret Vault</p>
                                        </div>
                                        <div>
                                            <a href="https://player.vimeo.com/progressive_redirect/playback/810340528/rendition/1080p/file.mp4?loc=external&signature=d37cbde3922bdb6320227624c3890f13a2a99ca8186c5ef07a77f3c5b94a272f"
                                                data-fancybox="video" className={styles.playicon}></a>
                                        </div>
                                    </div>
                                </div>
                     



                        </Col>

                    </Row>
                </Container>

                <Modal centered size="xl" show={show} onHide={closemodal} className='getmodalvideo'>
                    <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/daniel.mp4" type="video/mp4"></video> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

                </Modal>


                <Modal centered size="xl" show={show1} onHide={closemodal1} className='getmodalvideo'>
                    <Modal.Body>  <video controls autoPlay muted className={styles.bodyvideo} loop src="images/videotestimonials/leba.mp4" type="video/mp4"></video> <span onClick={closemodal1} className={styles.cross1}>x</span> </Modal.Body>

                </Modal>

            </section>

        </>



    )
}

export default Videotestimonial