import mongoose from 'mongoose';

const FallbackSchema = new mongoose.Schema({
  sentence: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  guesses: {
    type: Array,
    default: [],
  },
  create_At: {
    type: Date,
    default: Date.now(),
  },
});

const fallbackLogs = mongoose.model('Fallbacks', FallbackSchema);

export { fallbackLogs };
