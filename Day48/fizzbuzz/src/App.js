import FizzBuzz from "./FizzBuzz";

function App() {

  const arrayOfNumbers = []

  const createNumbers = () => {
    for (let i=1; i<=100; i++) {
      arrayOfNumbers.push(i)
    }
  }

  createNumbers()


  
  return (
    <FizzBuzz numbers={arrayOfNumbers}/>
  );
}

export default App;
