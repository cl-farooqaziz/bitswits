import React from 'react'
import Link from 'next/link'
import styles from '../styles/Consultation.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Consultation = () => {
    return (
        <>
            <section className={styles.consult}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className="orange f-18 f-700 f-montserrat">GET A FREE CONSULTATION</h3>
                            <h2 className="white f-50 f-700  f-playfair mt-3 mb-5">
                                Looking For Expert Guidance On <br />
                                Your Mobile App Development <br /> Project?
                            </h2>
                            <Link href='#' className={`${styles.btnConslt}`}>
                                CLAIM YOUR COMPLIMENTARY CONSULTANCY SESSION TODAY
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Consultation