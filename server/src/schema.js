import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type user {
  id: ID!                # "!" denotes a required field
  name: String
  email: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  users: [user]    # "[]" means this is a list of channels
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addUser(name: String!): user
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
