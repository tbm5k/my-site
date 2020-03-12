import React from 'react'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            from : 'example@gmail.com',
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
        alert('Email : ' + this.state.from + '\n'+ 'Message : ' + this.state.message);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Your email</label>
                    <input name="from" type="email" class="form-control bg-transparent btn-outline-dark" value={this.state.from} onChange={this.handleInputChange}/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" type="text" class="form-control bg-transparent btn-outline-dark" value={this.state.message} onChange={this.handleInputChange}/>
                </div>
                <input type="submit" className="btn btn-outline-dark" value="submit"/>
            </form>
        );
    }
}

export default Contact