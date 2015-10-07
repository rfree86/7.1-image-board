var CreatePostView = Backbone.View.extend({

  tagName: 'div',
  className: "js_create_post createPost",

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

  toggleHidden: function(e){
    e.preventDefault();
    this.$('.content').toggleClass('hidden');
    this.$('.js_img').val('');
    this.$('.js_cap').val('');

  },

  createPost: function(e){
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('.js_img').val('');
    this.$('.js_cap').val('');

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
