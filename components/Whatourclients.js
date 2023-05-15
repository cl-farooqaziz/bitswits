import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import avtar1 from '../public/images/testimonial/1.webp'
import avtar2 from '../public/images/testimonial/2.webp'
import avtar3 from '../public/images/testimonial/3.webp'
import avtar4 from '../public/images/testimonial/4.webp'
import avtar5 from '../public/images/testimonial/5.webp'
import avtar6 from '../public/images/testimonial/6.webp'
import avtar7 from '../public/images/testimonial/7.webp'
import rating from '../public/images/testimonial/rating.webp'

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

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-3 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                BitsWits was a lifesaver for our business. We needed to create an app that could be used on
                multiple platforms, but we didn’t have a lot of technical know-how or additional development
                resources. Their team made it easy for us and delivered exactly what we needed. They stayed on
                top of our project and kept us informed throughout the process. We wouldn't hesitate to
                recommend them for any of your app development needs!
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar1}
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Bryce Carlos</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">CEO / Founder <strong className="f-uppercase">Soul Sound</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS</h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                We hired mobile app developers to create a completely new mobile app for our company. The team
                at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and
                trends. We couldn't be happier with the results and will definitely be recommending them to
                anyone looking for top-notch mobile app development company.
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar2}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Aden Ward</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">Co-Founder <strong className="f-uppercase">ProHealth</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                We recently worked with BitsWits to build a custom mobile app for our business. Their mobile app
                development company team was very knowledgeable and professional throughout the entire process,
                providing expert guidance and support every step of the way. We would highly recommend them to
                anyone looking for a reliable and cost-effective mobile app development solution.
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar3}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Annabella Josh</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">CEO <strong className="f-uppercase">Find Food</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                We were looking for a reliable team of Flutter app developers, and we found the perfect fit in
                BitsWits. Their expertise and commitment to quality resulted in an exceptional app that exceeded
                our expectations. We highly recommend their services!
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar4}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Abraham Jones</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">Co-Founder <strong className="f-uppercase">EZ Ride</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                We're very satisfied with the results of our working relationship with BitsWits.
                We were able to create a high-quality mobile app that not only met our specifications but
                exceeded them in every way. The entire team was friendly and professional throughout the entire
                process, and we would definitely recommend their services to anyone looking for a reliable
                custom app development company.
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar5}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Chavi Miles</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">Co-Founder <strong className="f-uppercase">Bliss Travel</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                BitsWits have done a great job making an attractive and eye-catching IOS application.
                I am grateful to the team for delivering this application perfectly on very short notice.
                Thanks a lot.
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar6}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Andrew Drake</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">Founder and CEO <strong className="f-uppercase">Mark Place</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.whatclientlogo}></div>
              <h3 className='f-18 f-700 orange mb-4 f-montserrat'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
              <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
              <p className={` ${styles.canva} black`}>
                Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They
                are highly skilled and knowledgeable professionals who understand customer needs and deliver
                well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly
                recommend them to anyone looking for reliable and cost-effective Flutter solutions.
              </p>
              <div className={styles.clientData}>
                <div>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={avtar7}

                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='f-18 f-700 f-montserrat orange mb-0'><b>Winnie Brooks</b></p>
                  <h4 className="black f-15 f-montserrat my-2">
                    <span className="f-400">Founder and CEO <strong className="f-uppercase">Glow Spa</strong> </span>
                  </h4>
                  <Image alt="bitswits" loading="lazy" className='img-fluid'
                    src={rating}
                  />
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