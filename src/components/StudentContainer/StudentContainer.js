import { React, Component } from "react";
import StudentList from "./StudentList";
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
      friends: ["Johan", "Eli", "Mathew", "Chris", "Bruce"],
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

  handleDelte = (index) => {
    console.log(index);
    const newStudents = this.state.students;
    newStudents.splice(index, 1);
    this.updateStudents(newStudents);
  };

  render() {
    return (
      <>
        <StudentList
          data={this.state.students}
          deleteMethod={this.handleDelte}
        />
        ;
        <StudentList
          data={this.state.friends}
          deleteMethod={this.handleDelte}
        />
        ;
      </>
    );
  }
}

export default StudentContainer;
