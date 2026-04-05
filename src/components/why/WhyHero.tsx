import React from 'react';
import expertImg from '../../assets/expert.png';

const WhyHero: React.FC = () => {
  return (
    <section className="why-hero-section">
      <div className="why-hero-container">
        <div className="why-hero-image-card">
          <div className="overlay">
            <p>Learn From Expert & Build Real world Projects.</p>
          </div>
          <img src={expertImg} alt="Expert teaching" />
        </div>
        <div className="why-hero-content">
          <span className="tag">Why Arise Labs?</span>
          <h1>Because the future belongs to those who can build.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit 
            sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, 
            tristique vel diam vitae, venenatis laoreet risus. Praesent ac felis 
            convallis, maximus nisl vel, auctor velit. Aenean mattis tortor metus, 
            ac ullamcorper nulla ornare nec. Suspendisse nec pharetra augue. Vivamus 
            ac turpis ante. Duis diam risus, tempus eu malesuada eu, elementum at 
            felis. Duis maximus nibh quis neque tempus lacinia. Maecenas blandit 
            sagittis lacus id gravida. In nec vehicula dui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHero;
