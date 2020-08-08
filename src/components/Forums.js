import React, { Component } from 'react';

class Forums extends Component {
  
    state = {
        forums: [],
        formInputs: {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        this.getForums()
    }

    getForums = () =>{
        fetch('http://localhost:3000/forums')
            .then(response => response.json())
            .then(json => this.setState({ forums: json}))
        .catch(error => console.error(error))
    }

    removeForums = (event, id, index) => {
        event.preventDefault();
        fetch(`http://localhost:3000/forums/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }
        })
        .then(response => {
          this.setState({
              forums: [
                  ...this.state.forums.slice(0, index),
                  ...this.state.forums.slice(index + 1)
              ]
          })})
    }
  
    updateForums = (event, id) => {
        event.preventDefault();
        fetch(`http://localhost:3000/forums/${id}`, {
        body: JSON.stringify(this.state.formInputs),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
    })
    .then(updatedForum => {
      return updatedForum.json()
    })
    .then(jsonedForum => {
      // reset the form
       this.setState({
         formInputs: {
           name: '',
           description:''
         },
         forums: [jsonedForum, ...this.state.forum]
       })
     })
     .catch(error => console.log(error))
    }

    render () {
    return (
        <div className="forum-container">
                {this.state.forums.map((forums, index) => {
                    return (
                        <div className="forum-info-box">
                            <div className="forum-data">
                                <h3>{forums.name}</h3>
                                <small>{forums.topics}</small>
                                <h5>{forums.description}</h5>
                            </div>
                            <div className="forum-last-post"></div>
                            <div className="forum-options">
                                    <button className="admin-options">Show</button>
                                    <button className="admin-options">Edit</button>
                                    <button onClick={(event) => this.removeForums(event,forums.id, index)} className="admin-options">Delete</button>
                            </div>
                        </div>       
                            )  
                })}
        </div>
    )
  }
}

export default Forums;