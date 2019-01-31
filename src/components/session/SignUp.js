import firebase from 'firebase'
import React from 'react';

class SignUp extends React.Component {
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

    onInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { error } = this.state
        return <React.Fragment>
            <form>
                <h2>Sign Up</h2>
                <input type="email" name="email" onInput={this.onInput} /> <br />
                <input type="password" name="password" onInput={this.onInput} /> <br />
                <input type="submit" value="Sign Up" onClick={this.onSignUp}/>
                {error && <h4 style={{color: 'red'}}>{this.state.error}</h4>}
            </form>
        </React.Fragment>
    }
}

export default SignUp