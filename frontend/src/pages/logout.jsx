import React, { Component } from 'react'
import './css/logout.css'


const TITLE = "DragonEyeX - Logout";


export default class Logout extends Component {
    componentDidMount() {
        document.title = TITLE;
    }

    render() {
        return (
            <div className='container'></div>
        )
    }
}