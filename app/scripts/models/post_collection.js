import Post from 'models/create';

var PostsCollection = Backbone.Collection.extend({
  model: Post,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/richard_imagepost"
});
export default PostsCollection;
