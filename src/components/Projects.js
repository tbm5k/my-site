import React from 'react'

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
                console.log(data)
                this.setState({
                    list : data,
                    isLoad : true
                });
            });
    }

    render(){
        return(
            <div>
                <h2>Projects</h2>
                {console.log('changed to Projects page')}
                {  
                    !this.state.isLoad ? <p>Loading...</p> : 
                    <div className="card">
                            {
                                this.state.list.map(repo => 
                                    <div className="card-body" key={repo.id}>
                                        <h5 className="card-title">{repo.name}</h5>
                                        <p className="card-text">{repo.description}</p>
                                        <a href={repo.html_url} className="btn btn-primary">View project</a>
                                    </div>
                                )
                            }
                    </div>
                }
            </div>
        );
    }
}

export default Projects