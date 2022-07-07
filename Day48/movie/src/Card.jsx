import movie from "./movie.jpeg";

function Card() {
  return (
    <div>
      <img src={movie} alt="" />
      <h2>Centauro (2022)</h2>
      <p>
        Overview : Rafa's hooked on the pure, fiery feelings he gets from speed
        racing, but when his kid's mom gets mixed up with drug dealers, he burns
        rubber to save her.
      </p>
      <p>Director : Daniel Calparsoro</p>
    </div>
  );
}

export default Card;
