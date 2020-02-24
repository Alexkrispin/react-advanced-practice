import React, { Component } from 'react';
import ArticleList from './ArticleList';
import DataApi from '../dataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  articlesActions = {
    lookupAuthors: authorId => this.state.authors[authorId],
  };

  render() {
    return (
     <ArticleList
     articles = {this.state.articles}
     articlesActions={this.articlesActions} 
     />
    );
  }
}

export default App;
