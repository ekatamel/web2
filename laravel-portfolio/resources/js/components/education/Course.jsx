function Course(props) {
  const skills = props.skills.map((skill, i) => {
    return <li key={i}>{skill}</li>;
  });

  console.log(props);

  return (
    <div className="education__info">
      <a className="education__link" target="_blank" href={props.courseURL}>
        <h5 className="education__name">{props.name}</h5>
      </a>

      <p className="education__description">{props.desc}</p>

      <div className="education__results">
        <ul className="education__skills">
          <span>Topics:</span> {skills}
        </ul>
        <img
          className="education__certificate-img"
          src={props.certificateImg}
        />
        {/* </a> */}
      </div>
    </div>
  );
}

export default Course;
