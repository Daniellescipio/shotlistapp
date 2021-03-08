# Shot List Pro

## Description

As a photographer, filmmaker, or producer **Shot List Pro** helps you plan and deliver photo and video productions with confidence. Add your crew, talent, and equipment and then quickly build the scenes, shot list, and call sheets that make up your production. When in the field, easily access contact details of the team, review scene details, and check off shots as the production unfolds.

## Features Included

- List, view, and check off shots while in the field
- Create quick shot templates to make building a shot list a fast and effective
- Easily send group SMS messages to your whole crew
- Create simple call sheets from production details

### Team

- Steve Rodriguez
- Danielle W
- Danny Holland
- Gabe Marchant
- Michelle Brinkerhoff

# Getting Started

Install Yarn

`npm install --global yarn`

Seed Database

`yarn lerna run reset`

Start Backend and Front End

`yarn start`

## Server Routes

### Productions

**Get All**
URL: `/productions`

**Returns:**
All productions via an `Array` of `Objects`

Example

```JSON
[
  {
    "_id": "60451c63dba87827b5a542bb",
    "name": "Muller - Stehr - Tasty Plastic Bacon",
    "brief": "Mollitia a sed fuga veritatis. Omnis architecto praesentium commodi quae iste et ipsam fuga. Maiores laboriosam rem consequatur. Nemo voluptate in perferendis dolorum quos soluta et. Dicta voluptates laudantium.",
    "thumbnail": "http://placeimg.com/640/480/abstract",
    "scenes": [
        "60451c62dba87827b5a5427e",
    ],
    "people": [
        "60451c62dba87827b5a54263",
    ],
    "equipment": [
        "60451c62dba87827b5a54270",
    ],
    "shots": [
        "60451c62dba87827b5a5429b",
    ],
    }
  ]
```

Post
Get One
Delete
