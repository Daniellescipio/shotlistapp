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

API EXMPLE DOCS

# Live Inventory API

This file contains an outline of our live inventory API. Each endpoint description contains an overview of the acceptable request method(s), acceptable argument(s), and a brief overview of its purpose.

### Table of Contents

---

1. **Available Makes Endpoint**
   - general overview
   - acceptable methods
   - acceptable arguments
2. **Available Models Endpoint**
   - general overview
   - acceptable methods
   - acceptable arguments
3. **Collections Endpoint**
   - general overview
   - acceptable methods
   - acceptable arguments
4. **Selection Endpoint**
   - general overview
   - acceptable methods
   - acceptable arguments
5. **Submission Endpoint**
   - general overview
   - acceptable methods
   - acceptable arguments

---

# 1. MAKES

### `General Overview`

**`/stacauto/make/`** -- This endpoint returns a JSON Object containing the unique Makes in our database. Example Response:

```JSON
[
  {
    "id": 0,
    "make": "Chevrolet"
  },
  {
    "id": 1,
    "make": "GMC"
  },
  {
    "id": 2,
    "make": "Jeep"
  },
  {
    "..." : "omitting for brevity"
  },
  {
    "id": 17,
    "make": "Volvo"
  },
  {
    "id": 18,
    "make": "Hyundai"
  },
  {
    "id": 19,
    "make": "Ford"
  },
  {
    "id": 20,
    "make": "Kia"
  }
]
```

Each Make ID is accessible through the `id` key. Each make is accessible through the `make` key.

### `Acceptable Methods`

This endpoint only supports **`GET`** requests.

### `Acceptable Arguments`

There are **no** arguments accepted for this endpoint.

# 2. MODELS

### `General Overview`

**`/stacauto/model/<make:str>/`** -- This endpoint returns a JSON Object containing the unique Models that match the specified Make in our database. Example Response to `/stacauto/model/toyota/`:

```JSON
[
  {
    "id": 0,
    "model": "RAV4"
  },
  {
    "id": 1,
    "model": "Camry"
  },
  {
    "id": 2,
    "model": "Highlander"
  },
  {
    "id": 3,
    "model": "Corolla"
  },
  {
    "id": 4,
    "model": "Tacoma"
  },
  {
    "id": 5,
    "model": "Tundra"
  },
  {
    "id": 6,
    "model": "Sienna"
  },
  {
    "id": 7,
    "model": "4Runner"
  }
]
```

Each model ID is accessible through the `id` key. Each model is accessible through the `model` key.

### `Acceptable Methods`

This endpoint only accepts **`GET`** requests.

### `Acceptable Arguments`

The `make` must be specified for any request sent to this endpoint. If you want to retrieve all models associated with **Honda**, the request must be sent to `/stacauto/model/honda/`. If you want to retrieve all models associated with **Land Rover,** the request must be sent to `/stacauto/model/landrover/`.

# 3. COLLECTIONS

### `General Overview`

**`/stacauto/collections/?make=<make_name>&model=<model_name>`** -- This endpoint returns a JSON Object containing all the vehicles that match the specified Make and Model in our database. Example Response to `/stacauto/collections/?make=toyota&model=camry`:

```JSON
[
  {
    "id": 0,
    "Make": "Toyota",
    "Model": "Camry",
    "Year": "2018",
    "Price": "19142.0",
    "VIN": "4T1B11HK3JU010934"
  },
  {
    "id": 1,
    "Make": "Toyota",
    "Model": "Camry",
    "Year": "2012",
    "Price": "11484.0",
    "VIN": "4T1BF1FK0CU023843"
  },
  {
    "id": 2,
    "Make": "Toyota",
    "Model": "Camry",
    "Year": "2012",
    "Price": "9900.0",
    "VIN": "4T1BF1FK2CU131025"
  },
  {
    "id": 3,
    "Make": "Toyota",
    "Model": "Camry",
    "Year": "2016",
    "Price": "14900.0",
    "VIN": "4T1BF1FK3GU579828"
  },
  {
    "id": 4,
    "Make": "Toyota",
    "Model": "Camry",
    "Year": "2017",
    "Price": "16800.0",
    "VIN": "4T1BF1FK5HU361584"
  }
]
```

Each vehicle ID is accessible through the `id` key. Additionally, car-specific information is available through the `Make`, `Model`, `Year`, `Price`, and `VIN` keys.

### `Acceptable Methods`

This endpoint only accepts **`GET`** requests.

### `Acceptable Arguments`

Each request to this endpoint must contain both `make` and `model` arguments. If anything less or more than this is passed, an error is thrown. If you want to retrieve all toyota corollas, the request should be `/stacauto/collections/?make=toyota&model=corolla`. If you want to retrieve all Range Rover Evoque's, the request should be `/stacauto/collections/?make=range+rover&model=evoque`.

# 4. SELECTION

### `General Overview`

**`/stacauto/selection/<vin:str>/`** -- This endpoint returns a JSON Object containing information specific to the one unique vehicle that matchs the specified VIN in our database. Example Response to `/stacauto/selection/4T1BF1FK3GU579828/`:

