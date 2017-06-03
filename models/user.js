const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        maxlength: [30, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
        required: [true, 'Name field is required']
    },
    phone_no: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;