const {Schema, model, Types} = require("mongoose");
const dateFormat = require('../utils/dateformat');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (Date) => dateFormat(Date),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (Date) => dateFormat(Date),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

thoughtsSchema.virtual("reactionCount").get(function() {
    return this.reactions.length; //returns number of reactions for each thought 
});

//create mongoose model for Thought schema 
const Thoughts = model ("thoughts", thoughtsSchema);

module.exports = Thoughts; 