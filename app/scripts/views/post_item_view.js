
var PostItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['post_item'],
  className: 'js_post',


  events:{
    'click .js_edit_post': 'renderEdit',
  'click .js_destroy_post': 'destroyPost',
  'click .submitButton': 'createPost',
  'click .editCancel': 'cancelEdit'
},

render: function(){
  var context = _.extend(this.model.toJSON(), {
    isEditing: this.isEditing});
  this.$el.html(this.template(context));
  return this;
},

renderEdit: function(){
  this.isEditing = true;
  this.render();
  return this;
},

cancelEdit: function(){
  this.isEditing = false;
  this.render();
  return this;
},

destroyPost: function(){
  console.log('destroy');
  this.model.destroy();
},

createPost: function(e){
this.model.save('image', $('.js_editImage').val());
this.model.save('caption', $('.js_editCaption').val());
this.isEditing = false;
this.render();
return this;
},


});
export default PostItemView;
