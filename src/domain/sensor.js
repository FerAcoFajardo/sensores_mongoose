import mongoose from 'mongoose';

import {Log} from './log.js';

const SensorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: [20, 'Name is too long']
    },
    serialNumber: {
        type: String,
        required: true,
        max: [50, 'Serial number is too long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const logSensor = async (sensor) => {
    const log = new Log({
        sensorId: sensor._id
    });

    log.save();
};


SensorSchema.post('save', async (sensor) => {
    logSensor(sensor);
});

SensorSchema.post('findOneAndUpdate', async (sensor) => {
    // console.log(sensor);
    logSensor(sensor);
});

// SensorSchema.post('deleteOne', async (sensor) => {
//     logSensor(sensor);
// });



const Sensor = mongoose.model('Sensor', SensorSchema);

export {Sensor};