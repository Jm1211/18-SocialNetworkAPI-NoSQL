const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true, //username must be unique
            required: true, // username is a required field
            trim: true, // removes leading or trailing whitespace
        },
        email: {
            type: String,
            unique: true,
            required: true, //email has to be provided, if not an error message will display 
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ //regex for matching a valid email
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, //MongoDB object ID type
                ref: "thoughts", //referencing Thoughts model
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user", //referencing user model
            },
        ],
    },
    {
        toJSON: {
            virtuals: true, //this allows virtual properties to be included in JSON response 
        },
        id: false,
    }
    
);

userSchema.virtual("friendCount").get(function() {
    return this.friends.length;  //returns the number of friends a user has
});

const User = model("user",userSchema);

module.exports = User;

  
    