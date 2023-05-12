import React from 'react'
import styles from '@/styles/Homevideo.module.css'
import { Container, Row, Col } from 'react-bootstrap'






const Homevideo = (props) => {
  return (
    <>
      <section className={styles.homevideo}>

        <Container fluid>
          <Row>
            <Col md={12} className='p-0 m-0'>
              
              <video controls className={`${styles.bgVideo}`}  autoPlay muted loop src="/images/video.mp4" type="video/mp4"></video>


            </Col>
          </Row>
        </Container>

      </section>
    </>
  )
}

export default Homevideo