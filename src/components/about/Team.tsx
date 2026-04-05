import React from 'react';
import ceoImg from '../../assets/images/about/ceo.jpg';
import fredImg from '../../assets/team_fred.png';
import benedictaImg from '../../assets/team_benedicta.png';
import bernardImg from '../../assets/team_bernard.png';
import michaelImg from '../../assets/team_michael.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kane Mani",
      role: "Co-founder & CEO",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: ceoImg
    },
    {
      name: "Fred Clinton Ahagnobe",
      role: "Programs Manager",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: fredImg
    },
    {
      name: "Benedicta Nsiah",
      role: "Programs Co-ordinator",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: benedictaImg
    },
    {
      name: "Bernard Appiedu",
      role: "Business Development Manager",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: bernardImg
    },
    {
      name: "Michael Mensah",
      role: "Software Engineer",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: michaelImg
    },
    {
      name: "Emmanuel Sarfo-Kantanka",
      role: "Accountant",
      description: "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      image: michaelImg // Using Michael's for now as I had two in one image and only copied one
    }
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>Our team is composed of passionate and skilled professionals dedicated to delivering on our mission.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
