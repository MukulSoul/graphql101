import express from "express";
import schema from "./schema";
import friend_schema from "./friend_schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL 101");
});

const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const root = { hello: () => "Hello World!!!" };

const friendRoot = {
  createFriend: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    friendDatabase[id] = input;
    return new Friend(id, input);
  },
  friend: () => {
    return {
      id: 5658489489,
      firstName: "Manny",
      lastName: "Henri",
      gender: "Male",
      emails: "me@me.com",
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(
  "/graphql_friend",
  graphqlHTTP({
    schema: friend_schema,
    rootValue: friendRoot,
    graphiql: true,
  })
);

app.listen(8080, () => console.log("Server: localhost:8080/graphql"));
