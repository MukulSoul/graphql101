import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get("/",(req,res)=>{
    res.send("GraphQL 101");
});

const root = {hello: () => "Hello World!!!"};

app.get("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true
}))

app.listen(8080,() => console.log("Server: localhost:8080/graphql"));