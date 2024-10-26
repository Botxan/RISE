const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    NIF: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    province: {
        type: String,
    },
    website: {
        type: String,
        required: true
    },
    lastScanDate: {
        type: Date
    },
    vulnerabilities: {
        type: [String],
        unique: true
    }
})

companySchema.set('toJSON', {
    transform: (doc, ret) => {
        if (ret.lastScanDate instanceof Date) {
            ret.lastScanDate = ret.lastScanDate.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        }
        return ret;
    },
});

module.exports = mongoose.model('Company', companySchema)