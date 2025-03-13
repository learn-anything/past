# EdgeDB Queries

## Insert GlobalTopic

```
insert GlobalTopic {
  name := "3d-printing",
  prettyName := "3D Printing",
  topicSummary := "3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects from a digital file. Unlike traditional subtractive manufacturing processes that start with a block of material and then cut away the excess to create a part, 3D printing builds up the object layer by layer.",
  public := true
}
```

## Select query for topic

```
select Topic {
  name,
  prettyName,
  public,
  content,
  topicPath,
  notes_count := count(.notes),
  link_count := count(.links),
  notes: {
    content,
    url,
    additionalContent
  },
  links: {
    title,
    url,
    description,
    year,
    topic: {
      name
    },
    globalLink: {
      title,
      url,
      description,
      year,

    },
    relatedLinks: {
     url,
     title
    }
  }
}
filter .name = "physics"
```

## Select User

```
select User {
  email,
  topicsToLearn,
  topicsLearning,
  topicsLearned
}
```

## Update learning status

```
update User
  filter .email = ".."
  set {
    topicsLearning += (select GlobalTopic filter .id = <uuid>"30166980-4e3c-11ee-8ff7-4363a129bf00")
  }
```

## Delete user

```
delete User
filter .email = '..';
```

## Add GlobalGuide to a GlobalTopic

```
update GlobalTopic
  filter .name = "3d-printing"
  set {
    latestGlobalGuide := (insert GlobalGuide {})
  }
```
