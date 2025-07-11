import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
        alert("All the filed the madatory *** ?? ")
        return;
    }
    this.props.addContactHandler(this.state)
    this.setState({name : "", email: ""})
    console.log(this.state)
  }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Add Contact</h2>
        <form onSubmit={this.add}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={(e)=> this.setState({name : e.target.value})}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={(e)=> this.setState({email : e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
