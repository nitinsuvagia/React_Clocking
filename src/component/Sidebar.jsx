import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <div className="sidebar">
                <h2>This is Sidebar...</h2>
                <ul className="Menu">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact us</li>
                </ul>
            </div>
        );
    }
}