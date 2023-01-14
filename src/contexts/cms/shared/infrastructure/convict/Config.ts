import convict from 'convict';
import { accessSync } from 'fs';
import { F_OK } from 'constants';
import path from 'path';

const config = convict({
    env: {
      doc: 'Environment.',
      format: ['production', 'dev', 'test'],
      env: 'NODE_ENV',
      default: 'dev'
    },
    mongo: {
      url: {
        doc: 'Mongo URL.',
        env: 'MONGO_URL',
        default: 'mongodb://localhost:27017/typescript-ddd-skeleton'
      }
    }
  }),
  files: string[] = [];

const env = config.get('env');
const configPath = path.resolve(__dirname, `../../../../../apps/cms/backend/config/${env}.json`);

accessSync(configPath, F_OK);
files.push(configPath);

config.loadFile(files);

export default config;
