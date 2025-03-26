import React, { Component } from 'react';
import axios from "axios";

import csrftoken from "./crsf"; 
import CryptoUtils from './crypto';


class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    handleEncryption = (raw) => {
        const crypto = new CryptoUtils();
        const [success, enc] = crypto.encrypt(raw);

        if(!success) {
            this.setState({
                error: "Unable to process data."
            })
        }

        return enc
    }

    handleDecryption = (enc) => {
        const crypto = new CryptoUtils();
        const [success, raw] = crypto.decrypt(enc);

        if(!success) {
            this.setState({
                error: "Unable to process data."
            })
        }

        return raw
    }

    handleRequest = (url, raw) => {
        const enc = this.handleEncryption(raw);
        const response = {
            success: false,
            message: '',
            data: {},
            error: ''
        }

        axios
            .post(
                `${process.env.REACT_APP_BACKEND_URL}/api/${url}`,
                { 
                    "data" : enc 
                },
                { 
                    headers: { 
                        'X-CSRFToken': csrftoken 
                    } 
                }
            )
            .then((res) => {
                if (res.data.success) {
                    response.success = res.data.success;
                    response.message = res.data.message;
                    response.data = this.handleDecryption(res.data.data);
                    response.error = res.data.error;
                } 
                else {
                    response.success = res.data.success;
                    response.message = res.data.message;
                    response.data = res.data.data;
                    response.error = res.data.error;

                    this.setState({ 
                        error: res.data.message
                    });
                }
            })
            .catch((error) => {
                this.setState({ 
                    error: "Error: " + error
                 });
            })
        ;

        return {
            success: response.success,
            message: response.message,
            data: response.data,
            error: response.error
        };
    }
}


export default API;