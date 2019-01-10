import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import VueApollo from 'vue-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-tmdb.herokuapp.com/graphql',
        headers: {
            authorization: 'f1be4bafe6f7cb0cb84f5948c5b75497',
        },
    }),
    cache,
});

export default new VueApollo({
    defaultClient: apolloClient,
    errorHandler: (error) => {
        console.error(error);
    },
});
