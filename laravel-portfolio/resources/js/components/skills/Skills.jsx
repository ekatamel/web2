import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillCard from "./SkillCard";
import ToolCard from "./ToolCard";
import skills from "../../data/skills.js";
import { useState } from "react";

function Skills() {
  const [category, setCategory] = useState("front-end");

  const mySkills = skills[category].map((e, i) => {
    if (category === "front-end" || category === "back-end") {
      return (
        <SkillCard key={i} name={e.name} logo={e.logo} skills={e.skills} />
      );
    } else {
      return <ToolCard key={i} name={e.name} logo={e.logo} />;
    }
  });

  const handleClick = (e) => {
    setCategory(e.target.dataset.skill);
    const skillsArray = Array.from(e.target.parentElement.children);
    skillsArray.forEach((el) => {
      el.classList.remove("skills__filter--active");
    });
    e.target.classList.add("skills__filter--active");
  };

  const responsive = {
    mobile: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section className="skills" id="skills">
        <h2 className="skills__title title">MY SKILLS</h2>
        <div className="skills__filters">
          <div
            className="skills__filter skills__filter--active"
            data-skill="front-end"
            onClick={handleClick}
          >
            Front-end
          </div>
          <div
            className="skills__filter"
            data-skill="back-end"
            onClick={handleClick}
          >
            Back-end
          </div>
          <div
            className="skills__filter"
            data-skill="tools"
            onClick={handleClick}
          >
            Tools
          </div>
        </div>
        <div className="skills__container">
          {mySkills}
          <div className="skills__toolcard--hidden"></div>
        </div>
        <div className="skills__carousel">
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}

            showDots={
              category === "front-end" || category === "back-end" ? true : false
            }
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}

            removeArrowOnDeviceType={
              category === "front-end" || category === "back-end"
                ? ["tablet", "mobile"]
                : []
            }
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {mySkills}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Skills;
