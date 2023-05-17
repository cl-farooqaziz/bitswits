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
import backarrow from '../public/images/icons/back-arrow.webp'
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

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu = () => {
        setMegaMenu1((prev) => !prev);
    }

    const handleMegaMenu2 = () => {
        setMegaMenu2((prev) => !prev);
    }

    const [travelappshow, settravelapp] = useState(true);
    const [estatappshow, setestatapp] = useState(false);
    const [bacteriashow, setbacteria] = useState(false);
    const [soundappshow, setsoundapp] = useState(false);
    const [healthappshow, sethealthapp] = useState(false);
    const [riderappshow, setriderapp] = useState(false);
    const [foodappshow, setfoodapp] = useState(false);

    function travelapp() {

        settravelapp(true);
        setestatapp(false);
        setbacteria(false);
        setsoundapp(false);
        sethealthapp(false);
        setriderapp(false);
        setfoodapp(false);

    }
    function estatapp() {

        setestatapp(true);
        settravelapp(false);
        setbacteria(false);
        setsoundapp(false);
        sethealthapp(false);
        setriderapp(false);
        setfoodapp(false);

    }
    function bacteria() {

        setbacteria(true);
        settravelapp(false);
        setestatapp(false);
        setsoundapp(false);
        sethealthapp(false);
        setriderapp(false);
        setfoodapp(false);
    }
    function soundapp() {
        setsoundapp(true);
        setbacteria(false);
        settravelapp(false);
        setestatapp(false);
        sethealthapp(false);
        setriderapp(false);
        setfoodapp(false);
    }
    function healthapp() {
        sethealthapp(true);
        setsoundapp(false);
        setbacteria(false);
        settravelapp(false);
        setestatapp(false);
        setriderapp(false);
        setfoodapp(false);
    }
    function riderapp() {
        setriderapp(true);
        sethealthapp(false);
        setsoundapp(false);
        setbacteria(false);
        settravelapp(false);
        setestatapp(false);
        setfoodapp(false);
    }
    function foodapp() {
        setriderapp(false);
        sethealthapp(false);
        setsoundapp(false);
        setbacteria(false);
        settravelapp(false);
        setestatapp(false);
        setfoodapp(true);
    }

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <nav className={styles.headerNav}>
                        <div className={styles.navLogo}>
                            <Link href="/" className="d-block">
                                <Image alt="bitswits" className='img-fluid'
                                    src={logo}

                                />
                            </Link>
                        </div>
                        <div className={isActive ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu} headimg`}>
                            <ul className={styles.mainUl}>
                                <li className={styles.mainLi} onClick={handleMenu}>
                                    <Link href="/" className={styles.mainA}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className={`${styles.mainLi} ${styles.megaLi}`} onClick={handleMegaMenu}>
                                    <Link href="#" className={styles.mainA}>
                                        <span>Services</span>
                                        <Image alt="bitswits" className={`${styles.arrImg} img-fluid`}
                                            src={arrow}
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className={megamenu1 ? `${styles.megaMenu1} ${styles.opnMenu}` : `${styles.megaMenu1}`}>
                                        <div className={styles.backArrow}>
                                            <Image
                                                alt="bitswits"
                                                src={backarrow}
                                                loading="lazy"
                                            />
                                        </div>
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
                                                                        <Link href="mobile-app-development-company">
                                                                            <span className=""> Mobile App Development
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
                                                                                <Link href="mobile-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>Mobile App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="ios-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>iOS App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="android-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>Android App Development </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="flutter-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>Flutter App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </Col>
                                                                    <Col xl={6} className='ps-xl-0'>
                                                                        <ul className={`${styles.megaUl} p-0`}>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="react-native-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>React Native App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="wearable-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>Wearable App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="cross-platform-app-development-company"
                                                                                    className={styles.megaA}>
                                                                                    <span>Cross Platform App Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className={styles.megaList}>
                                                                                <Link href="web-app-development-company"
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
                                                                                <Link href="#">
                                                                                    <span>Game App Development</span>
                                                                                </Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <ul className={`${styles.megaUl} p-0`}>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="#"
                                                                                className={styles.megaA}>
                                                                                <span>2D Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="#"
                                                                                className={styles.megaA}>
                                                                                <span>3D Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="#"
                                                                                className={styles.megaA}>
                                                                                <span>NFT Game Development </span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="#"
                                                                                className={styles.megaA}>
                                                                                <span>Blockchain Game Development</span>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                            <Col xl={5} className="border-l mt-4 mt-xl-0">
                                                                <div className={`${styles.srvsSideLinks} ${styles.game}`}>
                                                                    <div className={styles.servicesHeading}>
                                                                        <div className={styles.contains}>
                                                                            <h5 className={styles.gameApp}>
                                                                                <Link href="#">
                                                                                    <span>UI/UX App Design</span>
                                                                                </Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <ul className={`${styles.megaUl} p-0`}>
                                                                        <li className={styles.megaList}>
                                                                            <Link href="#"
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
                                                                    <Image alt="bitswits"
                                                                        src={mIcon}
                                                                    />
                                                                </div>
                                                                <div className={styles.contains}>
                                                                    <h5 className={styles.mobApp}>
                                                                        <Link href="#">
                                                                            <span className="dataActive active" datas="mobile"> Mobile App Development</span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={3}>
                                                            <div className={`${styles.conRow} d-flex align-items-center`}>
                                                                <div className={styles.new}>
                                                                    <Image alt="bitswits"
                                                                        src={gIcon}
                                                                    />
                                                                </div>
                                                                <div className={styles.contains}>
                                                                    <h5 className={styles.gameApp}>
                                                                        <Link href="#">
                                                                            <span>Game App Development</span>
                                                                        </Link>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={3}>
                                                            <div className="d-flex align-items-center">
                                                                <div className={styles.new}>
                                                                    <Image alt="bitswits"
                                                                        src={dicon}
                                                                    />
                                                                </div>
                                                                <div className={`${styles.contains} 
                                                                ${styles.last}`}>
                                                                    <h5 className={styles.gameApp}>
                                                                        <Link href="#">
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
                                <li className={`${styles.mainLi} ${styles.megaLi}`} onClick={handleMegaMenu2}>
                                    <Link href="#" className={styles.mainA}>
                                        <span>Our Work</span>
                                        <Image alt="bitswits" className={`${styles.arrImg} img-fluid`}
                                            src={arrow}
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className={megamenu2 ? `${styles.megaMenu2} ${styles.opnMenu2}` : `${styles.megaMenu2}`}>
                                        <div className={styles.backArrow}>
                                            <Image
                                                alt="bitswits"
                                                src={backarrow}
                                                loading="lazy"
                                            />
                                        </div>
                                        <Container>
                                            <Row>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={`${styles.megaList}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        Travel App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>Create Hassle-Free Travel...</span>
                                                                <span onMouseOver={travelapp} className={`${styles.travelApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                            <li className={`${styles.megaList} ${styles.megaList2}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        Real Estate App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>A Real Estate App Instilling...</span>
                                                                <span onMouseOver={estatapp} className={`${styles.estatApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                            <li className={`${styles.megaList} ${styles.megaList2}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        Bacteria App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>Bacteria Shield - Cleaning... </span>
                                                                <span onMouseOver={bacteria} className={`${styles.bactriApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                            <div className={styles.view}>
                                                                <Link href="#" className={styles.btnView}>View all Works</Link>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={`${styles.megaList} ${styles.mgaLiN}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        Sound App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>Developed A Music Streaming... </span>
                                                                <span onMouseOver={soundapp} className={`${styles.soundApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                            <li className={`${styles.megaList} ${styles.megaList2}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        PROHealth App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>AS Medicare - A Pharmacy... </span>
                                                                <span onMouseOver={healthapp} className={`${styles.pharmaApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                            <li className={`${styles.megaList} ${styles.megaList2}`}>

                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle} href="#">
                                                                        Rider App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>EZ Ride is a two-sided market... </span>
                                                                <span onMouseOver={riderapp} className={`${styles.riderApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12}>
                                                    <div className={styles.innerCol}>
                                                        <ul className={`${styles.megaUl} p-0`}>
                                                            <li className={`${styles.megaList} ${styles.mgaLiN}`}>
                                                                <span className={styles.workTitle}>
                                                                    <Link className={styles.workTitle}
                                                                        href="#">
                                                                        Food App
                                                                    </Link>
                                                                </span>
                                                                <span className={styles.realDummy}>Food Delivery Services That... </span>
                                                                <span onMouseOver={foodapp} className={`${styles.foodApp} ${styles.scrn}`}>View App Screen</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={12} className={styles.leftborder}>
                                                    <div className={travelappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media1}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={estatappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media2}
                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={bacteriashow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media3}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={soundappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media4}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={healthappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media5}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={riderappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media6}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                    <div className={foodappshow ? 'd-block' : 'd-none'}>
                                                        <Image alt="bitswits" className='img-fluid mt-4'
                                                            src={media7}

                                                            loading="lazy"
                                                        />
                                                        <Link href="#" className={styles.readMore}>
                                                            <p className="text-center">Read More</p>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div >
                                </li>
                                <li className={styles.mainLi} onClick={handleMenu}>
                                    <Link href="#" className={styles.mainA}>
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li className={styles.mainLi} onClick={handleMenu}>
                                    <Link href="#" className={styles.mainA}>
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul >
                        </div >
                        <div className={styles.navBtns}>
                            <Link href="#" className={`${styles.callBtn} call-btn modal-toggle`}>
                                Get a Call
                            </Link>
                            <Link href="tel:18335006007" className={styles.phoneBtn}>
                                <Image alt="bitswits"
                                    src={call}

                                    loading="lazy"
                                />
                                <span>(833) 500-6007</span>
                            </Link>
                            <Link href="#" className="support-btn">
                                <Image alt="bitswits"
                                    src={user}

                                    loading="lazy"
                                />
                                <span>Live Chat</span>
                            </Link>
                        </div>
                        <div className={styles.navTogle} onClick={handleMenu}>
                            <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                            <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                            <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                        </div>
                    </nav >
                </Container >
            </header >
        </>
    )
}

export default Header