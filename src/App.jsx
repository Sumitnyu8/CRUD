import { Container } from "react-bootstrap";
import ADD from "./components/ADD/ADD";
import View from "./components/View/View";
import { useEffect, useState } from "react";
import getData from "./utils/helper";
import { nanoid } from 'nanoid';  

function App() {
  const [inputText, setInputText] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
  });

  const uniqueID = nanoid(4);
  console.log(uniqueID);

  const [viewData, setViewData] = useState(getData());

  const handleInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    console.log(e);
    let record = viewData;
    let singleRecord = record.filter((data) => {
      return data.id === e;
    });
    setInputText(singleRecord[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (inputText.id) {
      const records = [...viewData];

      let updatedRecords = records.map((record) => {
        if (record.id === inputText.id) {
          return inputText;
        } else {
          return record;
        }
      });

      setViewData(updatedRecords);
    } else {
      let obj = {
        id: uniqueID,
        ...inputText,
      };
      console.log(obj.id);
      
      setViewData([...viewData, obj]);
      console.log(obj);
    }

    setInputText({
      fname: "",
      lname: "",
      email: "",
      address: "",
    });
  };



  const handleDelete = (id) => {
    // console.log('delete', e);
    const records = [...viewData];
    let deleteRecord = records.filter((rec) => {
      return id !== rec.id;
    });

    setViewData(deleteRecord);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(viewData));
  }, [viewData]);

  return (
    <>
      <Container>
        <ADD
          inputText={inputText}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
        />

        <View
          viewData={viewData}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </Container>
    </>
  );
}

export default App;
