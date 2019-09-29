import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from "react-router-dom";

import './Home.scss';
import Search from "../../components/search/Search";

import {serializeSearch} from "../../helpers/url";

class HomeComponent extends React.Component {
  defaultButtonStyles = ['primary', 'main-page-buttons'];
  categories = [
    {title: 'ДЕСЕРТЫ', style: 'fr-button'},
    {title: 'ВЫПЕЧКА', style: 's-button'},
    {title: 'КУЛИНАРИЯ', style: 't-button'},
    {title: 'НАПИТКИ', style: 'f-button'},
  ];
  leftRow = [];
  rightRow = [];

  constructor (props) {
    super(props);
    this.state = {
      query: serializeSearch(props.history.location.search) || ''
    };

    this.splitToSides(this.leftRow, this.rightRow, this.categories)
  }

  splitToSides = (left, right, source) => {
    for(let i=0; i<this.categories.length; i++){
      let side = ((i+2)%2 === 0) ? left : right;
      side.push(this.generateCard(
        source[i].title,
        [...this.defaultButtonStyles, source[i].style],
        i
      ))
    }
  };

  generateCard = (title, styleClasses, index) => {
    return <Button
      className={styleClasses.join(' ')}
      key={index}
      onClick={() => this.selectCategory(title)}
    >{title}</Button>
  };

  selectCategory = (event) => {
    console.log('category: ', event);

    this.updateSearch(event);
  };

  updateSearch = (text) => {
    this.props.history.push(`/search?query=${text}`);
  };

  render() {
    return (
      <div className="home-page container">
        {this.state.query.toString()}
        <Search
          term={this.state.query}
          updateSearch={this.updateSearch}
        />

        <div className="row">
          {this.leftRow}
        </div>
        <div className="row">
          {this.rightRow}
        </div>
      </div>
    )
  }
}

export const Home = withRouter(HomeComponent);
