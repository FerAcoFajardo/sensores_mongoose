import mongoose from 'mongoose';

const db = mongoose.connection;

const uri = 'mongodb://localhost:27017/sensors';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.once('open', () => {
    console.log('Connected to the database', uri);
});

db.on('error', (err) => {
    console.log('Error connecting to the database', err);
});