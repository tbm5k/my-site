import React from 'react'
import { render } from '@testing-library/react';

class Projects extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoad: false,
            list : []
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/tbm5k/repos')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list : data,
                    isLoad : true
                });
                console.log(this.state.list)
            });
    }

    render(){
        return(
            <div>
                <h2>Projects</h2>
                {console.log('changed to Projects page')}
                {  
                    !this.state.isLoad ? <p>Loading...</p> : 
                    <ul>
                        {
                            this.state.list.map(repo => 
                                <li>
                                    Repo : {repo.name}
                                    <a href={repo.html_url}>link</a>
                                </li>    
                            )
                        }
                    </ul>
                }
            </div>
        );
    }
}

export default Projects