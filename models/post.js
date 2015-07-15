var mongoose = require('mongoose'),
	Schema = mongoose.Schema;



var CommentSchema = new Schema({
	body: {
		text: String,
		timestamp: {
			type: Date,
			default: Date.now
		}
	},
});


var AuthorSchema = new Schema({
	author: {
		name: String,
	},
});

var PostSchema = new Schema({
	author:[{
		type: Schema.Types.ObjectId,
    	ref: 'Author'
	}],
	text: String,
	comments: [CommentSchema]
});
var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);
var Author = mongoose.model('Author', AuthorSchema);

module.exports.Post = Post;
module.exports.Comment = Comment;
module.exports.Author = Author;
