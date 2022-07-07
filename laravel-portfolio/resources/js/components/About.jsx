import phone from "../img/icons/phone-call.png";
import email from "../img/icons/email.png";
import location from "../img/icons/location.png";
import profile from "../img/icons/profile.png";
import linkedin from "../img/icons/linkedin2.png";
import github from "../img/icons/github.png";

function About() {
  return (
    <section className="about" id="contact">
      <h4 className="title about__title about__title--blue">GET IN TOUCH</h4>
      <div className="about__container">
        <div className="about__info">
          <p className="about__text">
            For any questions, suggestions or job opportunities, feel free to
            contact me via email or contact form to the right. I am looking
            forward to collaborating with you!
          </p>
          <div className="about__contacts">
            <p className="about__phone">
              <img className="about__icon" src={phone} alt="" />
              +420 775 992 148
            </p>
            <p className="about__email">
              <img className="about__icon" src={email} alt="" />
              <a href="mailto: eka.melnichuk@gmail.com">
                eka.melnichuk@gmail.com
              </a>
            </p>
            <p className="about__profile">
              <img className="about__icon" src={profile} alt="" />
              <a className="about__resume" href="">
                download CV
              </a>
            </p>
            <p className="about__linkedin">
              <img className="about__icon" src={linkedin} alt="" />
              <a
                className="about__linkedinurl"
                href="https://www.linkedin.com/in/ekaterinamelnichuk/"
              >
                linkedin.com/in/ekaterinamelnichuk/
              </a>
            </p>
            <p className="about__github">
              <img className="about__icon" src={github} alt="" />
              <a
                className="about__githuburl"
                href="https://github.com/ekatamel"
              >
                github.com/ekatamel
              </a>
            </p>
          </div>
        </div>

        <div className="about__form">
          <h5 className="about__headline">SEND ME A MESSAGE</h5>
          <form className="about__inputs">
            <label className="about__label" htmlFor="name">
              <input
                className="about__input"
                id="name"
                type="text"
                placeholder="Your name..."
              />
            </label>
            <label className="about__label" htmlFor="email">
              <input
                className="about__input"
                id="name"
                type="email"
                placeholder="Your email..."
              />
            </label>
            <label className="about__label" htmlFor="message">
              <textarea
                className="about__input"
                name="message"
                id="message"
                placeholder="Your message..."
              ></textarea>
            </label>
            <button className="about__button">Send me message</button>
          </form>
        </div>

        {/* <p className="about__question">Would you like to ask a question?</p>
        <p className="about__question">
          Would you like to find out more about me?
        </p>
        <div className="about__buttons">
          <a href="" className="about__button">
            Download my CV
          </a>
          <a href="" className="about__button">
            about me
          </a>
        </div>
        <div className="about__abouts">
          <p className="about__phone">
            <img className="about__icon" src={phone} alt="" />
            +420 775 992 148
          </p>
          <p className="about__email">
            <img className="about__icon" src={email} alt="" />
            katerinka.melnichuk@gmail.com
          </p>
        </div>
        <div className="about__social"></div> */}
      </div>
    </section>
  );
}

export default About;
