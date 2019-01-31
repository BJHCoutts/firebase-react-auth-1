import firebase from 'firebase'
import React from 'react';
import SignUp from '../../components/session/SignUp';

class LandingPage extends React.Component {
    state = {
        authed: false
    }

    
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('signed in');
                this.setState({ authed: true })
            } else {
                // redirect
            }
        });
    }

    render() {
        console.log(firebase.auth().currentUser)
        
        return <React.Fragment>
            { this.state.authed && <h1>AUTHED!</h1>}
            <header className="App-header">
                <SignUp />
            </header>
        </React.Fragment>
    }
}

export default LandingPage