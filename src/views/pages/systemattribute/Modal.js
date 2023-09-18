import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from './FormAddEdit';
import { Delete, Edit } from '@mui/icons-material';

function ModalForm(props) {
  debugger
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  const label = props.buttonLabel;
  let button = "";
  let title = "";

  if (label === "Edit") {
    button = (
      <Button
        //color="warning"
        onClick={toggle}
        //style={{ float: "left", marginRight: "10px" }}
      >
        {<Edit/>}
      </Button>
    
    );
      // < Edit />
    title = "Edit Attribute";
  } else {
    button = (
      <Button
        color="success"
        onClick={toggle}
        style={{ float: "right", marginRight: "-8px" ,marginTop:"-19px"}}
      >
        {label}
      </Button>
    );
    title = "Add New Attribute";
  }

  return (
    <div>
    
      {button}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={"modal-lg"}
        backdrop={"static"}
        keyboard={false}
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        <ModalBody>
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.attributeList}
            editdata={props.item}
            DataTypeList={props.DataTypeList}

          />
          {/* {JSON.stringify(props.attributeList)} */}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;
