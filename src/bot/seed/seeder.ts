import mongoose from 'mongoose';
import config from '../../config';
import intentsModels from '../models/intents';
import synonymModel from '../models/synonyms';

const runner = async () => {
  try {
    const connection = await mongoose.connect(config.DB);
    console.log('Running seed');
    const intents = await import('./intents').then(m => m.intents);
    const synonyms = await import('./synonyms').then(m => m.synonyms);

    await Promise.all(intents.map(item => new intentsModels(item).save()));
    await Promise.all(synonyms.map(item => new synonymModel(item).save()));
  } catch (error) {
    console.log(error);
  }
};

runner().then(() => {
  console.log('done');
});
