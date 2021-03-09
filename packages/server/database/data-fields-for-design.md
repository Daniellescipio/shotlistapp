# Data Fields for Design

## People

```JSON
  {
    "name": "Lloyd Reinger",
    "role": "Director",
    "email": "Rachelle84@gmail.com",
    "phone": "652-881-5161",
    "avatar": IMAGE
    "skills": "omnis tempora id"
  }
```

## Production

```JSON
  {
    "name": "Kreiger - Abshire - Handcrafted Frozen Bike",
    "brief": "Aut aspernatur vitae et sunt doloribus soluta atque praesentium enim. Amet et corrupti. Dolores ad et architecto consectetur tempore ut vitae soluta. Aut rem aut veniam dolorem. Aliquam quisquam voluptates aspernatur. Assumenda est non.",
    "thumbnail": IMAGE
    "scenes": SCENES / ADD SCENES
    "shots": SHOTS / ADD SHOT
    "people": PEOPLE / ADD PERSON / REMOVE FROM PRODUCTION
    "equipment": EQUIPMENT / ADD EQUIPMENT
  }
```

## Scene

```JSON
  {
    "location": "Port Meaghan",
    "date": DATE
    "notes": PARAGRAPH
    "thumbnail": IMAGE
  },
```

## Shot

```JSON
 {
    "shotType": DROPDOWN
    "done": CHECKBOX
    "description": PARAGRAPH,
    "scene": SCENE TITLE,
  },
```
