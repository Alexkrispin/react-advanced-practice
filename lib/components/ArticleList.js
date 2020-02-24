import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {
        Object.values(props.articles).map(article => 
          <Article 
            article = {article}
            authors={props.authors[article.authorId]}
            actions={props.articleActions}
          />
          )
      }
    </div>
  );
};

export default ArticleList;
