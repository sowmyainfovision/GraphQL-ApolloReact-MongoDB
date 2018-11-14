import mongoose from "mongoose"

const connection = mongoose.connect('mongodb://localhost:27017/mylib')

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {type:String},
  email: {type:String}
  }, {collection:"users"}); // Defining the collection is redundant in this case. 

const users = mongoose.model('users', usersSchema);


/*const users = [{
  id: 1,
  name: 'user1',
}, {
  id: 2,
  name: 'user2',
}];
let nextId = 3;*/

export const resolvers = {
  Query: {
    users: async () => {
      return (await users.find({}))
    },
  },
  
};
