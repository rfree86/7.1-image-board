import PostItemView from 'views/post_item_view';

var PostCollectionView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
    console.log('hey');
  },
  render: function() {
    console.log('collection');
    var self = this;
    this.$el.html('');
    this.collection.each(function(post) {
      var view = new PostItemView({model: post});
      self.$el.append(view.render().el);
    });
    return this;
  },
});
export default PostCollectionView;
