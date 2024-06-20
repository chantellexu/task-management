const mongoose = require('mongoose');

const staffSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
