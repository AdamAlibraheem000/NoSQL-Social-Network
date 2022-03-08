const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }
  ],
  // friends: [],
},
{
  toJSON:{
    virtuals: true,
  },
  id: false
}
);

// UserSchema.virtual("friendCount").get(function() {
//   return this.thoughts.reduce(
//     (total, thought) => total + thought.replies.length + 1, 0
//   );
// })


const User = model("User", UserSchema);

module.exports = User;