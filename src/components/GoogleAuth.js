import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '873623136444-8o7e68r4k9237sl295ffnuevib1gah59.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render(){
        return(
            <div>
                Google Auth
            </div>
        );
    };
};

export default GoogleAuth;
