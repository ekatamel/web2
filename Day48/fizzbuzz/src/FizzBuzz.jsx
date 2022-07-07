import { useEffect } from "react";
import { useState } from "react";

function FizzBuzz({ numbers }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(numbers);
  }, [array]);

  console.log(array);

  return (
    <ul>
      {array.length > 0 &&
        array.map(
          (item, i) =>
            item % 15 === 0 ? (
              "fizzbuzz"
            ) : item % 3 === 0 ? (
              "fizz"
            ) : item % 5 === 0 ? (
              "buzz"
            ) : (
              <li>{item}</li>
            )

          //   if (item % 5 === 0 && item % 3 === 0) {
          //     return <li>FizzBuzz</li>;
          //   } else if (item % 3 === 0) {
          //     return <li>Fizz</li>;
          //   } else if (item % 5 === 0) {
          //     return <li>Buzz</li>;
          //   } else {
          //     return <li>{item}</li>;
          //   }
        )}
    </ul>
  );
}

export default FizzBuzz;
