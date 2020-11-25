import React, { Component } from 'react';
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'

class ContactPage extends Component {
    state = {
        value: "",
    }

    handleChange = (e) => {
        this.setState({ 
            value: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }


    render() {
        return (
            <div className="contact">
                <form action="">
                    <h3>Napisz do nas</h3>
                    <textarea placeholder="Wpisz wiadomość..." name="" id="" onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                when={this.state.value}
                message="Masz niewypełniony formularz" 
                />
            </div>
        );
    }
}

export default ContactPage;