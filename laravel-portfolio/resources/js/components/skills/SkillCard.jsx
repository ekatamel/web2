function SkillCard(props) {
  return (
    <div className="skills__card">
      <div className="skills__info">
        <img className="skills__logo" src={props.logo} alt="logo" />
        <p className="skills__name">{props.name}</p>
      </div>

      <ul className="skills__list">
        {props.skills.map((e, i) => {
          return (
            <li key={i} className="skills__item">
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillCard;
