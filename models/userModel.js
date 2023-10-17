import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
      nome:{
          type: String,
          required: true
      },
      idade:{
          type: Number,
          required: true
      },
      pais:{
          type: String,
          required: true
      }
});
const User = mongoose.model('User',userSchema);

export default User;