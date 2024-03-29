import React, { Component } from 'react'
import { awaitExpression } from '@babel/types';
import AppNav from './AppNav';

export default class Category extends Component {
    state = {
        isLoading : true,
        Categories : []
    }
    async componentDidMount() {
        const response  = await fetch("api/category");
        const body = await response.json();
        this.setState({Categories : body, isLoading : false});
    }
    render() {
        const{Categories, isLoading} = this.state ;
        if(isLoading){
            return (<div>Loading ..</div>
                );
        }
        return (
            <div>
                <h2>Categories</h2>
                {
                    Categories.map(category =>
                        <div id={category.id}>
                            {category.name}
                        </div>)
                }
            </div>
        );
    }
}
