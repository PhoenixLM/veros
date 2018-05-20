const db     = require('./db');
const bcrypt = require('bcrypt');
const config = require('config');
const Schema = db.Schema;

const _SALT = config.get('Secrets.salt');

userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, _SALT, function(err, hashed) {
        if(err) return next(err);
        user.password = hashed;
        next();
    });
});

userSchema.statics.authenticate = function(username, password, callback) {
    User.findOne({username: username}, function(err, user) {
        if(err) return callback(err);
        if(!user) {
            var err = new Error('User not found');
            err.status = 401;
            return callback(err);
        }
        bcrypt.compare(password, admin.password, function(err, result) {
            if (err) return callback(err);
            if (result === true) return callback(null, user);
            else {
                var err = new Error('Not authorized')
                err.status = 501;
                return callback(err);
            }
        });
    });
}

const User = db.model('users', userSchema);
module.exports = User;