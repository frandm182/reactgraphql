const express = require('express');
const expressGraphQL = require('express-graphql');


const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(4005, () => {
    console.log('Listening');
});