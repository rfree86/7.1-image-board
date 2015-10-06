var PostItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['post_item'],

  events:{
  'click .js_destroy_post': 'destroyPost'
},

render: function(){
  console.log('item');
  this.$el.html(this.template(this.model.toJSON()));
  return this;
},

destroyPost: function(){
  console.log('destroy');
  this.model.destroy();
}

});
export default PostItemView;
