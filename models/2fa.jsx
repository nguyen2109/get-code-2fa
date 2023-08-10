import mongoose, { Schema } from "mongoose";

const static2fa = new Schema({
  code: {
    type: String,
    required: [true, "Code2FA is required"],
    trim: false,
    minLength: [6, "Code2FA must have 6 characters"],
    maxLength: [6, "Code2FA must have 6 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Statics2fa =
  mongoose.models.Statics2fa || mongoose.model("Statics2fa", static2fa);
export default Statics2fa;
