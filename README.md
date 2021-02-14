# Shotlist Pro

## Description
Shotlist Pro is a mobile first PWA for planing small to medium video and photo productions. Build your production resources and shotlist on the desktop and then easily review your shotlist and check off completed shots when in the field.

## Features Include
-  Check off shots while in the field
-  Easily send group SMS messages to your whole crew
-  Create simple call sheets from production details


### Production Data Structure

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