import React, { Component } from 'react';


import './App.css';
import UserForm from './components/UserForm';

class App extends Component {



    render() {
        return ( 
            <div>
                <div className = "col-lg-8 mx-auto text-center mt-5" >
                    <h1> <b> Resume!</b></h1> 
                    <p className = "lead" > Please provide accurate and clear description wherever necessary. </p>
                    <hr/>
                </div>   
                <UserForm / >
                <div className = "col-lg-8 mx-auto text-center mt-5" >
                    <p> &#169; Sukanya Chauhan | 2022</p>
                </div>
                    
            </div>  
        );
    }
}

export default App;