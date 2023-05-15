import React from 'react'
import styles from '@/styles/Range.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import publication1 from '/public/images/range/1.webp'
import publication2 from '/public/images/range/2.webp'
import publication3 from '/public/images/range/3.webp'
import publication4 from '/public/images/range/4.webp'
import publication5 from '/public/images/range/5.webp'
import publication6 from '/public/images/range/6.webp'
import publication7 from '/public/images/range/7.webp'
import publication8 from '/public/images/range/8.webp'
import publication9 from '/public/images/range/9.webp'
import publication10 from '/public/images/range/10.webp'
import publication11 from '/public/images/range/11.webp'
import publication12 from '/public/images/range/12.webp'

const Range = () => {


  const bloglisting = [
    {
      image: publication1,
      title:'HEALTHCARE'
    },
    {
      image: publication2,
      title:'E-COMMERCE'

    },
    {
      image: publication3,
      title:'EDUCATION'

    },
    {
      image: publication4,
      title:'BANKING'

    },
    {
      image: publication5,
      title:'LIFESTYLE'

    },
    {
      image: publication6,
      title:'SPORTS'

    },
    {
      image: publication7,
      title:'RESTAURANTS'

    },

    {
      image: publication8,
      title:'TRAVEL'

    },
    {
      image: publication9,
      title:'SOCIAL'

    },
    {
      image: publication10,
      title:'ENTERTAINMENT'

    },
    {
      image: publication11,
      title:'GAME'

    },
    {
      image: publication12,
      title:'TRANSPORTATION'

    },

  ]

  return (

    <section className={styles.range}>

      <Container>

        <Row className="gy-3 sector">
          <Col md={11}>
            <h3 className='t-center f-18 f-montserrat f-700 orange'>WE SERVE A RANGE OF SECTORS</h3>
            <h2 className='f-50 t-center white f-playfair'>Mobile Application Development Company
              <br></br>  For Everyone Out There
            </h2>
            <p className=" f-montserrat f-15 f-500 white t-center mt-3">
                    BitsWits provides mobile app development service in the USA for every industry with innovation and efficiency. We create customized mobile solutions for various industries, from e-commerce to the healthcare or gaming industry. Our skilled app developers are determined to come up with mobile apps that meet the unique needs of every client and their business.
                </p>
          </Col>
        </Row>
        <Row className="gy-2 mt-3">
          {bloglisting.map((item, i) =>
            <Col md={2} key={i} className='imgspacetop'>
              <div className={styles.publicationimg}>
                <Image alt="bitswits"      loading="lazy" src={item.image}  className='img-fluid' />
                <h4 className="f-montserrat f-14 f-500 white mt-2">{item.title}</h4>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Range