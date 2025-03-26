import React, { Component } from 'react'

// import './css/settings.css'

import TITLE from "../info/title";
import TopNavbar from './helper/topnavbar';
import SideNavbar from './helper/sidenavbar';
import Footer from '../component/Footer/footer';

import profile_avatar from "./images/profile_avatar.png";


const Page_TITLE = TITLE + " - Settings";
const username = "Vignesh Goswami";
const profileimage = profile_avatar;


export default class Settings extends Component {
    componentDidMount() {
        document.title = Page_TITLE;
    }

    render() {
        return (
            <>
                <SideNavbar username={ username } profileimage={ profileimage }>
                    <div className='container'>
                        Settings
                    </div>
                </SideNavbar>
            </>
        )
    }
}