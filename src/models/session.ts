import { Schema, model, Document } from 'mongoose';

const schema = new Schema ({
    name: String,
    typeId: String
    // questionsId: [ String ],
    // ownerId: String
});

interface ISession extends Document {
    name: string;
    typeId: string;
    // questionsId: [ string ];
    // ownerId: string;
}

export default model<ISession>('session', schema);