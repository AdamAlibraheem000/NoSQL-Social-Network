const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt:{
        type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    }
})