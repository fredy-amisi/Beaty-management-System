import React from 'react';
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from '../Components/ScrollAnimation';
import hairstyling from '../Images/hairstyling.jpg';
import nailcare from '../Images/nailcare.jpg';
import facials from '../Images/facials.jpg';
import massagetherapy from '../Images/massagetherapy.jpg';
import makeupartistry from '../Images/makeupartistry.jpg';
import waxingthreading from '../Images/waxingthreading.jpg';
import bodytreatments from '../Images/bodytreatments.jpg';
import spapackages from '../Images/spapackages.jpg';
import { Link } from 'react-router-dom';





const Services = () => {
  const { ref, isVisible } = ScrollAnimation();

  const services = [
    { id: 1, name: 'Hair Styling', description: 'Expert cuts, coloring, treatments, and styling for any occasion.', price: 'KSh 2,000', image: hairstyling, alt: 'Hair Styling' },
    { id: 2, name: 'Nail Care', description: 'Manicures, pedicures, gel extensions, and nail art.', price: 'KSh 1,500', image: nailcare, alt: 'Nail Care' },
    { id: 3, name: 'Facials', description: 'Rejuvenating facials tailored to your skin type.', price: 'KSh 3,000', image: facials, alt: 'Facials' },
    { id: 4, name: 'Massage Therapy', description: 'Swedish, deep tissue, hot stone, and aromatherapy massages.', price: 'KSh 4,000', image: massagetherapy, alt: 'Massage Therapy' },
    { id: 5, name: 'Makeup Artistry', description: 'Professional makeup for any occasion.', price: 'KSh 2,500', image: makeupartistry, alt: 'Makeup Artistry' },
    { id: 6, name: 'Waxing and Threading', description: 'Smooth, hair-free skin with waxing and threading.', price: 'KSh 1,200', image: waxingthreading, alt: 'Waxing and Threading' },
    { id: 7, name: 'Body Treatments', description: 'Body scrubs, wraps, and treatments for glowing skin.', price: 'KSh 3,500', image: bodytreatments, alt: 'Body Treatments' },
    { id: 8, name: 'Spa Packages', description: 'Comprehensive relaxation and pampering packages.', price: 'KSh 6,000', image: spapackages, alt: 'Spa Packages' },
  ];

  return (
    <div>
      <div className="services-section">
        <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
          <div className="vertical-services"></div>
          <h1>Discover Our <span>Premium</span> <br />Beauty <span>Services</span></h1>
        </div>
        <div className="services-container">
          {services.map((service) => (
            <div className="services" key={service.id}>
              <img className="s-imeages" src={service.image} alt={service.alt} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to="/Booking">
              <button className="b-appointment">Book Appointment</button>
              </Link>
              <p className="price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Services;
