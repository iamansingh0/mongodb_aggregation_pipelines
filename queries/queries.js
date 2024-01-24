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

// average age of all users
[
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age"
      }
    }
  }
]

// top 5 most common favorite fruits among users
[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 5
  }
]