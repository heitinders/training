const StudentList = (props) => {
  return (
    <>
      <h3>Students from a child component</h3>
      <ul>
        {props?.students?.map((item, index) => (
          <li key={index}>
            {item} - <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentList;
