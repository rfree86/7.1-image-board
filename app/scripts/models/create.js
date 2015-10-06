var Post = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: {
    image: "",
    caption: "",
    isEditing: false,
  }
});
export default Post;
