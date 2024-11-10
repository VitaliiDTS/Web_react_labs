import mongoose from 'mongoose';

const stadiumSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    seats: { type: Number, required: true }
});

const Stadium = mongoose.model('Stadium', stadiumSchema);

export default Stadium;
