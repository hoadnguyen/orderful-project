import { Router } from 'express';
import { formatController } from '../controllers/format.controller';
import { formatReqValidator } from '../validators/format-req.validator';

const router = Router();
const prefix = '/format';

router.post(prefix, formatReqValidator.validate, formatController.format);

export const formatRouter = router;
