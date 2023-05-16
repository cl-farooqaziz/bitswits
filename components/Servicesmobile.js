import React from 'react'
import styles from '@/styles/Servicesmobile.module.css'
import { Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Servicesmobile = (props) => {

    return (
        <>
        
            <Col md={4}>
                <div className={styles.serveimg}>
                    <Image alt="bitswits" loading="lazy" src={props.img1} className='img-fluid' />
                    <h4>{props.title}</h4>
                    {props.text ?
                        <p>{props.text}</p>
                        : ''}
                    <Link href="#" className={styles.more}> Learn More</Link>

                </div>
            </Col>
        </>
    )
}

export default Servicesmobile