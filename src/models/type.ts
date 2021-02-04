import { Schema, model, Document } from 'mongoose';

const schema = new Schema ({
    numbers: [ Number ]
});

interface IType extends Document {
    numbers: [ number ];
}

export default model<IType>('type', schema);