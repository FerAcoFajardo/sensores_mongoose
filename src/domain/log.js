import mongoose from 'mongoose';

// Schema for logs
const LogSchema = new mongoose.Schema({
    sensorId: {
        type: String,
        required: true,
        max: 20
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model('Log', LogSchema);

export {Log};