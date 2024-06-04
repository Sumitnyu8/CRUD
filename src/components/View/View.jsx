import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function View({ viewData, handleDelete, handleEdit }) {
    return (

        <>
            {
                    < Table striped="columns" >
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                viewData.map((data,index) => {

                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{
                                                data.fname
                                            }</td>
                                            <td>{
                                                data.lname
                                            }</td>
                                            <td>{
                                                data.email
                                            }</td>
                                            <td>{
                                                data.address
                                            }</td>
                                            <td>
                                                <Button variant='primary' onClick={() => handleEdit(data.id)}>Edit</Button>
                                                ||
                                                <Button variant='danger' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </Table >

            }

        </>
    );
}

export default View