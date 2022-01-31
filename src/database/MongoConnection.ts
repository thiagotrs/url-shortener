import mongoose from 'mongoose'
import { config } from '../config/config'
export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONNECTION)
			console.log('MongoDB connected')
		} catch (err) {
			console.log('MongoDB Error!!!')
			process.exit(1)
		}
	}
}