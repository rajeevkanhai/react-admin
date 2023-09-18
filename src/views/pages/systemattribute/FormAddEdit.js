import React, { useState, useEffect } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {Form, FormGroup, Label, Input } from "reactstrap";
import Select from 'react-select';
import Swal from "sweetalert2";
function AddEditForm(props) {
  const [form, setValues] = useState({
    name:"",
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    hobby: ""
  });

  const [type, setType] = useState('');
  //const [name, setName] = useState('');
  const DataTypeList = [];
    props.DataTypeList
    .forEach(item => DataTypeList.push({
      value :item.cdId,
      label: item.cdNm1,
    }
    ))

  const [errors, setErrors] = useState({
    name:"",
    type:"",
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    hobby: ""
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name:"",
      type:"",
      first: "",
      last: "",
      email: "",
      phone: "",
      location: "",
      hobby: ""
    };
    if (!form.name) {
      newErrors.name = 'Attribute Name is required';
      valid = false;
    }
    if (!type) {
      newErrors.type = 'Data Type is required';
      valid = false;
    }

    // if (!form.first) {
    //   newErrors.first = 'First Name is required';
    //   valid = false;
    // }
    
    // if (!form.last) {
    //   newErrors.last = 'Last Name is required';
    //   valid = false;
    // }

    // if (!form.email) {
    //   newErrors.email = 'Email is required';
    //   valid = false;
    // } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    //   newErrors.email = 'Invalid email format';
    //   valid = false;
    // }

    // if (!form.phone) {
    //   newErrors.phone = 'Phone is required';
    //   valid = false;
    // }
    // if (!form.location) {
    //   newErrors.location = 'Location is required';
    //   valid = false;
    // }
    // if (!form.hobby) {
    //   newErrors.hobby = 'Hobby is required';
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };


  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = (e) => {
    e.preventDefault();
    if (validateForm()) {
      var senddata={
        name:form.name,
        type:type,
        userId: 1,
      }
    props.addItemToState(senddata);
    props.toggle();
    }
    else{
      //alert('Invalid Form Data')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your attribute name and select data type or close the form!'
    })

    }
  };

  const submitFormEdit = (e) => {
    e.preventDefault();
    var senddata={
      name:form.name,
      type:type,
      userId: 1,
      id: props.editdata.id,
      isActive: props.editdata.isActive,
      isDeleted: props.editdata.isDeleted,
    }
    props.updateState(senddata);
    props.toggle();
  };

  useEffect(() => {
    if (props.editdata) {
      const { name } = props.editdata;
      setValues({ name });
      setType(props.editdata.type);

    }
  }, [props.editdata]);

  const handleChange = e => {
    setType(e.value);
  }

  return (
    <Form onSubmit={props.editdata ? submitFormEdit : submitFormAdd}>
      <div className="row">
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="first">First Name</Label>
        <Input
          type="text"
          className={`form-control ${errors.first && 'is-invalid'}`}
          name="first"
          id="first"
          onChange={onChange}
          value={form.first === null ? "" : form.first}
          // value={form.first}
          placeholder="First Name"
          onKeyUp={validateForm}
        />
        {errors.first && <div className="invalid-feedback">{errors.first}</div>}
      </FormGroup> */}
       {/* <div className="col-md-4 mb-3">
          <label htmlFor="first" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.first && 'is-invalid'}`}
            id="first"
            name="first"
            value={form.first}
            onChange={onChange}
            onKeyUp={validateForm}
          />
          {errors.first && <div className="invalid-feedback">{errors.first}</div>}
        </div> */}
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="last">Last Name</Label>
        <Input
          type="text"
          className={`form-control ${errors.last && 'is-invalid'}`}
          name="last"
          id="last"
          onChange={onChange}
          onKeyUp={validateForm}
          value={form.last === null ? "" : form.last}
          placeholder="Last Name"
        />
        {errors.last && <div className="invalid-feedback">{errors.last}</div>}
      </FormGroup> */}
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="email">Email</Label>
        <Input
          type="email"
          className={`form-control ${errors.email && 'is-invalid'}`}
          name="email"
          id="email"
          onChange={onChange}
          onKeyUp={validateForm}
          value={form.email === null ? "" : form.email}
          placeholder="Email"
        />
         {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </FormGroup> */}
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          className={`form-control ${errors.phone && 'is-invalid'}`}
          name="phone"
          id="phone"
          onChange={onChange}
          onKeyUp={validateForm}
          value={form.phone === null ? "" : form.phone}
          placeholder="ex. 555-555-5555"
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </FormGroup> */}
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="location">Location</Label>
        <Input
          type="text"
          className={`form-control ${errors.location && 'is-invalid'}`}
          name="location"
          id="location"
          onChange={onChange}
          onKeyUp={validateForm}
          value={form.location === null ? "" : form.location}
          placeholder="City, State"
        />
        {errors.location && <div className="invalid-feedback">{errors.location}</div>}
      </FormGroup> */}
      {/* <FormGroup className="col-md-4 mb-3">
        <Label for="hobby">Hobby</Label>
        <Input
          type="text"
          className={`form-control ${errors.hobby && 'is-invalid'}`}
          name="hobby"
          id="hobby"
          onChange={onChange}
          onKeyUp={validateForm}
          value={form.hobby}
          placeholder="Hobby"
        />
         {errors.hobby && <div className="invalid-feedback">{errors.hobby}</div>}
      </FormGroup> */}
      {/* {JSON.stringify(props.attributetypeList)} */}
<FormGroup className="col-md-12 mb-3">
        <Label for="name">Attribute Name</Label>
        <Input
          type="text"
          className={`form-control ${errors.name && 'is-invalid'}`}
          name="name"
          id="name"
          onChange={onChange}
          value={form.name === null ? "" : form.name}
          placeholder="Attribute Name"
          onKeyUp={validateForm}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </FormGroup>
      <FormGroup className="col-md-12 mb-3">
        <Label for="type">Data Type</Label>
         <Select options={DataTypeList} value={DataTypeList.filter(obj => obj.value === type)}
          onChange={handleChange} className={`form-control ${errors.name && 'is-invalid'}`}
          name="type"
          id="type"
         />
         {errors.type && <div className="invalid-feedback">{errors.type}</div>}
      </FormGroup>
      </div>
      {/* <Button style={{ margin:"20px 2px" }}>Submit</Button> */}
      <button className="btn btn-primary">Submit</button>
    </Form>
  );
  
}

export default AddEditForm;
