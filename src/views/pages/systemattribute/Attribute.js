import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from './Modal';
import DataTable from './DataTable';
import AttributeService from './AttributeService';
import Swal from "sweetalert2";
function Attribute() {
 const [items, setItems] = useState([{}]);
 const [attributeList, setAttributeList] = useState([]);
 const [dataTypeList, setDataTypeList] = useState([]);

    useEffect(() => {
      getItems();
      getAttributeType();
    }, []);
  const getItems = () => {
    AttributeService.getAttribute().then((response) => {
      //setItems(response.data.attributelist);
      setAttributeList(response.data.attributelist);
  }).catch(error => {
    console.error('Error fetching data:', error);
  });   
  };
  const getAttributeType = () => {
    AttributeService.getAttributeType().then((response) => {
      setDataTypeList(response.data.codeMasterDtoList);
  }).catch(error => {
    console.error('Error fetching data:', error);
  });   
  };

  const addItemToState = (item) => {
   // setItems([...items, item]);
   AttributeService.addItemToState(item).then((response) => {
  if (response.data.isSuccess == true) {
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new attribute!'
  })
    getItems();
  }
}).catch(error => {
  console.error('Error fetching data:', error);
}); 
   
  };

  const updateState = (item) => {
    // const itemIndex = items.findIndex((data) => data.id === item.id);
    // const newArray = [
    //   ...items.slice(0, itemIndex),
    //   item,
    //   ...items.slice(itemIndex + 1)
    // ];
    // setItems(newArray);
    AttributeService.updateState(item).then((response) => {
      if (response.data.isSuccess == true) {
        Swal.fire({
          icon: 'success',
          title: 'Yay...',
          text: 'You have successfully updated a new attribute!'
      })
        getItems();
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    }); 
  };

  const deleteItemFromState = (id) => {
    // const updatedItems = items.filter((item) => item.id !== id);
    // setItems(updatedItems);
    var senddata = {
      id: id,
      userId: 1,
    };
    AttributeService.deleteItemFromState(senddata).then((response) => {
      debugger
      if (response.ok == true) {
        Swal.fire({
          icon: 'success',
          title: 'Yay...',
          text: 'You have successfully deleted attribute!'
      })
        getItems();
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <>
    <div class="card-header" style={{ margin: "23px" }}>Attribute Details
    <div><ModalForm buttonLabel="Add" addItemToState={addItemToState}  DataTypeList={dataTypeList} attributeList={attributeList}
/></div>
    </div>
    {/* <div><ModalForm buttonLabel="Add User" addItemToState={addItemToState} /></div> */}
    <Container className="App">
      <Row>
        <Col>
          <DataTable
            attributeList={attributeList}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
            DataTypeList={dataTypeList}
          />
        </Col>
      </Row>
    </Container>
    {/* {JSON.stringify(dataTypeList)} */}
    </>
  );
}

export default Attribute;
