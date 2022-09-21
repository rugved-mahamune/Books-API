const mongoose = require('mongoose');

//Define a schema for MongoDB to use
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
	},
	released_on: {
		type: Date,
		trim: true,
		required: true
	}
});

module.exports = mongoose.model('Book', BookSchema)