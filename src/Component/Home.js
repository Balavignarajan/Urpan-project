import React, { useState } from 'react';
import Header from '../Common/Header';
import './Home.css';
import bgvid from '../img/bg2.mp4';
import about from '../img/about-img.jpg';
import chat from '../img/consultant.png';
import medal from '../img/medal.png';
import placement from '../img/placement.png';
import client from '../img/client.png';
import img1 from '../img/temporavary.jpg';
import img2 from '../img/Hr.jpg';
import img3 from '../img/skills program.jpg';
import img4 from '../img/Executive.jpg';
import img5 from '../img/It staff.jpg';
import img6 from '../img/Hire.jpg';

import { FaHome } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../Common/Footer';

function Home() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentCareerIndex, setCurrentCareerIndex] = useState(0);

  const services = [
    {
      image: img1,
      title: 'Temporary Staffing',
      description: 'Resource needs of business may be planned, project or time-based. Identifying these requirements, our temporary staffing solutions enable you to scale-up or down your resource needs accordingly; we build your resource capacity easing you of the cost and management challenges.'
    },
    {
      image: img2,
      title: 'HR Consulting',
      description: 'Leveraging talent resources is primal for enhancing business performance and growth. Through our HR consulting services, we enable businesses to optimize their HR operations with improved and innovative HR policies and practices with focus on the dynamic needs of the IT industry.'
    },
    {
      image: img3,
      title: 'Skill Enhancement Programs',
      description: 'Right leadership is a paramount importance to drive business towards its vision. at UrpanTech, we partner in your growth by enabling you with right resources to fill executive positions. Our executive search teams enable businesses to spot their next leader .'
    },
    {
      image: img4,
      title: 'Executive Search',
      description: 'Our project management services ensure your projects are delivered on time and within budget. We utilize best practices and experienced project managers to guide your projects to successful completion.'
    },
    {
      image: img5,
      title: 'IT Staff',
      description: 'Our IT support services provide comprehensive solutions to keep your IT infrastructure running smoothly. From troubleshooting and maintenance to system upgrades and network management, we have you covered.'
    },
    {
      image: img6,
      title: 'Direct Hire Service',
      description: 'Key resources are crucial for the smooth running of the business. Sourcing the right talent is both time consuming and resource intensive too. We enable organization to identify, recruit and hire the right candidates for various position is sync with their hiring strategy .'
    }
  ];

  const careers = [
    {
      title: 'Software Engineer',
      description: 'Fulltime Job, 40 Hours/Week',
      experience: 'Experience of Six months using Java, Spring and Oracle Database server is required. Travel and/or Relocation to unanticipated client sites throughout the USA are required.'
    },
    {
      title: 'Software Developer',
      description: 'Fulltime Job, 40 Hours/Week',
      experience: 'No Experience Required'
    },
    {
      title: 'Employee Referral Program',
      description: 'Candidates can be referred to any open position by contacting the HR directly. If the candidate referred by the employee is offered and accepts the position, HR will contact the employee who made the referral directly. Upon meeting the requirements, the candidate must apply with the HR Department for the referral fees by providing the candidate name.'
    },
    {
      title: 'Project Manager',
      description: 'Fulltime Job, 40 Hours/Week',
      experience: 'Experience of Three years managing projects using Agile methodologies is required. PMP certification is preferred. Travel and/or Relocation to unanticipated client sites throughout the USA are required.'
    },
    {
      title: 'Business Analyst',
      description: 'Fulltime Job, 40 Hours/Week',
      experience: 'Experience of Two years in business analysis and requirements gathering is required. Knowledge of SQL and data analysis tools is preferred. Travel and/or Relocation to unanticipated client sites throughout the USA are required.'
    },
    {
      title: 'Network Engineer',
      description: 'Fulltime Job, 40 Hours/Week',
      experience: 'Experience of One year in network administration and troubleshooting is required. Cisco certification (CCNA/CCNP) is preferred. Travel and/or Relocation to unanticipated client sites throughout the USA are required.'
    }
  ];

  const nextServiceSlide = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex + 3) % services.length);
  };

  const prevServiceSlide = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex - 3 + services.length) % services.length);
  };

  const nextCareerSlide = () => {
    setCurrentCareerIndex((prevIndex) => (prevIndex + 3) % careers.length);
  };

  const prevCareerSlide = () => {
    setCurrentCareerIndex((prevIndex) => (prevIndex - 3 + careers.length) % careers.length);
  };

  return (
    <div>
      <div className='headernav'>
        <Header />
      </div>

      <div className='bgvid-home'>
        <video className='videoTag' autoPlay loop muted>
          <source src={bgvid} type='video/mp4' />
        </video>

        <div id='home' className='home-page'>
          <h3>Optimize IT Systems</h3>
          <h1>Creating a better</h1>
          <h2>IT Solutions</h2>
          <p>Your Skills to Success Journey Begins Here. <br /> Your Step towards a great Career is just a Click Away.</p>
        </div>
      </div>

      <div id='about' className='about-page'>
        <h2>About UrpanTech</h2>
        <p>Building lasting relationships with businesses through people resources.</p>

        <div className='about-content'>
          <div className='about-image'>
            <img src={about} alt='About UrpanTech' />
          </div>
          <div className='about-details'>
            <div className='detail'>
              <p><IoTimeOutline className='icn-abt' /></p>
              <div>
                <h3>Quality and Consistency</h3>
                <p>Our focused efforts are directed towards providing businesses with talented resources throughout their project needs and ensure continuous workflow.</p>
              </div>
            </div>
            <div className='detail'>
              <p><FaHome className='icn-abt' /></p>
              <div>
                <h3>Quick and Ingenious</h3>
                <p>Quick on our toes, at UrpanTech, we are adept at providing out-of-the-box and customized solutions to address your resource needs.</p>
              </div>
            </div>
            <div className='detail'>
              <p><IoTimeOutline className='icn-abt' /></p>
              <div>
                <h3>Suitable and Sustainable</h3>
                <p>UrpanTech is committed to providing talented resources that best suit your business needs and sustain your business growth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-stats'>
          <div className='stat'>
            <img src={medal} alt='Years of Experience' />
            <h4>22</h4>
            <p>Years Of Experience</p>
          </div>
          <div className='stat'>
            <img src={placement} alt='Placements' />
            <h4>2500</h4>
            <p>Placements</p>
          </div>
          <div className='stat'>
            <img src={chat} alt='Consultants' />
            <h4>4000</h4>
            <p>Consultants</p>
          </div>
          <div className='stat'>
            <img src={client} alt='Clients' />
            <h4>50</h4>
            <p>Clients</p>
          </div>
        </div>
      </div>

      <div id='service' className='service-page'>
        <h2>Our Services</h2>
        <div className='slider'>
          <span className='arrow' onClick={prevServiceSlide}>&#9664;</span>
          <div className='service-cards'>
            {services.slice(currentServiceIndex, currentServiceIndex + 3).map((service, index) => (
              <div className='card' key={index}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <span className='arrow' onClick={nextServiceSlide}>&#9654;</span>
        </div>
      </div>

      <div id='career' className='Career-page'>
        <h2>Career Opportunities</h2>
        <div className='slider'>
          <span className='arrow' onClick={prevCareerSlide}>&#9664;</span>
          <div className='career-cards'>
            {careers.slice(currentCareerIndex, currentCareerIndex + 3).map((career, index) => (
              <div className='career-card' key={index}>
                <h3>{career.title}</h3>
                <p>{career.description}</p>
                <p>{career.experience}</p>
                <button className='apply-btn'>Apply Now</button>
              </div>
            ))}
          </div>
          <span className='arrow' onClick={nextCareerSlide}>&#9654;</span>
        </div>
      </div>

      <div id='contact' className='Contact-page'>
          <div className='contact-title'>
                <h1>DON'T HESITATE</h1>
                <h2>Get in Touch</h2>
                <p>UrpanTech has been providing staffing and recruitment services to businesses <br></br> in the IT industry since 2000. As a reliable and resourceful organization, we aim <br></br> to be your talent partner with the focus on your present and future business goals.
                </p>
                <h3>United States</h3>

                <div className='contact-address'>
                  <div className='contact-address1'>
                
                 <p> <MdPhoneAndroid /> +1 408-744-6750 </p>
                  </div>

                  <div className='contact-address1'>
                  
              <p> <IoMdMail /> info@urpantech.com</p> 
                  </div>

                  <div className='contact-address1'>
                  

                  <p> <IoLocationOutline /> 39355 California Street, #303, Fremont, CA 94538</p>
                  </div>

                </div>

                <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.339867163508!2d80.20416851263334!3d12.896949827697432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b79de7f381b%3A0xffbb2dd48afe3f1b!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1720811237596!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
          </div>

                  
      </div>

          <div className='footer-page'>
              <Footer/>
          </div>
    </div>
  );
}

export default Home;
