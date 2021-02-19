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

### Tech Stack:

React
Mongo

### Data Structure for a "Production"

```JS
const productionModel = {
  "production_collection":
    [
      {
        "title": "",
        "description": "",
        "scenes":
          [
            {
              "date": "02/13/21",
              "time": "11:00 AM",
              "location": "",
              "notes": "",
              "shots": [
                {
                  "category": "",
                  "categoryImage": "Custome Image || Default Image",
                  "status": "",
                  "description": "",
                  "image": "url",
                  "categoryImage": "",
                  "equipment": [
                    {
                      "name": "",
                      "category": "",
                      "icon": ""
                    }
                  ]
                }
              ],
              "people": [
                {
                  "headshot": "",
                  "name": "",
                  "role": "",
                  "email": "",
                  "phone": ""
                }
              ],

            }
          ]
      }
    ]
}
```
