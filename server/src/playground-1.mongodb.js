

// Select the database to use.
use('graphqlDB');

// Insert a few documents into the sales collection.
// db.getCollection('users').insertMany([
//     {
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "password": null,
//       "googleId": "1234567890",
//       "role": "user",
//       "avatar": "https://example.com/avatars/john.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "password": null,
//       "googleId": "0987654321",
//       "role": "admin",
//       "avatar": "https://example.com/avatars/jane.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Alice Johnson",
//       "email": "alice.johnson@example.com",
//       "password": "hashedpassword123",
//       "googleId": null,
//       "role": "user",
//       "avatar": "https://example.com/avatars/alice.jpg",
//       "verified": "false"
//     },
//     {
//       "name": "Bob Williams",
//       "email": "bob.williams@example.com",
//       "password": null,
//       "googleId": "5678901234",
//       "role": "user",
//       "avatar": "https://example.com/avatars/bob.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Charlie Brown",
//       "email": "charlie.brown@example.com",
//       "password": null,
//       "googleId": null,
//       "role": "moderator",
//       "avatar": "https://example.com/avatars/charlie.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Diana Prince",
//       "email": "diana.prince@example.com",
//       "password": "securepassword456",
//       "googleId": null,
//       "role": "user",
//       "avatar": "https://example.com/avatars/diana.jpg",
//       "verified": "false"
//     },
//     {
//       "name": "Eve Adams",
//       "email": "eve.adams@example.com",
//       "password": null,
//       "googleId": "9081726354",
//       "role": "admin",
//       "avatar": "https://example.com/avatars/eve.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Frank Underwood",
//       "email": "frank.underwood@example.com",
//       "password": null,
//       "googleId": null,
//       "role": "moderator",
//       "avatar": "https://example.com/avatars/frank.jpg",
//       "verified": "true"
//     },
//     {
//       "name": "Grace Kelly",
//       "email": "grace.kelly@example.com",
//       "password": "anotherpassword789",
//       "googleId": null,
//       "role": "user",
//       "avatar": "https://example.com/avatars/grace.jpg",
//       "verified": "false"
//     },
//     {
//       "name": "Henry Ford",
//       "email": "henry.ford@example.com",
//       "password": null,
//       "googleId": "2435467890",
//       "role": "user",
//       "avatar": "https://example.com/avatars/henry.jpg",
//       "verified": "true"
//     }
//   ]
//   );

db.getCollection('users').find({}).pretty();

// db.getCollection("users").updateOne(
//     { _id: ObjectId("6766b132dffee73425a2d12e") }, 
//     { 
//         $set: { manager: ObjectId("6766b132dffee73425a2d12d") } 
//     }
// );

