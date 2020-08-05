import mongoose, { Schema, mongo } from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true
    },
    notes: String,
    due: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    list: {
      ref: 'list',
      required: true,
      type: mongoose.Types.ObjectId
    }
  },
  { timestamps: true }
)

itemSchema.index({ list: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
