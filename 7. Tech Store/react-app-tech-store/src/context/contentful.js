import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "4rw6h9yy6xza",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "YN9Xy5B-Q9RsfHqgPNlDfBLRXgSgfwnij5scjCzeFCk",
});
