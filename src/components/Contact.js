import React from 'react'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : ' '
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event){
        alert('Name : ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Contact