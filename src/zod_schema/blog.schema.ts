import { z } from 'zod';

export const AddblogSchema = z.object({
    body: z.object({
        title: z.string({
        required_error: 'title is required !',
        invalid_type_error: 'title must be a string',
        }),
        message: z.string({
        required_error: 'message is required !',
        invalid_type_error: 'message must be a string',
        }).min(20, 'message must be less than 15 char'),
    }),
    });

    export const deleteBlogSchema = z.object({
        params: z.object({
            blogid: z.string({
            required_error: 'id is required !',
            invalid_type_error: 'blog must be a string',
            }),
        }),
        });

        export type deleteBlogSchemaType = z.infer<typeof deleteBlogSchema>['params'];