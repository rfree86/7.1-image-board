var CreatePostView = Backbone.View.extend({

  tagName: 'div',
  className: "js_create_post",

  template: JST['create_post'],

  events: {
    'submit': 'createPost',
    'click .js_toggle_hidden': 'toggleHidden',
    'click .cancel': 'toggleHidden'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  toggleHidden: function(){
    console.log('hiding');
    this.$('.content').toggleClass('hidden');
  },

  createPost: function(e){
    console.log("hi");
    e.preventDefault();
    this.collection.create(this.serializeForm());
  },

  serializeForm: function(){
    var result= {};
    var inputs = this.$('form').serializeArray();
    inputs.forEach(function(input){
      result[input.name] = input.value;
    });
    return result;
  },


});
export default CreatePostView;
