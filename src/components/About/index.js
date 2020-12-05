
/*import React from 'react';
import { Container } from '@material-ui/core';

const About = () => {
    return (
        <Container>
            <h1>About</h1>
        </Container>
    );
}
*/


//export default About;

import React from 'react';
import { Container } from '@material-ui/core';

/*
const About = () => {
    return (
        <Container>
            <h1>About</h1>
                <p>History and Background of WinGRSS</p>
                <p>Expectations and Value Prop</p>
                <p>Mission and Vision</p>
        </Container>
    );
}
export default About;
*/


const About = () => {
    return (
        <Container>
             <div>
              <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                  <div className="row">
                  <div className="col-md-12">
                      <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="col-md-12">
                          <div className="about-desc">
                          <h2 className="colorlib-heading">History and Background of WinGRSS</h2>
                          <img src="data:image/png;base64,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" alt="IEEExGRSS"></img>
                          <p>Worldwide, women remain underrepresented in the STEM workforce and gender bias persists. GRSS wants to encourage professional development of women in GRSS, and we strive to raise awareness and engage the GRSS community. The main purpose of the WMW Program is to provide support for women within GRSS at various career stages ranging from early career to senior professionals. This encompasses individual, one-on-one connections that are fostered between mentor and mentee. In these individual mentoring meetings, the mentor and mentee discuss professional, academic, and personal issues. They set goals, problem-solve and celebrate successes. </p>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </section>
              <section className="colorlib-about">
              <div className="colorlib-narrow-content">
                  <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <h2 className="colorlib-heading">Expectations and Value Prop</h2>
                  </div>
                  </div>
                  <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-1">
                      <span className="icon">
                          <i className="icon-bulb" />
                      </span>
                      <div className="desc">
                          <h3>Collaboration with CSC</h3>
                          <p>The WISE-E is a program in collaboration with The Center for Sustainable Communities (CSC). CSC Smart Academy Center of Excellence is a recognized leader in K-12 STEM education. The WISE-E program places an emphasis on the importance of women and girls recruitment and sustainability in these fields through specialty programming.</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-3">
                      <span className="icon">
                          <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                          <h3>Expectation 2:</h3>
                          <p>xyz</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-5">
                      <span className="icon">
                          <i className="icon-data" />
                      </span>
                      <div className="desc">
                          <h3>Expectation 3: </h3>
                          <p>xyz</p>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </section>
              <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                  <div className="row">
                  <div className="col-md-12">
                      <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="col-md-12">
                          <div className="about-desc">
                          <h2 className="colorlib-heading">Mission and Vision</h2>
                          <p>The committee is responsible for planning and organizing activities across regions, chapters, and conferences to develop, empower, and advance engineers and scientists from diverse backgrounds (technical, regional, gender, etc.), and inspire members around the world to follow their technical interests to a career in geoscience and remote sensing.</p>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </section>
            </div>
        </Container> 
    );
}
    export default About; 

   
    



