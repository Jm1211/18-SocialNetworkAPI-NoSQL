const {Schema, model} = require("mongoose");
const dateFormat = require('../utils/dateformat');

const reactionSchema = require('./Reactions')

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
        id:false,
    }
);

thoughtsSchema.virtual("reactionCount").get(function() {
    return this.reactions.length; //returns number of reactions for each thought 
});

//create mongoose model for Thought schema 
const Thoughts = model ("thoughts", thoughtsSchema);

module.exports = Thoughts; 