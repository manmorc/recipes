import React from 'react';
import './Search.scss';

export default class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: this.props.term
    };
  }

  onChange = (event) => {
    let text = event.target.value;
    this.props.updateSearch(text);
    this.setState({term: text})
  };

  render() {
    return (
      <div className="search">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input
            value={this.state.term}
            onChange={this.onChange}
            type="text" className="form-control"
            placeholder="Username" aria-label="Username"
            aria-describedby="basic-addon1"/>
        </div>
      </div>
    )
  }
}
