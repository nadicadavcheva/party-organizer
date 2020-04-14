import mongoose from 'mongoose';

const ContactInformation = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        validate: {
            validator: function isValidPhoneNumber(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    mobileNumber: {
        type: Number,
        validate: {
            validator: function isValidPhoneNumber(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    address: {
        type: String,
        maxlength: 150
    },
    city: String,
    postCode: {
        type: Number
    }
})

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    description: {
        type: String,
        trim: true,
        maxlength: 250
    },
    contactInformation: [ContactInformation],
    haveDelivery: {
        type: Boolean
    }

}, {
    timestamps: true
})

export const Company = mongoose.model('company', CompanySchema);