import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "User Name Should Be Greator Than 2 Letters"],
  },
  avatar: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password Should Be More Than 6 Letters"],
    select:false
  },
  
  program: [
    {
      type: Schema.Types.ObjectId,
      ref: "Program",
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(Number(process.env.SALT) || 10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = async function () {
  const token = await jwt.sign(
    {
      _id: this._id,
      email: this.email,
      admin: this.isAdmin,
    },
    process.env.JWT_SECRET
  );

  return token;
};

const User = model("User", UserSchema);
export default User;
