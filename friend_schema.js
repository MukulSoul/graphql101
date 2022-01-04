import {buildSchema} from 'graphql';

const friend_schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }
    type Email {
        email: String
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }

    type Query {
        friend: Friend
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default friend_schema;
