import mongoose from 'mongoose';

const userDataModel = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    phone : {
        type : Number,
        require : true,
    },
    address : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
})

const UserModel = mongoose.model('user', userDataModel)

export default UserModel;