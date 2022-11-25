import React, { Component } from 'react'
import "./App.css"
class App extends Component {
  state = { 
  name: "",
  email: "",
  password: ""
};


  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  }
  isActive = (event) => {
    this.setState({check:!this.state.check});
}

  handleClick = () => this.setState({ name: "" });


  render() {
    console.log(this.state)
    return (
      <div>
     <label htmlFor="name">Name:
     <input
     value={this.state.name} 
          id="name"
          name="name"
          onChange={this.handleChange}/>
     </label>
     <button onClick={() => {this.setState({name:" "})}}>X</button>



     <label htmlFor="email">Email:
     <input
     value={this.state.email} 
          id="email"
          name="email"
          onChange={this.handleChange}/>
     </label>
     <button onClick={() => {this.setState({email:" "})}}>X</button>




     
     <label htmlFor="password">Password:
     <input
     value={this.state.password} 
     type = {this.state.check?"text":"password"}
          id="password"
          name="password"
          onChange={this.handleChange}/>
     </label>
     <button onClick={() => {this.setState({password:" "})}}>X</button>


     
     <label> <span id = "hide">Show password</span> 
         <input
           type="checkbox"
           checked={this.state.isActive}
           onClick={this.isActive}
         />
       </label>
     </div>
    

     
     
    );
  }
 }
 export default App