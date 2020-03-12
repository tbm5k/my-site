import React from 'react'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            from : '',
            message : 'Type a message...'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){

        const target = event.target
        const value = target.type === "email" ? target.from : target.message;

        this.setState({
            [target.name] : event.target.value
        });
    }

    handleSubmit(event){
        alert('Email : ' + this.state.from + 'Message : ' + this.state.message);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="from" type="email" value={this.state.from} onChange={this.handleInputChange}/>
                    <textarea name="message" type="text" value={this.state.message} onChange={this.handleInputChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Contact