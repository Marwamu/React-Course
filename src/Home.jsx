import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Marwa");
  const [age, setAge] = useState(25);
  const handelClick = () => {
    setName("Sara");
    setAge(20);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handelClick}>Click me!</button>
    </div>
  );
};

export default Home;
