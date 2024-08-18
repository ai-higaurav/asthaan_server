# Asthaan Property Listing Server Setup Instructions

## Project Description

This project is an Asthaan property listing server, designed to facilitate the listing and management of real estate properties. The server provides a robust backend for handling property data, user interactions, and search functionality.

Key features of the Asthaan property listing server include:
- Property listing management (add, edit, delete properties)
- Advanced search and filtering options for properties
- User authentication and authorization
- API endpoints for integration with front-end applications
- Data storage and retrieval optimization for large property datasets

This server is ideal for real estate agencies, property management companies, or any business dealing with property listings and requiring a scalable, efficient backend solution.

# Project Setup Instructions

This guide will walk you through the process of setting up, running, and building a Node.js project.

## Getting Started

### 1. Clone the Project

First, clone the project repository to your local machine:

```
git clone https://github.com/ai-higaurav/asthaan_server.git
cd asthaan_server
```


### 2. Install Dependencies

Once you've cloned the project and navigated to the project directory, install the dependencies:

```
npm install
```

This command will install all the dependencies listed in the `package.json` file.

## Running the Project

### Development Mode

To run the project in development mode:

```
npm run dev
```

This command will start the development server, typically with features like hot-reloading enabled.

## Building the Project

To build the project for production:

```
npm run build
```

This command will create a production-ready build of your project in dist folder.

## Running in Production

To run the built project in production mode:

```
npm run start
```

This command will start the server using the production build of your project or you can config your own pm2 manager.




# Asthaan Server API Documentation

## Register Property Endpoint


### Overview
This endpoint is used to register a new property in the system. It requires property details and seller information.

### HTTP Method
POST

### Endpoint Path
`/api/v1/properties/list`

# Property Listing API Documentation

## Overview
This API allows for the creation and management of property listings, specifically for apartments. The listings can include various details such as property type, furnishing status, possession status, and amenities.

## Endpoint

### POST `/api/properties`
Creates a new property listing.

#### Request Body

| Field Name         | Type      | Description                                               | Required | Example                         |
|--------------------|-----------|-----------------------------------------------------------|----------|---------------------------------|
| `listingType`       | `string`  | Type of listing. Options: `sale`, `rent`                  | Yes      | `"sale"`                        |
| `propertyType`      | `string`  | Type of property. E.g., `apartment`, `villa`              | Yes      | `"apartment"`                   |
| `buildingType`      | `string`  | Type of building. E.g., `residential`, `commercial`       | Yes      | `"residential"`                 |
| `furnishedStatus`   | `string`  | Furnishing status. Options: `furnished`, `unfurnished`    | Yes      | `"furnished"`                   |
| `possessionStatus`  | `string`  | Possession status. E.g., `ready to move`, `under construction` | Yes  | `"ready to move"`               |
| `propertyAge`       | `number`  | Age of the property in years                              | Yes      | `5`                             |
| `unitNo`            | `number`  | Unit number of the property                               | Yes      | `100`                           |
| `rooms`             | `number`  | Number of rooms                                           | Yes      | `3`                             |
| `bathroom`          | `number`  | Number of bathrooms                                       | Yes      | `2`                             |
| `area`              | `number`  | Area of the property in square meters                     | Yes      | `100`                           |
| `price`             | `number`  | Price of the property in the local currency               | Yes      | `5000000`                       |
| `totalFloors`       | `number`  | Total number of floors in the building                    | Yes      | `10`                            |
| `floorNo`           | `number`  | Floor number where the property is located                | Yes      | `5`                             |
| `balconyType`       | `string`  | Type of balcony. E.g., `open`, `closed`                   | No       | `"open"`                        |
| `amenities`         | `array`   | List of amenities available. E.g., `gym`, `swimming pool` | No       | `["gym", "swimming pool", "park"]` |
| `waterSource`       | `string`  | Source of water supply. E.g., `municipal corporation`     | Yes      | `"municipal corporation"`       |
| `facingDirection`   | `string`  | Direction the property is facing. E.g., `east`, `west`    | No       | `"east"`                        |
| `additionalDetails` | `string`  | Any additional details about the property                 | No       | `"This is a sample property"`   |
| `images`            | `array`   | Array of image URLs for the property                      | No       | `[]`                            |
| `status`            | `string`  | Status of the listing. E.g., `active`, `inactive`         | Yes      | `"active"`                      |
| `isVerified`        | `boolean` | Verification status of the property listing               | Yes      | `true`                          |
| `state`             | `string`  | State where the property is located                       | Yes      | `"Uttar Pradesh"`               |
| `city`              | `string`  | City where the property is located                        | Yes      | `"Mumbai"`                      |
| `locality`          | `string`  | Locality within the city                                  | Yes      | `"Andheri West"`                |
| `pinCode`           | `number`  | Postal code of the locality                               | Yes      | `400053`                        |
| `phone`             | `number`  | Contact phone number for the listing                     | Yes      | `9876543210`                    |
| `sellerId`          | `string`  | Unique identifier for the seller                         | Yes      | `"66c0793f609072365ca4c245"`    |

#### Example Request
```json
{
  "listingType": "sale",
  "propertyType": "apartment",
  "buildingType": "residential",
  "furnishedStatus": "furnished",
  "possessionStatus": "ready to move",
  "propertyAge": 5,
  "unitNo": 100,
  "rooms": 3,
  "bathroom": 2,
  "area": 100,
  "price": 5000000,
  "totalFloors": 10,
  "floorNo": 5,
  "balconyType": "open",
  "amenities": ["gym", "swimming pool", "park"],
  "waterSource": "municipal corporation",
  "facingDirection": "east",
  "additionalDetails": "This is a sample property",
  "images": [],
  "status": "active",
  "isVerified": true,
  "state": "Uttar Pradesh",
  "city": "Mumbai",
  "locality": "Andheri West",
  "pinCode": 400053,
  "phone": 9876543210,
  "sellerId": "66c0793f609072365ca4c245"
}
```
#### Example Response
```json
{
    "data": [],
    "message": "Property has been listed successfully",
    "statusCode": 200
}

