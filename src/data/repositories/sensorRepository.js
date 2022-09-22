import {Sensor} from '../../domain/sensor.js';
import * as connection from '../connection.js';

export class SensorRepository {

    async create(sensor) {
        return await sensor.save();
    }

    async findAll() {
        return await Sensor.find();
    }

    async findById(id) {
        return await Sensor.findById(id);
    }

    async update(id, sensor) {
        sensor.updatedAt = new Date();
        return await Sensor.findByIdAndUpdate(id, sensor);
    }

    async delete(id) {
        return await Sensor.findByIdAndDelete(id);
    }

}