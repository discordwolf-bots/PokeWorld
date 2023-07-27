import { Document, model, Schema } from 'mongoose';

export interface ServerConfig extends Document {
  serverId: string;
}

const ServerConfigSchema = new Schema({
  serverId: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<ServerConfig>('ServerConfig', ServerConfigSchema);
