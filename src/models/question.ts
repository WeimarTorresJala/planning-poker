import { Schema, model, Document } from 'mongoose';

const schema = new Schema ({
    sessionId: String,
    question: String,
    votes: [ [ String, Number ] ]
});

interface IQuestion extends Document {
    sessionId: string;
    question: string;
    questionsId: [ [ string, number ] ];
}

export default model<IQuestion>('question', schema);