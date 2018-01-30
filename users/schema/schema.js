const graphql = require('graphql');
const axios = require('axios');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/company/${parentValue.id}/users`)
                    .then(res => {console.log(res);return res.data;})
                    .catch(err=> console.log(err));
            }
        }        
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString},
        firstName: { type: GraphQLString},
        age: { type: GraphQLInt},
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
               return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                    .then(res => res.data)
                    .catch(err=> console.log(err));
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(res => res.data)
                    .catch(err=> console.log(err));
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(res => res.data)
                    .catch(err=> console.log(err));
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})