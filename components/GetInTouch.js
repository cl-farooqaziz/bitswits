import React from 'react'
import Link from 'next/link'
import styles from '../styles/GetInTouch.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const GetInTouch = () => {
    return (
        <>
            <section className={styles.getInTouch}>
                <Container>
                    <Row>
                        <Col lg={8} xl={6}>
                            <h3 className="orange f-18 f-700 f-montserrat">Ready For The App Revolution?</h3>
                            <h2 className="white f-50 f-700  f-playfair mt-3 mb-5">
                                Let's Connect and <br />
                                Make It Happen!
                            </h2>
                            <div className={`${styles.proposalForm} mt-5 w-100`}>
                                <form className={styles.form}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="name" required />
                                        <label htmlFor="name" className={`${styles.label} form-label`}>Full Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="email" required />
                                        <label htmlFor="email" className={`${styles.label} form-label`}>Email Address</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="company" required />
                                        <label htmlFor="company" className="form-label">Company</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" className="form-control" id="phone" required />
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                    </div>
                                    <div className="input-group">
                                        <textarea className="form-control" id="message" required></textarea>
                                        <label htmlFor="message" className="form-label">Message</label>
                                    </div>
                                    <div>
                                        <button className={`${styles.gitBtn} mt-5`} type="submit">
                                            CLAIM YOUR FREE 30-MINUTE STRATEGY SESSION NOW
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GetInTouch