import mongoose from 'mongoose';
import z from 'zod'

export const userValidation= z.object({
    userId:z
    .string({
        required_error:"userId is required",
        invalid_type_error:"userId must be a string",

    }),
    name:z
    .string({
        required_error:"name is required",
        invalid_type_error:"name must be a string",
        }),
    
    email:z
    .string({
        required_error:"email is required",
        invalid_type_error:"email must be a string",
        }),

    password:z.
    string({
        required_error:"password is required",
        invalid_type_error:"password must be a string",
        }),

    phone:z
    .string({
        required_error:"phone is required",
        invalid_type_error:"phone must be a string",
        }),
    
    emailVerification:z
    .boolean({
        required_error:"emailVerification is required",
        invalid_type_error:"emailVerification must be a boolean",
    }),

    phoneVerification:z
    .boolean({
        required_error:"phoneVerification is required",
        invalid_type_error:"phoneVerification must be a boolean",
    })
})

// property validations
const listingTypeEnum = ["sale", "rent"];

const propertyTypeEnum = ["apartment", "house", "villa"];

const buildingTypeEnum = ["residential", "commercial"];

const furnishedStatusEnum = ["furnished", "semi furnished", "full furnished"];

const possessionStatusEnum = ["ready to move", "under constraction"];

const waterSourceEnum = ['municipal corporation', 'borewell', 'tank'];

const facingDirectionEnum = ['north', 'south', 'east', 'west', 'north-east', 'north-west', 'south-east', 'south-west'];

const balconyTypeEnum = ["open", "closed", "covered"]

const amenitiesEnum = ['swimming pool', 'gym', 'park', 'security', 'playground', 'club house']



export const propertyVal = z.object({

    listingType: z.
        string({
            required_error: 'listing type is required',
            invalid_type_error: 'listing type must be a string',
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => listingTypeEnum.includes(val), { message: "listing type must be sale or rent" }),

    propertyType: z.
        string({
            required_error: 'property type is required',
            invalid_type_error: 'property type must be a string',
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => propertyTypeEnum.includes(val), { message: "property type must be apartment , house or villa" }),

    buildingType: z.
        string({
            required_error: 'building type is required',
            invalid_type_error: 'building type must be a string',
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => buildingTypeEnum.includes(val), { message: "building type must be residential or commericial" }),

    furnishedStatus: z.
        string({
            required_error: 'furnished status is required',
            invalid_type_error: 'furnished status must be a string',
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => furnishedStatusEnum.includes(val), { message: "furnished status must be furnished or semi furnished or full furnished" }),

    possessionStatus: z.
        string({
            required_error: 'possession status is required',
            invalid_type_error: 'possession status must be a string',
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => possessionStatusEnum.includes(val), { message: "possession status must be ready to movoe or under constraction" }),

    propertyAge: z.
        number({
            required_error: 'property age is required',
            invalid_type_error: 'property age must be a number',
        })
        .min(1, "Property  must be 0-1 years old")
        .max(100, "Property must not be more than 100 years old"),

    unitNo: z.
        number({
            required_error: 'unit no is required',
            invalid_type_error: 'unit no must be a number',
        })
        .min(1, "Minimum unit must be 1")
        .max(100, "Maximum 100 unit is allowed only"),

    rooms: z.
        number({
            required_error: 'Number of rooms is required',
            invalid_type_error: 'Number of rooms must be a number',
        })
        .min(1, "Minimum 1 room is required")
        .max(100, "Maximum room limit is 100"),

    bathroom: z
        .number({
            required_error: "No of bathroom is required",
            invalid_type_error: "No of bathroom  must be a number"
        })
        .min(1, "Minimum 1 bathroom is required")
        .max(100, "Maximum bathroom limit is 100"),

    area: z
        .number({
            required_error: "Area is required",
            invalid_type_error: "Area must be a number"
        })
        .min(1, "Minimum 1 SqFt. area is required")
        .max(100, "Maximum SqFt. area is 1000 SqFt."),

    price: z
        .number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number"
        })
        .min(1, "Price must be more than 1 Rs")
        .max(10000000, "Maximum price limit is 1 Cr"),

    totalFloors: z
        .number({
            required_error: "Total no of floor is required",
            invalid_type_error: "Total no of floor must be a number"
        })
        .min(1, "Minimum 1 floor is required")
        .max(100, "Maximum floor limit is 100"),

    balconyType: z
        .string({
            required_error: "Balcony type is required",
            invalid_type_error: "Balcony must be a string"
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => balconyTypeEnum.includes(val), { message: "Balcony must be open , covered or none" }),

    amenities: z.array(
        z.string({
            required_error: "Amenities is required",
            invalid_type_error: "Amenities must be a string"
        })
            .transform(val => val.toLocaleLowerCase())
            .refine(val => amenitiesEnum.includes(val), {
                message: "Each amenity must be one of the following: 'swimming pool', 'gym', 'park', 'security', 'playground', 'club house'"
            }))
            .refine((arr) => arr.every((item) => typeof item === 'string' && item !== ''), {
                message: "Invalid amenities array. Please provide a valid array of strings."
            }),

    waterSource: z
        .string({
            required_error: "Water source is required",
            invalid_type_error: "Water source must be a string"
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => waterSourceEnum.includes(val), { message: "Water source must be muncipal , borewell or tank" }),

    facingDirection: z
        .string({
            required_error: "Facing direction is required",
            invalid_type_error: "Facing direction must be a string"
        })
        .transform((val) => val.toLowerCase())
        .refine((val) => facingDirectionEnum.includes(val), { message: "Facing direction must be valid" }),

    additionalDetails: z
        .string({
            required_error: 'Property discription is required',
            invalid_type_error: 'Property discription must be a string'
        }),

    state: z
        .string({
            required_error: 'State is required',
            invalid_type_error: "State must be a string",
        })
        .transform((val) => val.toLowerCase())
        .refine(val => val !=='' && val !==undefined ,{message:"State can't be empty or undefined"}),

    city: z
        .string({
            required_error: 'City is required',
            invalid_type_error: "City must be a string"
        })
        .transform((val) => val.toLowerCase())
        .refine(val => val !=='' && val !==undefined ,{message:"City can't be empty or undefined"}),

    locality: z
        .string({
            required_error: 'Locality is required',
            invalid_type_error: "Locality must be a string"
        })
        .transform((val) => val.toLowerCase())
        .refine(val => val !=='' && val !==undefined ,{message:"Locality can't be empty or undefined"}),

    pinCode: z
        .number({
            required_error: 'Pincode is required',
            invalid_type_error: "Pincode must be a number"
        })
        .int()
        .gte(100000)
        .lte(999999)
        .refine((val) => /^\d{6}$/g.test(val.toString()), { message: "Pin code must be 6 digit" }),

    phone: z.number({
        required_error: 'Phone number is required',
        invalid_type_error: "Phone number must be a number"
    })
    .int("A valid phone number is required")
    .refine((value) => value.toString().length === 10, "Phone number must be 10 digits"),

    sellerId: z.
        string({
            required_error: 'Seller id is required',
            invalid_type_error: "Seller id must be a string"
        })
        .refine((val) => mongoose.Types.ObjectId.isValid(val), { message: 'Seller id must be a valid Object Id' }),


})

export const images = z.array(
    z.string(),
    {
        required_error: 'Images are required',
        invalid_type_error: "Images must be an array of strings"
    }
)
.min(1,"At lest one image is required")
.max(5, "Maximum 5 images are allowed")
