import { GraphQLClient } from "graphql-request";

const graphqlEndpoint = "https://graphql.service.innoventsoft.com/";

const graphqlClient = new GraphQLClient(graphqlEndpoint);

export default graphqlClient;
