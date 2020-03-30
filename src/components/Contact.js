import React from 'react'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fromAddress : 'example@gmail.com',
            message : 'Type a message...'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){

        const target = event.target
        const name = target.name
    
        this.setState({
            [name] : target.value
        });
    }

    handleSubmit(event){
        //alert('Email : ' + this.state.fromAddress + '\n'+ 'Message : ' + this.state.message);
        event.preventDefault();
        fetch('http://localhost:8080/message', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                'fromAddress':this.state.fromAddress,
                'message': this.state.message
            })
        }).then(res => {
            if(res.status === 200){
                alert("Submitted")
            }else{
                alert("Not submitted, try again")
            }
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Your email</label>
                    <input name="fromAddress" type="email" class="form-control bg-transparent btn-outline-dark" value={this.state.fromAddress} onChange={this.handleInputChange} required/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" type="text" class="form-control bg-transparent btn-outline-dark" value={this.state.message} onChange={this.handleInputChange} required/>
                </div>
                <input type="submit" className="btn btn-outline-dark" value="submit"/>
            </form>
        );
    }
}

export default Contact