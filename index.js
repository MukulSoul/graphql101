import express from "express";
import schema from "./friend_schema";
import { graphqlHTTP } from "express-graphql";


const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL 101");
});




app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () => console.log("Server: localhost:8080/graphql"));
