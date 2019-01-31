import firebase from 'firebase'
import React from 'react';
import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
    state = {
        authed: undefined
    }
    
    componentDidMount() {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('signed in');
                this.setState({ authed: true })
            } else {
                console.log('not signed in');
                this.setState({ authed: false })
            }
        });

        this.setState({unsubscribe})
    }

    componentWillUnmount() {
        this.state.unsubscribe()
    }

    onSignOut = async () => {
        await firebase.auth().signOut()
        console.log('signed out');
    }

    render() {
        const { authed } = this.state

        if (authed === undefined) return null

        if(authed === false) {
            return <Redirect to="/signup" />
        }

        const authDebug = <React.Fragment>
            <h1>Authed!</h1> <br />
            <h1>Welcome {firebase.auth().currentUser.email}!</h1> <br />
            <button onClick={this.onSignOut}>sign out</button>
        </React.Fragment>
        
        return <main className="App-main">
            { this.state.authed && authDebug}
            <h1>Amazingly magical site content goes here.</h1>
        </main>
    }
}

export default LandingPage