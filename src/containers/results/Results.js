import React from 'react'
import './Results.scss';
import {withRouter} from "react-router-dom";
import Search from "../../components/search/Search";
import {serializeSearch} from "../../helpers/url";
import {ListGroup} from "react-bootstrap";

const fields = 'user.name';

const recipes = [
  {user: {name: 'Artyom'}},
  {user: {name: '123'}},
  {user: {name: 'asd'}},
];

export class ResultsComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: serializeSearch(props.history.location.search).query || ''
    };
  }

  updateSearch = (text) => {
    this.setState({searchTerm: text});

    if(!text){
      this.props.history.push(`/search`);
    } else {
      this.props.history.push(`/search?query=${text}`);
    }
  };

  filterByExistFields = (arr, fieldsMap) => {
    return arr.filter(recipe => {
      let keys = fieldsMap.split('.'),
        obj = recipe;

      for (let i=0; i<keys.length; i++) {
        let exist = obj[keys[i]];
        let next = keys[i+1];

        if(exist && next){
          obj = recipe[keys[i]]
        } else if (exist && !next) {
          return this.findCoincidence(
            exist.toLowerCase(),
            this.state.searchTerm.toLowerCase()
          );
        } else {
          return false;
        }
      }
      return false;
    });
  };

  findCoincidence = (string, word) => {
    for(;word.length; word = word.substring(0, word.length-1)){
      if(string.match(word) || !word){
        return true
      }
    }
    return false
  };

  render() {
    const filteredRecipes= this
      .filterByExistFields(recipes, fields)
      .map((el, index) => {
        el.key = index;

        return el
      });

    return (
      <div>
        <Search
          term={this.state.searchTerm}
          updateSearch={this.updateSearch}
        />
        <ListGroup>

        </ListGroup>
        {filteredRecipes.map(email => {
          return (
            <ListGroup.Item  key={email.id}>
              {email.user.name}
            </ListGroup.Item>
          )
        })}
      </div>
    )
  }
}

export const Results = withRouter(ResultsComponent);
