const dynamoose = require("dynamoose");

const Schema = dynamoose.Schema;

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      hashKey: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      rangeKey: true,
      index: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    throughput: { read: 15, write: 5 }
  }
);

module.exports = User = dynamoose.model("User", UserSchema);
