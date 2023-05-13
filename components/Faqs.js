import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Faqs.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
//images
import arrow from '../public/images/icons/arrow.webp'

const Faqs = () => {
    return (
        <>
            <section className={styles.faqs}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="black f-50 f-700 f-playfair mb-5">
                                Frequently Asked Questions
                            </h2>
                        </Col>
                        <Col lg={6}>
                            <Accordion defaultActiveKey="1" className='mt-3'>
                                <Accordion.Item eventKey="1" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            What Is Mobile Application Development?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            Does BitsWits Offers Hybrid and Native app development?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            BitsWits has a team of the best mobile app developers expert in providing customized development
                                            solutions, whether Hybrid or Native mobile application development is required. Our developers
                                            always come up with creative and innovative app ideas that are best in your interest.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col lg={6}>
                            <Accordion className='mt-3'>
                                <Accordion.Item eventKey="3" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            Why Choose BitsWits as a mobile app development company?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            BitsWits is a top mobile app development company due to its decent clientele, commitment to
                                            excellence, and innovative mobile app development solutions. We enjoy the top spot in the
                                            application development industry with affordable packages and professional services.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            Is there any customer support available?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We
                                            do not let our customers hang in the middle with any query that may bring trouble to them.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            How to choose a mobile app development company?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Checking client portfolios, communicating your requirements clearly, and considering the
                                            development cost will help you choose the best mobile app development agency. BitsWits practices
                                            open communication so that the solution to your query is answered adequately to provide you with
                                            the utmost satisfaction.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='mt-4'>
                                    <Accordion.Header>
                                        <h3>
                                            What industries does BitsWits cater to?
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            At BitsWits, we specialize in developing innovative and efficient mobile applications for various
                                            industries across the United States. We offer customized mobile solutions from e-commerce to
                                            healthcare and gaming to meet each client's specific requirements and business. We are a mobile
                                            application development company dedicated to creating apps that cater to each client's unique
                                            needs.
                                        </p>
                                        <div class="mt-2">
                                            <Link href="#">
                                                Let's Start
                                                <Image className='img-fluid'
                                                    src={arrow}
                                                    alt="bitswits"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Faqs