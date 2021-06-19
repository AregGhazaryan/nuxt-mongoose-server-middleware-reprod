const mongoose = require('mongoose');

export const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
});


export const User = mongoose.model('User', userSchema);
