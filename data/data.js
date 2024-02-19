const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Alice",
        email: "alice@example.com",
      },
      {
        name: "Bob",
        email: "bob@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Alice",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Charlie",
        email: "charlie@example.com",
      },
      {
        name: "David",
        email: "david@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Charlie",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Eve",
        email: "eve@example.com",
      },
      {
        name: "Frank",
        email: "frank@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Eve",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Alice",
        email: "alice@example.com",
      },
      {
        name: "Bob",
        email: "bob@example.com",
      },
      {
        name: "Charlie",
        email: "charlie@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Team",
    groupAdmin: {
      name: "Alice",
      email: "alice@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Grace",
        email: "grace@example.com",
      },
      {
        name: "Henry",
        email: "henry@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Grace",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Eve",
        email: "eve@example.com",
      },
      {
        name: "Frank",
        email: "frank@example.com",
      },
      {
        name: "Grace",
        email: "grace@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Family",
    groupAdmin: {
      name: "Eve",
      email: "eve@example.com",
    },
  },
];

module.exports = chats;
