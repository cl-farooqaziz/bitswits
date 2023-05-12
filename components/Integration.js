import React from 'react'
import styles from '../styles/Integration.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import rating from '../public/images/integration/integration-logos.webp'
import Image from 'next/image'
import Link from 'next/link'
import right from '../public/images/homebanner/right-arrow.webp'
const Integration = () => {
    return (
        <section className={styles.Integration}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3 className="orange f-20 f-700 f-montserrat">INTEGRATIONS THAT WE OFFER</h3>
                        <h2 className="white f-50 f-700  f-playfair mt-3">API Integration</h2>
                        <p className="white f-poppins f-14 f-400 t-justify mt-3 mb-3 pe-5">
                            Our team is the embodiment of excellence when it comes to API integration and custom programming, solidifying our reputation as an industry leader. We're proud of what we can achieve with these core competencies! So, Don't Navigate the Intricacies of Optimization Alone! - Let us be your trusted IT partner for all your needs!
                        </p>
                        <Image src={rating} className='img-fluid' />
                        <Link href='#' className={styles.arrowBtn1}>
                                    <span>Get Free <br /> Consultation </span>
                                    <Image src={right} width="50" height="21" alt="bitswits" loading="lazy" />
                                </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Integration