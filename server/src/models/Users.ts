import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    password: {
      type: String,
      default: null
    },
    googleId: {
      type: String,
      default: null
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin', 'moderator', 'manager']
    },
    avatar: {
      type: String,
      required: true
    },
    verified: {
      type: String,
      required: true,
      enum: ['true', 'false']
    }
  },
  {
    timestamps: true // Automatically includes createdAt and updatedAt fields
  }
);

const User = mongoose.model('user', userSchema);

export default User;
