import React from 'react'
import styles from '@/styles/Publication.module.css'
import { Container } from 'react-bootstrap'

const Publication = () => {
  return (



    <Container>
      <Row>

      </Row>
      <Row>
        <Col md={2}>
          <div className={styles.publicationimg}>
            <Image loading="lazy" alt="bitswits" src={props.img1} className='img-fluid' />
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Publication