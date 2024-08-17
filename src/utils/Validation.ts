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


