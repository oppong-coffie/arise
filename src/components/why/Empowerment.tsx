import React from 'react';
import flagshipImg from '../../assets/flagship.png';
import expertImg from '../../assets/expert.png';

const Empowerment: React.FC = () => {
  const cards = [
    { title: "A Day In Tech - With Kane Mani.", image: expertImg },
    { title: "Project Management Training BootCamp.", image: flagshipImg },
    { title: "Tech & Chiils With Kane Mani.", image: expertImg },
    { title: "A Day In Tech - With Kane Mani.", image: flagshipImg }
  ];

  return (
    <section className="empowerment-section">
      <div className="empowerment-header">
        <div className='text-5xl font-extrabold mb-7'>Empowering Africa through Technology Education</div>
        <p>
          Arise is dedicated to bridging the technology gap in Africa by providing 
          accessible tech education. Founded to prepare the African market for 
          the digital innovations being created, Arise focuses on building 
          technology literacy, fostering awareness, and creating a tech-savvy 
          consumer base. By educating individuals and businesses, Arise is 
          shaping Africa’s future in the digital world.
        </p>
      </div>
      <div className="empowerment-grid">
        {cards.map((card, index) => (
          <div key={index} className="empowerment-card">
            <div className="overlay">
              <p>{card.title}</p>
            </div>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Empowerment;
