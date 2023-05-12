import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import avtar1 from '../public/images/testimonial/avatar-1.png'
import avtar2 from '../public/images/testimonial/avatar-2.png'
import avtar3 from '../public/images/testimonial/avatar-3.png'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {

  var whatourclients = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={styles.ourclients}>
        <Container className='testtimonials clintTesti'>




          <Slider {...whatourclients}>


            <div >

              <div className={styles.whatclientlogo}>


              </div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>

              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>

                Since I was short on money and couldn’t afford an expensive proofreader for the book, I was legit quite worried because having a second opinion is always better? My friend recommended Book Writing Experts’ affordable proofreading services, and wow! They were very accommodating and got my work done in 3 days only. So happy!

              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar1}
                    alt='bitswits'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Dyuti Hai</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

            <div >
              <div className={styles.whatclientlogo}>    </div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>This was my first book to be 	My sister was struggling with her book sales; I recommended Book Writing Experts book promotion services. Since then the sales have skyrocketed. I have never seen such great results in a short time.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar2}
                    alt='bitswits'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>James Moris</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}>    </div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} font15 fw100 font-f color-black`}>I worked with Sam Jordan for a few months preparing my first book. Sam was very helpful and courteous. We connected on the phone several times a week. I am not the most patient person, but I found Sam to be capable and professional. He helped me overcome any fears I had about the process. I had some difficulty understanding the formatting process for chapters and their titles. Sam walked me through it with very few problems. I now think of Sam as a friend. I have already written several chapters for a new book, and when it’s ready, Sam will be the one I look for to help me.</p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar3}
                    alt='bitswits'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font18 color-blue mb-1'><b>Ron</b></p>
                  <p className={styles.stars}><AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /> <AiFillStar size={25} /></p>
                </div>
              </div>
            </div>

          </Slider>


        </Container>

      </div>
    </>
  )
}

export default Whatourclients