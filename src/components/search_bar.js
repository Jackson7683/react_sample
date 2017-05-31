// This component is for search bar with youtube api
// import React from 'react'; 

// class SearchBar extends React.Component {
//     render(){
//         return <input></input>
//     }
// }

// A class based component gives the posibility to communicate with other components
// Every class type React Component should contains a render function, and returns a template

// to directly use React.Component, this can be simplified as
import React, { Component } from 'react';   
// this is equal to 
// import React from 'react';
// const Component = React.Component;

class SearchBar extends Component {
    // render(){
    //     return <input onChange = {this.onInputChange} />;
    //     // This could be simplified as :
    //     // return <input onChange = {event => {console.log(event.target.value);}} />
    // }

    // then need to set the events for rendering
    onInputChange(value){    
        // always create events like this: on + element name + event name
        // Provide a reference on the template in the render function, a {} is needed

        this.setState({term: value});   // set state of component
        this.props.onSearchTermChange(value);   // call the callback function in parent level through props
        // console.log(ev.target.value);   //this will log the typed info every time it is changed
    }

    /** state is plain javascript object that used to record and react to user events. 
     *  Each class based component has its own state, whether it is explicitly defined or not
     *  If state changes, it will ask itself and all its children components to be rerendered
     *  Only class based component has state
     *  State needs a constructor to initialize
    */

    constructor(props){ // this is to initialize the class based component and its state
        super(props);   // extends its parent's props

        this.state = { term: '' };   // assigning a new object to this class based component's state
                                     // Only manipulate state like this inside the constructor
    }

    render(){
        // manipulate state outside the constructor need to use this.setState();
        // this.state.term = event.target.value ; // Never do this;
        return (
            <div className="search-bar">
                <input 
                    className="col-md-6"
                    value = {this.state.term}
                    onChange = { ev => this.onInputChange(ev.target.value)} />
                <br />
            </div>
            // this is binding of react, always wrap it in the {}
            // this is also a controlled component, where its value is controlled by state
        );
    }
}

export default SearchBar;

/**
 * Class based Component vs Function based Component
 * 
 * When there is no communication between this component and other component
 * Or say, this is a very simple basic component
 */