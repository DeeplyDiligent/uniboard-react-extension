import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase';


class Navbar extends Component {
    state = {}
    constructor(props){
        super(props);
        this.state.expandedClass = "hidden";        
    }

    logout = () => {
        firebase.auth().signOut();
    }
    
    expandNavbar = () => {
        this.newClass = this.state.expandedClass ==="hidden"?"block":"hidden";
        this.setState({expandedClass:this.newClass})
    }
    
    render() { 
        this.expandedItemsAllClasses = "w-full "+this.state.expandedClass+" flex-grow lg:flex lg:items-center lg:w-auto"
        let logOutButton = (<div></div>);
        if(this.props.loggedIn){
            logOutButton = (<a href='javascript:void(0);' onClick = {this.logout} className="block mt-4 lg:inline-block lg:mt-0 text-purple hover:text-purple-light mr-6">
                Logout
            </a>);
        }
        return (
            <nav className="flex items-center justify-between flex-wrap bg-white p-4 shadow-md bg-black relative w-full flex-no-shrink" style={{zIndex:"500", top:"0px"}} >
                <div className="flex items-center flex-no-shrink text-purple mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-xl tracking-tight">uniboard</span>
                </div>                
                <div className="flex lg:hidden">
                    <button className="flex items-center px-3 py-2 ml-2 border rounded text-purple border-purple hover:text-purple-lighter hover:border-purple-lighter">
                        <Link to='/home/search'>
                            <i className="fas fa-search fill-current"></i>
                        </Link>
                    </button>
                    
                    <button onClick = {this.expandNavbar} className="flex items-center px-3 py-2 ml-2 border rounded text-purple border-purple hover:text-purple-lighter hover:border-purple-lighter">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

               

                <div className={this.expandedItemsAllClasses}>
                    <div className="text-sm lg:flex-grow">
                    {/* was in here before */}
                    </div>
                    <div>
                    <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-purple hover:text-purple-light mr-4">
                        Home
                    </a>

                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-purple hover:text-purple-light mr-4">
                        About
                    </a>
                    <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-purple hover:text-purple-light mr-6">
                        Contact
                    </a>   
                    {logOutButton}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;