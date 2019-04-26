import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

export let userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String,
    date_created: Date 
});


// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
// };

// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

