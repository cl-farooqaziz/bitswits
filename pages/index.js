import Head from 'next/head'
import Homebanner from '@/components/Homebanner'
import Endorsements from '@/components/Endorsements'
import Homevideo from '@/components/Homevideo'
import Whatourclients from '@/components/Whatourclients'
import Partner from '@/components/Partner'
import Servicesmobile from '@/components/Servicesmobile'
import servicesmobile from '/public/images/servicesmobile/1.webp'
import servicesmobile2 from '/public/images/servicesmobile/2.webp'
import servicesmobile3 from '/public/images/servicesmobile/3.webp'
import servicesmobile4 from '/public/images/servicesmobile/4.webp'
import servicesmobile5 from '/public/images/servicesmobile/5.webp'
import servicesmobile6 from '/public/images/servicesmobile/6.webp'
import { Container, Row } from 'react-bootstrap'
import Publication from '@/components/Publication'
import Range from '@/components/Range'
import Integration from '@/components/Integration'
import Hireus from '@/components/Hireus'
import Consultation from '@/components/Consultation'
import Faqs from '@/components/Faqs'
import GetInTouch from '@/components/GetInTouch'

export default function Home() {


  const android = <span>Android <br></br>Application Development </span>
  const web = <span>Web <br></br>App Development </span>
  const Flutter = <span>Flutter <br></br>App Development </span>
  const React = <span>React Native <br></br>App Development </span>
  const Cross = <span>Cross Platform  <br></br>App Development </span>
  const IOS = <span>IOS  <br></br>Application Development </span>


  const fine = [

    {
      img: servicesmobile,
      title: android,
      text: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.',



    },

    {
      img: servicesmobile2,
      title: web,
      text: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!',



    },

    {
      img: servicesmobile3,
      title: Flutter,
      text: 'Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.',
    },

    {
      img: servicesmobile4,
      title: React,
      text: 'Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients` business objectives.',
    },

    {
      img: servicesmobile5,
      title: Cross,
      text: 'We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.',
    },

    {
      img: servicesmobile6,
      title: IOS,
      text: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!',
    },


  ]


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Top Mobile App Development Company - Bitswits.</title>
        <meta name="description"
          content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Mobile App Development Company - Bitswits." />
        <meta property="og:description"
          content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life" />
        <meta property="og:url" content="https://bitswits.co" />
        <meta property="og:site_name" content="Top Mobile App Development Company - Bitswits." />
        <link rel="canonical" href="https://bitswits.co" />
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        <meta name="google-site-verification" content="jg7nSxeneqpzOKNtVKXDQRVGjThDC6_7zGXI8wAXqkY" />
        <link rel="icon" href="../favicon.webp" />
      </Head>


      <Homebanner />

      <Endorsements />

      <Homevideo />

      <Partner />




      <div className='bgimageserve'>
        <Container className='ourspacing'>
          <Row className='mb-5'>
            <div>
              <p className="f-20 orange f-montserrat f-700 mb-2 t-center">SERVICES</p>
              <h2 className="f-50 f-playfair f-700 black t-center">Mobile App Development Services</h2>
              <p className="f-montserrat f-500 f-14 mb-1 black lheight24 t-center">Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.</p>
            </div>
          </Row>


          <Row className='gy-4'>
            {fine.map((item, i) =>
              <Servicesmobile key={i}
                title={item.title}
                text={item.text}
                img1={item.img}

              />
            )}
          </Row>
        </Container>
      </div>

      <Publication />

      <Range />

      <Hireus />

      <Integration />

      <Whatourclients />

      <Consultation />

      <Faqs />

      <GetInTouch />

    </>
  )
}
