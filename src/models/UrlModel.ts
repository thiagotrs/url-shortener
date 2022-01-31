import { getModelForClass, prop } from '@typegoose/typegoose'

export class Url {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

export const UrlModel = getModelForClass(Url)