import { React, Component } from "react";
/*
    class components are know as stateful components 
    aka smart components 

    they have life cycle hooks

    read on lifecycle hooks in react
    what is setState
    can we call setState method inside render method ?
    what is state in react and what is prop in react ?
*/
class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        "Deepa",
        "Janki",
        "Heitinder",
        "Onkar",
        "john",
        "steve",
        "james",
        "molly",
      ],
    };
  }

  componentDidMount() {
    const arr = ["George", "Elizabeth", "Williams"];
    //this.updateStudents(arr);
  }

  updateStudents(newValue) {
    this.setState({
      students: newValue,
    });
  }
  render() {
    return (
      <div>
        <h3>Students</h3>
        <ul>
          {this.state.students.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentContainer;
