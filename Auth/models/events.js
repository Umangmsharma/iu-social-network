import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		date: {
			type: Date,
			trim: true,
			required: true,
		},
		url: {
			type: String,
			trim: true,
			required: true,
		},
		location: {
			type: String,
            trim: true,
		},
        description: {
			type: String,
			trim: true,
		}
	},
);

export default mongoose.model("Events", eventSchema);
