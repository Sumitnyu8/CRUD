import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function ADD({ inputText, handleInput, handleSubmit}) {


    return (
        <>
            <h1 className='display-1 text-center mb-3'>
                Add Data
            </h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Control type="text" name='id' value={inputText.id} onChange={handleInput} hidden/>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name='fname' value={inputText.fname} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name='lname' value={inputText.lname} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name='email' value={inputText.email} onChange={handleInput} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here" name='address' value={inputText.address} onChange={handleInput} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </>
    )
}

export default ADD