import React, { Component } from 'react';

class List extends Component{
    
    render(){
        const numbers = [1,2,3,4,5];
        return (
            <NumberLists numbers = {numbers} />
        )
        
    }
}
function NumberLists(props){
    const lists = props.numbers.map((number)=>{
        return <li key={number}>{number}</li>
    })
    return (
        <ul>{lists}</ul>
    )
}
export default List