import React, { useMemo, useState } from 'react';
// import { Table, Button } from 'reactstrap';
import ModalForm from './Modal';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import DeleteConfirmation from '../shared/DeleteConfimation';
import "bootstrap/dist/css/bootstrap.min.css";

function DataTable(props) {

  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deleteid, setdeleteid] = useState('');
  // Handle the displaying of the modal based on type and id
  // const showDeleteModal = (type, id) => {
  //   setType(type);
  //   setId(id);
  //   setFruitMessage(null);
  //   setVegetableMessage(null);

  // if (type === "fruit") {
  //   setDeleteMessage(`Are you sure you want to delete the fruit '${fruits.find((x) => x.id === id).name}'?`);
  // } else if (type === "vegetable") {
  //   setDeleteMessage(`Are you sure you want to delete the vegetable '${vegetables.find((x) => x.id === id).name}'?`);
  // }

  // setDisplayConfirmationModal(true);
  // };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const deleteItem = id => {
    // let confirmDelete = window.confirm('Delete item forever?')
    // if(confirmDelete){
    setDisplayConfirmationModal(false);
    props.deleteItemFromState(id)
    //   fetch('http://localhost:3000/crud', {
    //   method: 'delete',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     id
    //   })
    // })
    //   .then(response => response.json())
    //   .then(item => {
    //     props.deleteItemFromState(id)
    //   })
    //   .catch(err => console.log(err))

    // }
  }

  const DeleteAttribute = row => {
    const message = row.getValue('name');
    alert(message);
    const id = row.getValue('id');
    setDeleteMessage(`Are you sure you want to delete the attribute ${message} ?`);
    setdeleteid(id);
    setDisplayConfirmationModal(true);
  }

  // const items = props.attributeList.map(item => {
  //   return (
  //      <tr key={item.id}>
  //       <td>{item.uuid}</td>
  //       <td>{item.name}</td>
  //       <td>{item.type}</td>
  //       <td>
  //         <div>
  //           <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState} DataTypeList={props.DataTypeList}/>
  //           {' '}
  //           <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>
  //         </div>
  //       </td>
  //     </tr>
  //     )
  //   })




  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: 10,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'uuid', //normal accessorKey
        header: 'UUID',
        size: 350,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        size: 10,
      },
      {
        accessorKey: 'createdBy.firstName',
        header: 'Created by',
        size: 150,
      },
      {
        accessorKey: 'updatedBy.firstName',
        header: 'Updated by',
        size: 100,
      },
      {
        accessorKey: 'createdOn',
        header: 'Created on',
        size: 200,
      },
      {
        accessorKey: 'updatedOn',
        header: 'Updated on',
        size: 200,
      },
      {
        accessorKey: 'createdBy.emailId',
        header: 'Email',
        size: 240,
      },
      // {
      //   accessorKey: '',
      //   header: 'Status',
      //   size: 150,
      // },
    ],
    [],
  );



  return (
    <>
      {/* {JSON.stringify(props.attributeList)} */}

      <MaterialReactTable
        columns={columns}
        data={props.attributeList}
        enableColumnActions={true}
        enableColumnFilters={true}
        enablePagination={true}
        enableSorting={true}
        enableBottomToolbar={true}
        enableTopToolbar={true}
        muiTableBodyRowProps={{ hover: true }}
        enableEditing
        renderRowActions={({ row, table }) => (

          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              {/* <IconButton onClick={() => table.setEditingRow(row)}> */}
              <IconButton>
                <ModalForm buttonLabel="Edit" item={row.original} updateState={props.updateState} DataTypeList={props.DataTypeList} />
                {' '}
                {/* <DeleteConfirmation showModal={displayConfirmationModal}  hideModal={hideConfirmationModal}  message={deleteMessage}  deleteItem={deleteItem} id={row.getValue('id')}/> */}
                {/* < Edit />  */}
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              {/* <IconButton color="error" onClick={() => DeleteAttribute(row.getValue('id'))}> */}
              <IconButton color="error" onClick={() => DeleteAttribute(row)}>
                <Delete />
              </IconButton>
            </Tooltip>

          </Box>

        )}
      // muiTableProps={{
      //   sx: {
      //     border: '1px solid rgba(81, 81, 81, 1)',
      //   },
      // }}
      // muiTableHeadCellProps={{
      //   sx: {
      //     border: '1px solid rgba(81, 81, 81, 1)',
      //   },
      // }}
      // muiTableBodyCellProps={{
      //   sx: {
      //     border: '1px solid rgba(81, 81, 81, 1)',
      //   },
      // }}
      />
      <DeleteConfirmation showModal={displayConfirmationModal} hideModal={hideConfirmationModal} message={deleteMessage} deleteItem={deleteItem} id={deleteid} />
    </>

  )
}

export default DataTable