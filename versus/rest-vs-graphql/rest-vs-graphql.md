# REST API vs GRAPHQL API

## REST API

Stateless, client-independent API for exchanging data.

### Limitations

**Endpoint for fetching posts:** `GET @ /post`

*Result*:

```js
{
  id: 1,
  title: 'First Post',
  content: '...',
  creator: {...}
}
```

*What if we only need the title and id?*

**Solution 1**: Create a new endpoint (eg: GET @ /post-slim or /post-digest);  
**Problem**: Lots and lots of endpoints & work on developing;

**Solution 2**: Use query parameters (eg: GET @ /post?data=sim)  
**Problem**: API become hards to understand

**Solution 3**: Use GraphQL!  
**Problem:** none

## GRAPHQL API

Stateless, client-independent API for exchanging data with higher query flexibility.

Example: GraphQL request query parameters:

```graphql
{
  query {
    user {
      name
      age
    }
  }
}
```

Parameters:

- `query` operation type (eg: `query, mutation, subscription`)  
  - `query` retrieve data ("GET")
  - `mutation` manipulate data ("POST", "PUT", "PATCH", "DELETE")
  - `subscription` setup a realtime connection via websockets
- `user` operation "endpoint"
- `name, age` requested fields
