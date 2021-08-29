import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      vegetarian: false,
      kosher: false,
      lactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { name, value, type, checked } = event.target;

    type === 'checked'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          {/* TEXT BOX */}
          <input
            type="text"
            name="firstName"
            value={this.value.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />

          {/* TEXT BOX */}
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />

          {/* TEXT BOX */}
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />

          {/* RADIO BUTTON */}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />{' '}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />{' '}
            Female
          </label>
          <br />

          {/* SELECT BOXES */}
          <label>
            <select
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            >
              <option value="Belize City">Belize City</option>
              <option value="Ambergris Caye">Ambergris Caye</option>
              <option value="Placencia">Placencia</option>
              <option value="San Pedro">San Pedro</option>
            </select>
          </label>
          <br />

          {/* CHECKBOX */}
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={this.state.vegetarian}
              onChange={this.handleChange}
            />{' '}
            Vegetarian
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="kosher"
              checked={this.state.kosher}
              onChange={this.handleChange}
            />{' '}
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Lactose Free"
              checked={this.state.lactoseFree}
              onChange={this.handleChange}
            />{' '}
            Lactose Free
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered Information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          You dietary needs: {this.state.vegetarian} {this.state.kosher}{' '}
          {this.state.lactoseFree}
        </p>
      </main>
    );
  }
}

export default App;
