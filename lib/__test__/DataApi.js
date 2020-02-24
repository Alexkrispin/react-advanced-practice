import DataApi from '../dataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {

  it('Exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.article[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);

  });

  it('Exposes authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirsName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorFirsName);
  });
});