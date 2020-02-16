import {GraphQLServer,PubSub} from 'graphql-yoga'
import db from "./db"
import Comments from "./resolvers/Comments"
import Post from "./resolvers/Post"
import User from "./resolvers/User"
import Mutation from "./resolvers/Mutation"
import Query from "./resolvers/Query"
import Subscription from "./resolvers/Subscription"

const pubsub = new PubSub();
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Mutation,
        Subscription,
        User,
        Post,
        Comments
    },
    context:{
        db,pubsub
    }
})   
server.start(()=>{
    console.log("server started ...")
})