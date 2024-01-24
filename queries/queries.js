// How many users are active?

[
    {
      $match: {
        isActive: true
      }
    },
    {
      $count: "Active Users"
    }
]