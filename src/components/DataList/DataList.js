import { useState } from "react";
const DataList = () => {
  const [list, setList] = useState(["Deepa", "Aman", "Onkar"]);
  const [inputval, setInputval] = useState("");

  const handleInputChange = (event) => {
    setInputval(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputval) {
      let currentList = list;
      currentList.push(inputval);
      console.log("currentList", currentList);
      setList(currentList);
      setInputval("");
    }
  };
  //   const [username, setUsername] = useState("Heitinder");
  //   const handleInputChange = (val) => setUsername(val);
  return (
    <>
      <h3>Data List</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" onChange={(event) => handleInputChange(event)} />
      <button onClick={() => handleAddButtonClick()}>Add</button>
    </>
  );
};
export default DataList;
