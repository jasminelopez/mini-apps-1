
class MAsterForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      username: '',
      password: '', 
    }
    //Bind the submission to handle the change 
    this.handleChange = this.handleChange.bind(this)

  }

   // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const {email, username, password } = this.state
    alert (`Your registation detail: \n
      Email: ${email}' \n 
      Username: ${username} \n
      Password: ${password}`)
  }

  //render UI here
}

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

ReactDOM.render(<MasterForm />, document.getElementById('root'));