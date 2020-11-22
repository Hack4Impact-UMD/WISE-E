import * as contentful from 'contentful';

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

export default contentfulClient;