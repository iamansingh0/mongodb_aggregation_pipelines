### How many users are active ?

```json
[
    {
      $match: {
        isActive: true,
      },
    },
    {
      $count: "Active Users",
    },
]
```