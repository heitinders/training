const StudentList = (props) => {
  const handleDelte = props.deleteMethod;
  return (
    <>
      <h3>Students</h3>
      <ul>
        {props.data?.map((item, index) => (
          <li key={index}>
            {item} - <button onClick={() => handleDelte(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentList;
