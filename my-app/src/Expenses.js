import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Expenses extends React.Component {
    state ={
        date : new Date(),
        isLoading : true,
        expenses : []
    }

    async componentDidMount(){
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({expenses : body, isLoading : false});
    }
    render() {
        const title = <h3>Add Expense</h3>;

        return (
            <Container>
                {title}
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="text" name="category" id="category" onChange={this.handleChange} />
                </FormGroup>
                
                <FormGroup>
                    <Label for="expenseDate">Expense Date</Label>
                    <DatePicker selected={this.state.date} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="location">Location</Label>
                    <Input type="text" name="location" id="location" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Button color="primary" type ="submit">Submit</Button><span> </span>
                    <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                </FormGroup>  
            </Form>
            </Container>
        );
    }
}