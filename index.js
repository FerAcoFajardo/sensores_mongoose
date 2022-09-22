import {Sensor} from './src/domain/sensor.js';
import {SensorRepository} from './src/data/repositories/sensorRepository.js';



const sensor = new Sensor({
    name: 'Sensor 7',
    serialNumber: '5465a465465ad'
});

const sensorRepository = new SensorRepository();

// await sensorRepository.create(sensor)


// Read all
// sensorRepository.findAll().then((sensors) => {
//     console.log(sensors);
// })
// .catch((err) => {
//     console.log(err);
// });

// Read by id
// sensorRepository.findById('632c227d6f3e2e0f1afef9de').then((sensor) => {
    // console.log(sensor);
// }).catch((err) => {
//     console.log(err);
// });

// Update
sensorRepository.update('632c22b57ce860e5dc391fda', {
    name: 'Sensor 123',
    serialNumber: '123132465454131'
});


// Delete
// sensorRepository.delete('632c2893315412a55d3ce06d').then((sensor) => {
//     console.log(sensor);
// }).catch((err) => {
//     console.log(err);
// });
