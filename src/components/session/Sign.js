import firebase from 'firebase'
import { Redirect } from "react-router-dom";
import React from 'react';
import '../../App.css';


class Sign extends React.Component {
    state = {}

    onSignUp = async (e) => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log(response);
        } catch (error) {
            console.error(error.message);
            this.setState({ error: error.message })
        }
    }

    onSignIn = async (e) => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(response);
        } catch (error) {
            console.error(error.message);
            this.setState({ error: error.message })
        }
    }

    onInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
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

    render() {
        const { error, authed } = this.state

        if(authed) {
            return <Redirect to="/" />
        }

        return <div className="App-header">
            <form>
                <h2>Sign Up</h2>
                <input type="email" name="email" onInput={this.onInput} /> <br />
                <input type="password" name="password" onInput={this.onInput} /> <br />
                <input type="submit" value="Sign Up" onClick={this.onSignUp}/>
                {error && <h4 style={{color: 'red'}}>{this.state.error}</h4>}
            </form>

            <form>
                <h2>Sign In</h2>
                <input type="email" name="email" onInput={this.onInput} /> <br />
                <input type="password" name="password" onInput={this.onInput} /> <br />
                <input type="submit" value="Sign In" onClick={this.onSignIn}/>
                {error && <h4 style={{color: 'red'}}>{this.state.error}</h4>}
            </form>
        </div>
    }
}

export default Sign