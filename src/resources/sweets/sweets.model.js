import mongoose from 'mongoose';

const IngredientsSchema = new mongoose.Schema({
	ingredient: String
});

const AllergensSchema = new mongoose.Schema({
	allergen: String
});

const Image = new mongoose.Schema({
	image: {
		data: Buffer,
		contentType: String
	}
})

const SweetsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	shape: {
		type: String
	},
	size: {
		type: Number
	},
	images: [Image],
	ingredients: {
		type: [IngredientsSchema]
	},
	allergens: {
		type: [AllergensSchema]
	},
	dateOfExpiry: {
		type: Number
	}
}, {
	timestamps: true
});
export const Sweets = mongoose.model('sweets', SweetsSchema);