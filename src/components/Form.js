import React from 'react';

class Form extends React.Component {
  state = {
    task: '',
    disableButtonTask: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    }, () => {
      this.checkForm();
    })
  }

  checkForm = () => {
    const { task } = this.state;
    if (task) {
      this.setState({ disableButtonTask: false })
    } else {
      this.setState({ disableButtonTask: true })
    }
  }

  render() {
    const { task, disableButtonTask } = this.state;

    return (
      <form>
        <input
          name="task"
          placeholder="write a task"
          value={ task }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disableButtonTask }
        >
          Create a task
        </button>
      </form>
    );
  }
}

export default Form;
