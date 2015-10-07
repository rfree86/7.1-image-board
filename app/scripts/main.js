import PostsCollection from 'models/post_collection';
import CreatePostView from 'views/post_view';
import PostCollectionView from 'views/post_collection_view';

$(document).ready(function(){

var posts = new PostsCollection();

var createPostView = new CreatePostView({collection: posts});
$('#container').html(createPostView.render().el);

var postsCollectionView = new PostCollectionView({collection: posts});
$('#post_container').html(postsCollectionView.render().el);

 posts.fetch();

});
