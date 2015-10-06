var Post = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: {
    image: "",
    caption: ""
  }
});
export default Post;
