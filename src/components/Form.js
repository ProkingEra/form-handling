import React, { Component } from 'react';

class Form extends Component {

        constructor(props){
            super(props)

            this.state = {
                 username: '',
                 comments: '',
                 topic: ''
            }
        }

        handleUserNameChange = (event) => {

            this.setState ({

                username: event.target.value
                
            })
        }

        handleUserCommmentsChange = (event) => {
            this.setState ({

                comments: event.target.value

            })
        }

        handleUserTopicChange = event => {
            this.setState ({
                topic: event.target.value
            })
        }

        handleSubmit = event => {
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            event.preventDefault()
        }

        

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type='text' 
                        value= {this.state.username} 
                        onChange={this.handleUserNameChange}/>
                </div>
                <div/>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleUserCommmentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleUserTopicChange}>
                        <option value='react' >React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                        <option value='Hello Sir'>Click This</option>
                    </select>
                </div>
                <button type=''>Submit</button>
            </form>
        )
    }
}

export default Form