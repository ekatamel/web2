function Project(props) {
  // const showContent = (event) => {
  //   console.log(event.target.children.);
  //   // const text = document.querySelector(".portfolio__description");
  //   // text.style.display = "block";
  // };

  // const stopPropagation = (event) => {
  //   event.stopPropagation();
  // };

  return (
    <div
      className="portfolio__project"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <a className="portfolio__link" href="www.com"></a>
      <div className="portfolio__info">
        <p className="portfolio__name">{props.title}</p>
        <p className="portfolio__description">
          <span className="portfolio__stack--bold">About: </span>
          {props.desc}
        </p>
        <p className="portfolio__stack">
          <span className="portfolio__stack--bold">Tech stack: </span>
          {props.stack}
        </p>
        <div className="portfolio__buttons">
          <a href={props.url} className="portfolio__url">
            Visit website
          </a>
          <a
            href={props.source}
            // rel="noreferrer"
            className="portfolio__url"
            // target="_blank"
            // rel="noopener"
          >
            View source
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
