import { Schema, model, Document } from 'mongoose';

const schema = new Schema ({
    name: String,
    typeId: Number,
    questionsId: [
        String
    ],
    ownerId: String
});

interface ISession extends Document {
    name: string;
    typeId: number;
    questionsId: [
        string
    ];
    ownerId: string;
}

export default model<ISession>('session', schema);