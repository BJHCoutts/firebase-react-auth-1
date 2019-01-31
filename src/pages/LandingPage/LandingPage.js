import firebase from 'firebase'
import React from 'react';
import { Redirect } from "react-router-dom";
import SignUp from '../../components/session/SignUp';

class LandingPage extends React.Component {
    state = {
        authed: undefined
    }
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('signed in');
                this.setState({ authed: true })
            } else {
                console.log('not signed in');
                this.setState({ authed: false })
            }
        });
    }

    onSignOut = async () => {
        await firebase.auth().signOut()
        console.log('signed out');
        
    }

    render() {
        const { authed } = this.state

        if(authed === false) {
            return <Redirect to="/signup" />
        }

        const authDebug = <React.Fragment>
            <h1>AUTHED!</h1> <br />
            <button onClick={this.onSignOut}>sign out</button>
        </React.Fragment>
        
        return <React.Fragment>
            {/* <Redirec */}
            { this.state.authed && authDebug}
        </React.Fragment>
    }
}

export default LandingPage