import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
//images
import logo from '../public/images/icons/m-logo.svg'
import call from '../public/images/icons/phone-icon.webp'
import user from '../public/images/icons/user-icon.webp'
import arrow from '../public/images/icons/down-arrow.webp'
import mIcon from '../public/images/icons/mobile-icon.webp'
import gIcon from '../public/images/icons/game-icon.webp'
import dicon from '../public/images/icons/design-icon.webp'
import media1 from '../public/images/media/1.webp'
import media2 from '../public/images/media/2.webp'
import media3 from '../public/images/media/3.webp'
import media4 from '../public/images/media/4.webp'
import media5 from '../public/images/media/5.webp'
import media6 from '../public/images/media/6.webp'
import media7 from '../public/images/media/7.webp'



const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <nav className={styles.headerNav}>
                        <div className={styles.navLogo}>
                            <Link href="/" className="d-block">
                                <Image className='img-fluid'
                                    src={logo}
                                    alt='bitswits'
                                />
                            </Link>
                        </div>
                        <div className={styles.navMenu}>
                            <ul className={styles.mainUl}>
                                <li className={styles.mainLi}>
                                    <Link href="/" className={styles.mainA}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className={`${styles.mainLi} ${styles.megaLi}`}>
                                    <Link href="javascript:;" className={styles.mainA}>
                                        <span>Services</span>
                                        <Image className='img-fluid'
                                            src={arrow}
                                            alt='bitswits'
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className={styles.megaMenu1}>
                                        <Container>
                                            <Row className={styles.rowPad}>
                                                <Col xl={3} className="border-r">
                                                    <div className={styles.innerCol}>
                                                        <h3 className={styles.megaHead}>
                                                            Pioneering the Art <br /> of App Building  to <br /> Bring  Your <br /> Ideas to Life
                                                        </h3>
                                                    </div>
                                                </Col>
                                                <Col xl={5}>
                                                    <div className={`${styles.innerCol} border-r`}>
                                                        <div className={styles.srvsSideLinks}>
                                                            <div className={styles.servicesHeading}>
                                                                <div className={styles.contains}>
                                                                    <h5 className={styles.mobApp}>
                                                                        <Link href="javascript:;">
                                                                            <span className="javascript:;"> Mobile App Development
                                                                            </span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className={styles.linksRow}>
                                                                <Row>
                                                                    <Col xl={6}>
                                                                        <ul className={`${styles.megaUl} p-0`}>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>Mobile App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>iOS App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>Android App Development </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>Flutter App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </Col>
                                                                    <Col xl={6} className='ps-0'>
                                                                        <ul className={`${styles.megaUl} p-0`}>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>React Native App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>Wearable App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span>Cross Platform App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="javascript:;"
                                                                                    className={styles.megaA}>
                                                                                    <span> Web App Development </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={4}>
                                                    <div className={`${styles.innerCol}`}>
                                                        <Row>
                                                            <Col xl={7}>
                                                                <div className={`${styles.srvsSideLinks} ${styles.game}`}>
                                                                    <div className={styles.servicesHeading}>
                                                                        <div className={styles.contains}>
                                                                            <h5 className={styles.gameApp}>
                                                                                <Link href="javascript:;">
                                                                                    <span>Game App Development</span>
                                                                                </Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <ul className={`${styles.megaUl} p-0`}>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="javascript:;"
                                                                                className={styles.megaA}>
                                                                                <span>2D Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="javascript:;"
                                                                                className={styles.megaA}>
                                                                                <span>3D Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="javascript:;"
                                                                                className={styles.megaA}>
                                                                                <span>NFT Game Development </span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="javascript:;"
                                                                                className={styles.megaA}>
                                                                                <span>Blockchain Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                            <Col xl={5} className="border-l">
                                                                <div className={`${styles.srvsSideLinks} ${styles.game}`}>
                                                                    <div className={styles.servicesHeading}>
                                                                        <div className={styles.contains}>
                                                                            <h5 className={styles.gameApp}>
                                                                                <Link href="javascript:;">
                                                                                    <span>UI/UX App Design</span>
                                                                                </Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <ul className={`${styles.megaUl} p-0`}>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="javascript:;"
                                                                                className={styles.megaA}>
                                                                                <span>UI/UX App Design</span>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className={`${styles.strip} border-l`}>
                                                <Container>
                                                    <Row className={`${styles.row} align-items-center`}>
                                                        <Col xl={3} className={styles.blackBox}>
                                                            <h3 className="">Core Services</h3>
                                                        </Col>
                                                        <Col xl={3}>
                                                            <div className={`${styles.conRow} d-flex align-items-center`}>
                                                                <div className={styles.new}>
                                                                    <Image
                                                                        src={mIcon}
                                                                        alt="bitswits"
                                                                    />
                                                                </div>
                                                                <div className={styles.contains}>
                                                                    <h5 className={styles.mobApp}>
                                                                        <Link href="javascript:;">
                                                                            <span className="dataActive active" datas="mobile"> Mobile App Development</span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={3}>
                                                            <div className={`${styles.conRow} d-flex align-items-center`}>
                                                                <div className={styles.new}>
                                                                    <Image
                                                                        src={gIcon}
                                                                        alt="bitswits"
                                                                    />
                                                                </div>
                                                                <div className={styles.contains}>
                                                                    <h5 className={styles.gameApp}>
                                                                        <Link href="javascript:;">
                                                                            <span>Game App Development</span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={3}>
                                                            <div className="d-flex align-items-center">
                                                                <div className={styles.new}>
                                                                    <Image
                                                                        src={dicon}
                                                                        alt="bitswits"
                                                                    />
                                                                </div>
                                                                <div className={`${styles.contains} 
                                                                ${styles.last}`}>
                                                                    <h5 className={styles.gameApp}>
                                                                        <Link href="javascript:;">
                                                                            <span>UI/UX App Design</span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </Container>
                                    </div>
                                </li>
                                <li className={`${styles.mainLi} ${styles.megaLi}`}>
                                    <Link href="javascript:;" className={styles.mainA}>
                                        <span>Our Work</span>
                                        <Image className='img-fluid'
                                            src={arrow}
                                            alt='bitswits'
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className={styles.megaMenu2}>
                                        <Container>
                                            <Row>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            Travel App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>Create Hassle-Free Travel...</div>
                                                                    <div className={`${styles.travelApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            Real Estate App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>A Real Estate App Instilling...</div>
                                                                    <div className={`${styles.estatApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            Bacteria App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>Bacteria Shield - Cleaning... </div>
                                                                    <div className={`${styles.bactriApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                            <div className={styles.view}>
                                                                <Link href="javascript:;" className={styles.btnView}>View all Works</Link>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            Sound App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>Developed A Music Streaming... </div>
                                                                    <div className={`${styles.soundApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            PROHealth App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>AS Medicare - A Pharmacy... </div>
                                                                    <div className={`${styles.pharmaApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle} href="javascript:;">
                                                                            Rider App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>EZ Ride is a two-sided market... </div>
                                                                    <div className={`${styles.riderApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={styles.megaList}>
                                                                <Link href="javascript:;" className={`${styles.megaA} ${styles.travelLink}`}>
                                                                    <div className={styles.workTitle}>
                                                                        <Link className={styles.workTitle}
                                                                            href="javascript:;">
                                                                            Food App
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.realDummy}>Food Delivery Services That... </div>
                                                                    <div className={`${styles.foodApp} ${styles.scrn}`}>View App Screen</div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12} className={styles.leftborder}>
                                                    <div className={`${styles.travelDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media1}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.workDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media2}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.bacteriaDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media3}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.soundDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media4}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.pharmaDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media5}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.riderDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media6}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.foodDev} ${styles.imgLeft}`}>
                                                        <Image className='img-fluid mt-4'
                                                            src={media7}
                                                            alt='bitswits'
                                                            loading="lazy"
                                                        />
                                                        <Link href="javascript:;" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div >
                                </li >
                                <li className={styles.mainLi}>
                                    <Link href="javascript:;" className={styles.mainA}>
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li className={styles.mainLi}>
                                    <Link href="javascript:;" className={styles.mainA}>
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul >
                        </div >
                        <div className={styles.navBtns}>
                            <Link href="javascript:;" className={`${styles.callBtn} call-btn modal-toggle`}>
                                Get a Call
                            </Link>
                            <Link href="tel:18335006007" className={styles.phoneBtn}>
                                <Image
                                    src={call}
                                    alt="bitswits"
                                    loading="lazy"
                                />
                                <span>(833) 500-6007</span>
                            </Link>
                            <Link href="javascript:LC_API.open_chat_window();" className="support-btn">
                                <Image
                                    src={user}
                                    alt="bitswits"
                                    loading="lazy"
                                />
                                <span>Live Chat</span>
                            </Link>
                        </div>
                        <div className={styles.navTogle}>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                        </div>
                    </nav >
                </Container >
            </header >
        </>
    )
}

export default Header