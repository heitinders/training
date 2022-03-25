import "./Intro.css";

const Intro = () => {
  const students = [
    "Deepa",
    "Janki",
    "Heitinder",
    "Onkar",
    "john",
    "steve",
    "james",
    "molly",
  ];
  return (
    <div className="container">
      <h3>Students</h3>
      <ul>
        {students.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;

/*
 this is called component in react
 this is a functional component 
 jsx 
 funciton compoennt
 class component
 package.json
 npm
 node js
 virtual dom 
 react 

*/
