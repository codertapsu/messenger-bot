import mongoose from 'mongoose';

const synonymSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  keyWord: {
    type: String,
    required: true,
    lowercase: true,
  },
  synonyms: {
    type: Array,
    required: true,
  },
});

const synonyms = mongoose.model('Synonym', synonymSchema);

export default synonyms;
