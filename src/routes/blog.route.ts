import express from 'express';
import { protect } from '../middleware/auth';
import validate from '../middleware/validate';
import { AddblogHandler, deleteBlogHandler } from '../controller/blog.controller';
import { AddblogSchema, deleteBlogSchema } from '../zod_schema/blog.schema';


const router = express.Router();


router.post('/', protect, validate(AddblogSchema), AddblogHandler);
router.delete('/:blogid', protect, validate(deleteBlogSchema), deleteBlogHandler);


export default router;