# Weedmaps Frontend Code Challenge

**Table of Contents**
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Requirements](#requirements)
  - [Wireframe](#wireframe)
- [Architecture](#architecture)
- [Delivering Your Completed Challenge](#delivering-your-completed-challenge)
- [Weedmaps Location API Documentation](#weedmaps-location-api-documentation)
  - [Parameters](#parameters)
  - [Example Request](#example-request)
  - [Example Response](#example-response)

## Prerequisites
- **You'll need Node >= 9 installed.** We recommend leveraging [nvm](https://github.com/creationix/nvm) to switch Node versions between projects.
- Install [yarn](https://yarnpkg.com/en/docs/install) if you don't already have it
- If you experience issues running tests and you have [watchman](https://facebook.github.io/watchman) installed, you'll want to try installing version `4.7.0` or newer, or troubleshooting [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting).

## Installation
- Ensure you're running a modern version of NodeJS as mentioned above
- From this project root, run `$ yarn install`
- To start the development server, run `$ yarn start`
- Your browser should automatically open at `http://localhost:3000` and will reload on subsequent file changes

## Available Scripts
| Command | Description |
| - | - |
| `yarn start` | Starts the development server |
| `yarn test` | Starts the test runner |
| `yarn eslint` | Runs ESLint |

## Requirements
-  When a User visits this app, they should be presented with a simple UI that allows them to click a button which makes a request to the public Weedmaps Location API [(docs)](#weedmaps-location-api-documentation).
- While the location data is being fetched, an indication of progress should be displayed to the User.
- Upon successful response, the location's `name` and `quote` should be displayed on the page.
- Below the `<LocationHeader/>` any Dispensaries, Deliveries, or Doctors results for the region should be displayed on the page.
- Each Listing entity should be rendered as a `<ListingCard/>` and include the following properties: `name`, `avatar_image`, `rating`, and `distance`.
- Render the Listing rating values as a visual Stars component instead of numerical value without using an external library. The implementation should account for non-whole values and take client-side performance into consideration.
- Convert original vanilla CSS to a CSS-in-JS solution e.g. [styled-components](https://www.styled-components.com/), [emotion](https://emotion.sh/), [glamorous](https://glamorous.rocks/), etc.
- Leverage browser Geolocation API when sending the `latlng` param to Weedmaps Location API
- Implement thorough testing with [Jest](https://facebook.github.io/jest/) and feel free to add any other test utilities to the project such as [Enzyme](http://airbnb.io/enzyme/). Strive for high quality test coverage rather than 100% test coverage.
- Ensure there are no errors when running `$ yarn eslint`
- Attention to detail and an aesthetic sensibility are appreciated just as much clean and performant code. The user-interface should be responsive and free of visual artifacts e.g. text wrapping, UI alignment, etc.

### Wireframe
<img src="wireframe.png" width="60%" />

## Architecture
The state of the application should be managed using [Redux](http://redux.js.org). Components should utilize data from a Redux store and the general structure of the application has been provided and should look similar to the following:

```
src
├── actions
│   ├── actions.test.js
│   └── index.js
├── assets
│   └── logo.png
├── components
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── avatar
│   │   └── avatar.component.js
│   ├── button
│   │   ├── button.component.js
│   │   └── button.css
│   ├── listing_card
│   │   ├── listing_card.component.js
│   │   └── listing_card.css
│   ├── listing_cards
│   │   └── listing_cards.component.js
│   └── location_header
│       └── location_header.component.js
├── constants
│   ├── ActionTypes.js
│   └── config.js
├── index.js
├── reducers
│   ├── index.js
│   ├── location.js
│   └── location.test.js
└── store
    └── configureStore.js
```

## Delivering Your Completed Challenge
- Please do NOT include any `.git` history or `/node_modules` directories
- Zip your completed work and attach it in a reply to the code challenge kick off email you recieved from us. Attaching through Google Drive for Gmail users is also appreciated.

## Weedmaps Location API Documentation
Given a request, this API will return the best matching location along with regions and/or listings that are published for each Listing type `(dispensary|delivery|doctor)`. If a `latlng` parameter is not included, the API will default to GeoIP lookup.

### Parameters
|Name|Description|
|-|-|
|`include[]`|`regions` returns an array of regions for the given location. `regions.listings` includes the top 20 listings for a given region. Example: `include[]=regions.listings`|
|`latlng`|latitude,longitude formatted parameter. Example: `latlng=33.666614,-117.756295`|

#### Example Request
```shell
$ curl -X GET "https://api-g.weedmaps.com/wm/v2/location?include%5B%5D=regions.listings&latlng=33.666614%2C-117.756295" -H "accept: application/json"
```

#### Example Response
```json
{  
  "data":{  
    "location":{  
      "name":"Irvine, CA",
      "city":"Irvine",
      "state":"California",
      "state_abv":"CA",
      "zipcode":"92618",
      "country":"United States",
      "country_code":"US",
      "latitude":33.666614,
      "longitude":-117.756295,
      "place_path":"/earth/us/ca/irvine/92618",
      "is_medical":true,
      "is_recreational":false,
      "quote":"Medically Legal Since 1996",
      "cta_message":null
    },
    "regions":{  
      "dispensary":{  
        "id":166,
        "name":"Irvine",
        "slug":"lake-forest",
        "region_path":"united-states/california/lake-forest",
        "latitude":33.6833610534668,
        "longitude":-117.76638793945312,
        "top_left":{  
          "latitude":33.778546,
          "longitude":-117.8695
        },
        "bottom_right":{  
          "latitude":33.599185,
          "longitude":-117.670184
        },
        "listings":[  
          {  
            "id":51893,
            "wmid":167357775,
            "name":"Unity of ONAC",
            "slug":"unity-of-onac",
            "type":"dispensary",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/dispensaries/000/051/893/avatar/square_fill/1518415004-logo1.PNG"
            },
            "rating":4.72177985948478,
            "distance":3.1487073705186157,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.707932/-117.7794/402/147/map.png",
            "feature_order":1,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          }
        ]
      },
      "delivery":{  
        "id":166,
        "name":"Irvine",
        "slug":"lake-forest",
        "region_path":"united-states/california/lake-forest",
        "latitude":33.6833610534668,
        "longitude":-117.76638793945312,
        "top_left":{  
          "latitude":33.778546,
          "longitude":-117.8695
        },
        "bottom_right":{  
          "latitude":33.599185,
          "longitude":-117.670184
        },
        "listings":[  
          {  
            "id":600,
            "wmid":493289257,
            "name":"Rite Greens Delivery - Irvine",
            "slug":"rite-greens-santa-ana",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/600/avatar/square_fill/1510580513-black_avatar.jpg"
            },
            "rating":4.67595628415301,
            "distance":0.6111154678415925,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.670623/-117.765768/402/147/map.png",
            "feature_order":1,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":308,
            "wmid":677650197,
            "name":"OCPC",
            "slug":"ocpc",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/308/avatar/square_fill/1510580504-OCPC_logo.jpg"
            },
            "rating":4.86875,
            "distance":4.087029229164355,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.712116/-117.80172/402/147/map.png",
            "feature_order":2,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":2603,
            "wmid":323691855,
            "name":"1-866-DELIVERY",
            "slug":"deliverygreens-com-uci-campus",
            "type":"delivery",
            "city":"Irvine",
            "state":"California",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/002/603/avatar/square_fill/1510580696-DELIVERY.jpg"
            },
            "rating":4.89090909090909,
            "distance":4.874538982578642,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.642239/-117.835831/402/147/map.png",
            "feature_order":3,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":8153,
            "wmid":465540215,
            "name":"KUSHAGRAM",
            "slug":"kushagram",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/008/153/avatar/square_fill/1510580904-image.png"
            },
            "rating":4.919,
            "distance":3.8102406790986927,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.682873/-117.819615/402/147/map.png",
            "feature_order":4,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":241,
            "wmid":977643021,
            "name":"SCQM Delivery Irvine UCI",
            "slug":"scqmirvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/241/avatar/square_fill/1514928839-New_Logo.jpg"
            },
            "rating":4.88860759493671,
            "distance":4.170018272330778,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6588951/-117.8282121/402/147/map.png",
            "feature_order":5,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13509,
            "wmid":268569023,
            "name":"949 Insta-Grams",
            "slug":"949insta-grams",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/013/509/avatar/square_fill/1510581181-IMG_0564.JPG"
            },
            "rating":4.98,
            "distance":1.450391573963176,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.646149/-117.750681/402/147/map.png",
            "feature_order":7,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3273,
            "wmid":360055517,
            "name":"Organix Delivery - Irvine",
            "slug":"organix-delivery-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/273/avatar/square_fill/1510580682-ORGANIXround.png"
            },
            "rating":4.75393939393939,
            "distance":3.868092487510716,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.721228/-117.771087/402/147/map.png",
            "feature_order":8,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":12701,
            "wmid":164678418,
            "name":"The Herb Collective - Irvine",
            "slug":"the-herb-collective-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/012/701/avatar/square_fill/1510581097-Herbal22.png"
            },
            "rating":4.98888888888889,
            "distance":1.5605245900842775,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.647426/-117.741982/402/147/map.png",
            "feature_order":10,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":34530,
            "wmid":667904766,
            "name":"The Reserve Delivery",
            "slug":"the-reserve-delivery-5",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/034/530/avatar/square_fill/1520312576-weedmap_logo.png"
            },
            "rating":4.85,
            "distance":3.1579564264029134,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.668288/-117.811175/402/147/map.png",
            "feature_order":11,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13127,
            "wmid":933338427,
            "name":"Herbaculture - Irvine",
            "slug":"herbaculture-huntington-beach",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/013/127/avatar/square_fill/1510581104-circle_logo.png"
            },
            "rating":5.0,
            "distance":3.833320946948388,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.661767/-117.822699/402/147/map.png",
            "feature_order":12,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":4647,
            "wmid":555380772,
            "name":"OC Compassionate Care - Irvine - Medical Only",
            "slug":"oc-compassionate-care-irvine-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/004/647/avatar/square_fill/1510580755-New_Logo_2016.jpg"
            },
            "rating":4.71428571428571,
            "distance":4.60274752475785,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.688463/-117.831918/402/147/map.png",
            "feature_order":13,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":34451,
            "wmid":651470300,
            "name":"Dagga Boy Delivery",
            "slug":"dagga-boy-delivery-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/034/451/avatar/square_fill/1520229341-logo_white_background__1_.jpg"
            },
            "rating":5.0,
            "distance":0.2797417399406311,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.663/-117.754102/402/147/map.png",
            "feature_order":14,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3864,
            "wmid":338253056,
            "name":"QUIKBUDS Premium Delivery - Irvine",
            "slug":"quikbuds-premium-delivery-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/864/avatar/square_fill/1510580774-Smaller_Quikbuds.jpg"
            },
            "rating":5.0,
            "distance":2.071637532355562,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.68201/-117.787211/402/147/map.png",
            "feature_order":15,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":33328,
            "wmid":418248387,
            "name":"Lifted",
            "slug":"lifted-6",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/033/328/avatar/square_fill/1519411959-BLUE_weblink.svg.png"
            },
            "rating":5.0,
            "distance":4.130424154182469,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.642338/-117.821924/402/147/map.png",
            "feature_order":16,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":25661,
            "wmid":508303512,
            "name":"Peoples OC",
            "slug":"peoples-oc-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/025/661/avatar/square_fill/1510581635-sq_roots.png"
            },
            "rating":5.0,
            "distance":2.301472221794469,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.672386/-117.795713/402/147/map.png",
            "feature_order":17,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3410,
            "wmid":231543055,
            "name":"PharmSquad- Irvine",
            "slug":"pharmsquad-irvine-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/410/avatar/square_fill/1515444445-PharmSquad.jpg"
            },
            "rating":4.87147335423198,
            "distance":1.6864534235817616,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.643777/-117.745944/402/147/map.png",
            "feature_order":19,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":128,
            "wmid":107383485,
            "name":"Extraction - Irvine",
            "slug":"happy-dayz-health-solutions",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/128/avatar/square_fill/1510580494-extraction_logo__2_.jpg"
            },
            "rating":4.76279069767442,
            "distance":4.790200255639025,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.657706/-117.838901/402/147/map.png",
            "feature_order":20,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":23933,
            "wmid":299618051,
            "name":"MedExpress",
            "slug":"medexpress",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/023/933/avatar/square_fill/1510581613-1502320539-MedExpress_Logo_2.jpg"
            },
            "rating":4.98939393939394,
            "distance":0.9516415854410667,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.652955/-117.754168/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":19845,
            "wmid":306202226,
            "name":"GrassRoots Collective",
            "slug":"grassroots-collective-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/019/845/avatar/square_fill/1510581370-grassroots-wallpaper-1280x720.jpg"
            },
            "rating":4.99649122807018,
            "distance":4.730619181675368,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.647756/-117.835369/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":97,
            "wmid":377266143,
            "name":"THE REAL OG's Delivery",
            "slug":"the-real-ogs",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/097/avatar/square_fill/1510580483-10414469_1500432906891221_7878428208377117216_n.jpg"
            },
            "rating":4.76077170418006,
            "distance":4.017164988746526,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.719606/-117.785046/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          }
        ]
      },
      "doctor":{  
        "id":121,
        "name":"Lake Forest",
        "slug":"south-oc",
        "region_path":"united-states/california/south-oc",
        "latitude":33.64417266845703,
        "longitude":-117.68512725830078,
        "top_left":{  
          "latitude":33.85132,
          "longitude":-117.721841
        },
        "bottom_right":{  
          "latitude":33.606985,
          "longitude":-117.531023
        },
        "listings":[  
          {  
            "id":15156,
            "wmid":463055189,
            "name":"OnlineMedicalCard.com (100% Online)",
            "slug":"online-medical-cards-113",
            "type":"doctor",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/015/156/avatar/square_fill/1510583519-1507850144-_DC6A371C8295025E76C268BD0FBC648C6F1EDBE0458F8E1642_pimgpsh_fullsize_distr.jpg"
            },
            "rating":4.98518518518518,
            "distance":4.094845143719754,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.719563/-117.788293/402/147/map.png",
            "feature_order":2,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13004,
            "wmid":922970598,
            "name":"420Recs.com- Irvine (100% Online)",
            "slug":"420recs-com-irvine",
            "type":"doctor",
            "city":"Irvine",
            "state":"ca",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/013/004/avatar/square_fill/1510583450-420recs_new.png"
            },
            "rating":5.0,
            "distance":5.718030567243095,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.707156/-117.843002/402/147/map.png",
            "feature_order":3,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":12790,
            "wmid":650445809,
            "name":"MMJ Doctor Online",
            "slug":"mmj-doctor-online-13",
            "type":"doctor",
            "city":"Online",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/012/790/avatar/square_fill/1510583441-logo-for-social.png"
            },
            "rating":5.0,
            "distance":8.825907067221385,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6636696/-117.9097326/402/147/map.png",
            "feature_order":4,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13831,
            "wmid":168060930,
            "name":"RiseUpMD.com (100% Online)",
            "slug":"riseupmd-com-5",
            "type":"doctor",
            "city":"Dana Point",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/013/831/avatar/square_fill/1510583458-riseupmd_logo.jpg"
            },
            "rating":4.9,
            "distance":4.254206839991269,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6469749/-117.6861872/402/147/map.png",
            "feature_order":5,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":14100,
            "wmid":734284480,
            "name":"Hybrid MD Urgent Care",
            "slug":"hybrid-md-urgent-care",
            "type":"doctor",
            "city":"San Clemente",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/014/100/avatar/square_fill/1510583474-Weedmaps_Logo_1_.jpg"
            },
            "rating":4.91428571428571,
            "distance":17.02945050830366,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.4575805/-117.5995842/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":11388,
            "wmid":633579079,
            "name":"MMOC - Medical Marijuana of Orange County",
            "slug":"mmoc-medical-marijuana-of-orange-county",
            "type":"doctor",
            "city":"Dana Point",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":4.88,
            "distance":12.591728017959031,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.4862457/-117.7250086/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13988,
            "wmid":552669943,
            "name":"Holistic On Call",
            "slug":"holistic-on-call-2",
            "type":"doctor",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/doctors/000/013/988/avatar/square_fill/1510583470-17634334_1669409650020544_3089614992377340104_n.jpg"
            },
            "rating":5.0,
            "distance":5.864626666478213,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.7514861/-117.7549295/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":12070,
            "wmid":167219187,
            "name":"Medical Cannabis of Southern California",
            "slug":"medical-cannabis-of-socal",
            "type":"doctor",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":3.53333333333333,
            "distance":6.148743550841112,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6910251/-117.8591337/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"free",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":10972,
            "wmid":116795673,
            "name":"Dr. Ross",
            "slug":"ocmmes",
            "type":"doctor",
            "city":"Mission Viejo",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":3.22857142857143,
            "distance":6.7433899703232365,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.599489/-117.671201/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"free",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":11396,
            "wmid":983084556,
            "name":"The Claudia Jenson MD Center for Integrated Medicine",
            "slug":"the-claudia-jenson-md-center-for-integrated-medicine-2",
            "type":"doctor",
            "city":"San Clemente",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":0.0,
            "distance":17.14219371897104,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.453947/-117.602956/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"free",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13598,
            "wmid":327825982,
            "name":"420EvaluationsOnline-Irvine",
            "slug":"420evaluationsonline-irvine",
            "type":"doctor",
            "city":"Irvine",
            "state":"ca",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":2.4,
            "distance":5.48482546691157,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6776868/-117.8507488/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"free",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":10899,
            "wmid":796380407,
            "name":"Dr. Beard",
            "slug":"dr-gitter-and-drbeard",
            "type":"doctor",
            "city":"Foothill Ranch",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/square_fill/image_missing.jpg"
            },
            "rating":1.0,
            "distance":5.323755842924122,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6740939/-117.664149/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"free",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          }
        ]
      },
      "deliverable":{  
        "id":166,
        "name":"Irvine",
        "slug":"lake-forest",
        "region_path":"united-states/california/lake-forest",
        "latitude":33.6833610534668,
        "longitude":-117.76638793945312,
        "top_left":{  
          "latitude":33.778546,
          "longitude":-117.8695
        },
        "bottom_right":{  
          "latitude":33.599185,
          "longitude":-117.670184
        },
        "listings":[  
          {  
            "id":600,
            "wmid":493289257,
            "name":"Rite Greens Delivery - Irvine",
            "slug":"rite-greens-santa-ana",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/600/avatar/square_fill/1510580513-black_avatar.jpg"
            },
            "rating":4.67595628415301,
            "distance":0.6111154678415925,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.670623/-117.765768/402/147/map.png",
            "feature_order":1,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":308,
            "wmid":677650197,
            "name":"OCPC",
            "slug":"ocpc",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/308/avatar/square_fill/1510580504-OCPC_logo.jpg"
            },
            "rating":4.86875,
            "distance":4.087029229164355,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.712116/-117.80172/402/147/map.png",
            "feature_order":2,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":2603,
            "wmid":323691855,
            "name":"1-866-DELIVERY",
            "slug":"deliverygreens-com-uci-campus",
            "type":"delivery",
            "city":"Irvine",
            "state":"California",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/002/603/avatar/square_fill/1510580696-DELIVERY.jpg"
            },
            "rating":4.89090909090909,
            "distance":4.874538982578642,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.642239/-117.835831/402/147/map.png",
            "feature_order":3,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":8153,
            "wmid":465540215,
            "name":"KUSHAGRAM",
            "slug":"kushagram",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/008/153/avatar/square_fill/1510580904-image.png"
            },
            "rating":4.919,
            "distance":3.8102406790986927,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.682873/-117.819615/402/147/map.png",
            "feature_order":4,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":true
            }
          },
          {  
            "id":241,
            "wmid":977643021,
            "name":"SCQM Delivery Irvine UCI",
            "slug":"scqmirvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/241/avatar/square_fill/1514928839-New_Logo.jpg"
            },
            "rating":4.88860759493671,
            "distance":4.170018272330778,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.6588951/-117.8282121/402/147/map.png",
            "feature_order":5,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13509,
            "wmid":268569023,
            "name":"949 Insta-Grams",
            "slug":"949insta-grams",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/013/509/avatar/square_fill/1510581181-IMG_0564.JPG"
            },
            "rating":4.98,
            "distance":1.450391573963176,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.646149/-117.750681/402/147/map.png",
            "feature_order":7,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3273,
            "wmid":360055517,
            "name":"Organix Delivery - Irvine",
            "slug":"organix-delivery-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/273/avatar/square_fill/1510580682-ORGANIXround.png"
            },
            "rating":4.75393939393939,
            "distance":3.868092487510716,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.721228/-117.771087/402/147/map.png",
            "feature_order":8,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":12701,
            "wmid":164678418,
            "name":"The Herb Collective - Irvine",
            "slug":"the-herb-collective-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/012/701/avatar/square_fill/1510581097-Herbal22.png"
            },
            "rating":4.98888888888889,
            "distance":1.5605245900842775,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.647426/-117.741982/402/147/map.png",
            "feature_order":10,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":34530,
            "wmid":667904766,
            "name":"The Reserve Delivery",
            "slug":"the-reserve-delivery-5",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/034/530/avatar/square_fill/1520312576-weedmap_logo.png"
            },
            "rating":4.85,
            "distance":3.1579564264029134,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.668288/-117.811175/402/147/map.png",
            "feature_order":11,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":13127,
            "wmid":933338427,
            "name":"Herbaculture - Irvine",
            "slug":"herbaculture-huntington-beach",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/013/127/avatar/square_fill/1510581104-circle_logo.png"
            },
            "rating":5.0,
            "distance":3.833320946948388,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.661767/-117.822699/402/147/map.png",
            "feature_order":12,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":4647,
            "wmid":555380772,
            "name":"OC Compassionate Care - Irvine - Medical Only",
            "slug":"oc-compassionate-care-irvine-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/004/647/avatar/square_fill/1510580755-New_Logo_2016.jpg"
            },
            "rating":4.71428571428571,
            "distance":4.60274752475785,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.688463/-117.831918/402/147/map.png",
            "feature_order":13,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":34451,
            "wmid":651470300,
            "name":"Dagga Boy Delivery",
            "slug":"dagga-boy-delivery-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/034/451/avatar/square_fill/1520229341-logo_white_background__1_.jpg"
            },
            "rating":5.0,
            "distance":0.2797417399406311,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.663/-117.754102/402/147/map.png",
            "feature_order":14,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3864,
            "wmid":338253056,
            "name":"QUIKBUDS Premium Delivery - Irvine",
            "slug":"quikbuds-premium-delivery-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/864/avatar/square_fill/1510580774-Smaller_Quikbuds.jpg"
            },
            "rating":5.0,
            "distance":2.071637532355562,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.68201/-117.787211/402/147/map.png",
            "feature_order":15,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":33328,
            "wmid":418248387,
            "name":"Lifted",
            "slug":"lifted-6",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/033/328/avatar/square_fill/1519411959-BLUE_weblink.svg.png"
            },
            "rating":5.0,
            "distance":4.130424154182469,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.642338/-117.821924/402/147/map.png",
            "feature_order":16,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":25661,
            "wmid":508303512,
            "name":"Peoples OC",
            "slug":"peoples-oc-irvine",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/025/661/avatar/square_fill/1510581635-sq_roots.png"
            },
            "rating":5.0,
            "distance":2.301472221794469,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.672386/-117.795713/402/147/map.png",
            "feature_order":17,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":3410,
            "wmid":231543055,
            "name":"PharmSquad- Irvine",
            "slug":"pharmsquad-irvine-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/003/410/avatar/square_fill/1515444445-PharmSquad.jpg"
            },
            "rating":4.87147335423198,
            "distance":1.6864534235817616,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.643777/-117.745944/402/147/map.png",
            "feature_order":19,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":128,
            "wmid":107383485,
            "name":"Extraction - Irvine",
            "slug":"happy-dayz-health-solutions",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/128/avatar/square_fill/1510580494-extraction_logo__2_.jpg"
            },
            "rating":4.76279069767442,
            "distance":4.790200255639025,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.657706/-117.838901/402/147/map.png",
            "feature_order":20,
            "license_type":"medical",
            "package_level":"listing_plus",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":23933,
            "wmid":299618051,
            "name":"MedExpress",
            "slug":"medexpress",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/023/933/avatar/square_fill/1510581613-1502320539-MedExpress_Logo_2.jpg"
            },
            "rating":4.98939393939394,
            "distance":0.9516415854410667,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.652955/-117.754168/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":19845,
            "wmid":306202226,
            "name":"GrassRoots Collective",
            "slug":"grassroots-collective-2",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/019/845/avatar/square_fill/1510581370-grassroots-wallpaper-1280x720.jpg"
            },
            "rating":4.99649122807018,
            "distance":4.730619181675368,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.647756/-117.835369/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          },
          {  
            "id":97,
            "wmid":377266143,
            "name":"THE REAL OG's Delivery",
            "slug":"the-real-ogs",
            "type":"delivery",
            "city":"Irvine",
            "state":"CA",
            "avatar_image":{  
              "small_url":"https://images.weedmaps.com/deliveries/000/000/097/avatar/square_fill/1510580483-10414469_1500432906891221_7878428208377117216_n.jpg"
            },
            "rating":4.76077170418006,
            "distance":4.017164988746526,
            "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.719606/-117.785046/402/147/map.png",
            "feature_order":9999,
            "license_type":"medical",
            "package_level":"basic",
            "online_ordering":{  
              "enabled_for_pickup":false,
              "enabled_for_delivery":false
            }
          }
        ]
      },
      "brand":{  
        "id":1319,
        "name":"South OC Brands",
        "slug":"south-oc-brands",
        "region_path":"united-states/california/orange-county/south-oc-brands",
        "latitude":33.51959991455078,
        "longitude":-117.74037170410156,
        "top_left":{  
          "latitude":33.85132,
          "longitude":-118.607339
        },
        "bottom_right":{  
          "latitude":32.800601,
          "longitude":-117.450531
        }
      },
      "deal":{  
        "id":166,
        "name":"Irvine",
        "slug":"lake-forest",
        "region_path":"united-states/california/lake-forest",
        "latitude":33.6833610534668,
        "longitude":-117.76638793945312,
        "top_left":{  
          "latitude":33.778546,
          "longitude":-117.8695
        },
        "bottom_right":{  
          "latitude":33.599185,
          "longitude":-117.670184
        }
      }
    }
  }
}
```
