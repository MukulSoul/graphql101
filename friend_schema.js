import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: String,
        contacts: [Contact]
    }

    type Contact {
        firstName: String,
        lastName: String
    }

    type Email {
        email: String
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: String,
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String,
        lastName: String
    }

    enum Gender {
        Male
        Female
        Other

    }

    type Query {
        getFriend(id: ID): Friend,
        all: [Friend]
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
console.log(schema);
export { schema };