```JSON
{
  "DealerId": "MP7634",
  "Stock #": "G20802A",
  "VIN": "4T1BF1FK3GU579828",
  "New/Used": "U",
  "Year": "2016",
  "Make": "Toyota",
  "Model": "Camry",
  "Model Code": "2540",
  "Body": "4D Sedan",
  "Transmission": "6-Speed Automatic",
  "Series": "SE",
  "Series Detail": "nan",
  "Door Count": "4",
  "Odometer": "64460.0",
  "Engine Cylinder Ct": "4",
  "Engine Displacement": "2.5",
  "Drivetrain Desc": "FWD",
  "Colour": "Parisian Night Pearl",
  "Interior Color": "Black",
  "Price": "14900.0",
  "MSRP": "nan",
  "Inventory Date": "09/12/2020",
  "Certified": "nan",
  "Description": "2016 Toyota Camry SE with Backup Camera/ Rear View Camera, ... omitting for brevity... Proudly serving the Charlotte, Fort Mill, Rock Hill, Huntersville, Gastonia, and Columbia areas.",
  "Features": "6 Speakers|... omitting for brevity...|Trip computer|Front Bucket Seats|Front Center Armrest|Split folding rear seat|Passenger door bin|7.0J x 17\" Alloy Wheels|Variably intermittent wipers|Backup Camera/ Rear View Camera|Bluetooth|USB Port|Local Trade",
  "City MPG": "25.0",
  "Highway MPG": "35.0",
  "Photo Count": "27.0",
  "Photos": "['http://vehicle-photos-published.vauto.com/95/67/3c/e5-cce4-497f-964b-d7241ac06e15/image-1.jpg', ...omitting for brevity..., 'http://vehicle-photos-published.vauto.com/95/67/3c/e5-cce4-497f-964b-d7241ac06e15/image-26.jpg', 'http://vehicle-photos-published.vauto.com/95/67/3c/e5-cce4-497f-964b-d7241ac06e15/image-27.jpg']",
  "Photos Last Modified Date": "10/1/2020 1:05:35 AM",
  "Dealer Name": "Williams Buick GMC",
  "Engine": "2.5L I4 SMPI DOHC",
  "Fuel": "Gasoline",
  "Age": "19",
  "Dealer Address": "8201 South Blvd",
  "Dealer City": "Charlotte",
  "Dealer Region": "NC",
  "Dealer Postal Code": "28273"
}
```

Each piece of information outlined above is accessible through its Key name. For example, if you want to access the `Photos`, you should access the **`Photos`** key. This same process holds for the the rest of the keys.

### `Acceptable Methods`

This endpoint only accepts `GET` requests.

### `Acceptable Arguments`

Each request to this endpoint must contain a VIN argument as follows: `/stacauto/selection/<vin:str>/`. Therefore, each request should be for a unique vehicle. This endpoint is particularly useful for showing an individual Vehicle Description Page and retrieving information specific to someones test drive.

# 5. SUBMISSION

### `General Overview`

**`/stacauto/selection/<vin:str>/`** -- This endpoint returns a JSON Object containing a **success message**, the **time** (in seconds) it took for the request to process and the **unique order ID**. Example _Success_ Response to `/stacauto/submission/` with an example payload:

```JSON
// PAYLOAD
{
    "submitted_on": "9/14/2020, 8:21:29 AM",
    "vehicle_name": "2020 Dodge Charger",
    "vehicle_vin": "WBXHU7C34J5L05952",
    "vehicle_price": "19,755",
    "page_url": "http://127.0.0.1:5501/gerry-wood-kia-vdp.htm",
    "dealership": "Gerry Wood Dodge of Salisbury",
    "test_drive_date": "09-16-20",
    "test_drive_time": "1:00 PM",
    "first_name": "first",
    "last_name": "last",
    "email": "stacauto@stacauto.com",
    "phone": "1234567890"
}

// RESPONSE
{
    "message": "success",
    "order_id": "MP3789_6",
    "knack_timer": "2.5628134356811643"
}
```

If an incorrect or unavailable VIN is passed, the following error is returned:

```JSON
{
    "LINE NUMBER": 553,
    "FILENAME": "/home/ubuntu/stacauto-v2/stacProject/stacApp/views.py",
    "func_name": "submissionTesting",
    "type": "IndexError",
    "all": "(<class 'IndexError'>, IndexError('index 0 is out of bounds for axis 0 with size 0',), <traceback object at 0x7f7b0bd3ae08>)"
}
```

### `Acceptable Methods`

This endpoint only accepts `POST` requests.

### `Acceptable Arguments`

The body sent to this endpoint must be structured as follows:

```JSON
{
    "submitted_on": "DATE AND TIME",
    "vehicle_name": "VEHICLE NAME",
    "vehicle_vin": "VIN",
    "vehicle_price": "PRICE",
    "page_url": "URL",
    "dealership": "DEALERSHIP",
    "test_drive_date": "TEST DRIVE DATE",
    "test_drive_time": "TEST DRIVE TIME",
    "first_name": "FNAME",
    "last_name": "LNAME",
    "email": "EMAIL",
    "phone": "PHONE"
}
```

Each of these items is currently expected by the backend and, if one is not passed, an error is thrown.
