import myphoto from "../img/myself.png";

function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__container">
        <div className="introduction__photo">
          <img className="introduction__img" src={myphoto} alt="" />
        </div>
        <div className="introduction__info">
          <h2 className="introduction__title title">NICE TO MEET YOU</h2>
          <p className="introduction__text">
            Nice to meet you! Since beginning of my journey in IT, I was curious
            about &nbsp;
            <span className="introduction__text--bold">web technologies</span>
            &nbsp; and I was eager to uncover inside &amp; out of webs. Thus,
            after several years of experience as a{" "}
            <span className="introduction__text--bold">Product Owner</span> of
            several web applications, I decided to switch my focus from business
            perspective into functional &amp; technical part of web products and
            become a developer.
          </p>
          <p className="introduction__text">
            In this page I would like to summarise my professional path,
            relevant experience as well as skills &amp; projects I was able to
            develop so far.
          </p>
          <p className="introduction__text">Let me share my story with you!</p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
