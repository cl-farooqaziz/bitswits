import React from 'react'
import styles from '@/styles/Publication.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import publication1 from '/public/images/publication/1.webp'
import publication2 from '/public/images/publication/2.webp'
import publication3 from '/public/images/publication/3.webp'
import publication4 from '/public/images/publication/4.webp'
import publication5 from '/public/images/publication/5.webp'
import publication6 from '/public/images/publication/6.webp'
import publication7 from '/public/images/publication/7.webp'
import publication8 from '/public/images/publication/8.webp'
import publication9 from '/public/images/publication/9.webp'
import publication10 from '/public/images/publication/10.webp'
import publication11 from '/public/images/publication/11.webp'
import publication12 from '/public/images/publication/12.webp'

const Publication = () => {


  const bloglisting = [
    {
      image: publication1,
    },
    {
      image: publication2,

    },
    {
      image: publication3,

    },
    {
      image: publication4,

    },
    {
      image: publication5,

    },
    {
      image: publication6,

    },
    {
      image: publication7,

    },

    {
      image: publication8,

    },
    {
      image: publication9,

    },
    {
      image: publication10,

    },
    {
      image: publication11,

    },
    {
      image: publication12,

    },

  ]

  return (

    <section className={styles.publi}>

      <Container>

        <Row className="gy-3">
          <Col md={12}>
            <h3 className='t-center f-18 f-montserrat f-700 orange'>PUBLICATIONS</h3>
            <h2 className='f-50 t-center black f-playfair'> Many Got Featured In Major <br></br>   Publications Just    By Working With Us.
            </h2>
          </Col>
        </Row>
        <Row className="gy-3 mt-4">
          {bloglisting.map((item, i) =>
            <Col md={2} key={i} className='imgspacetop'>
              <div className={styles.publicationimg}>
                <Image loading="lazy" src={item.image} alt="bitswits" className='img-fluid' />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Publication