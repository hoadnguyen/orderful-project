import { Router } from 'express';
import { formatController } from '../controllers/format.controller';
import { documentBodyParser } from '../middlewares/parsers/document-body.parser';
import { formatReqValidator } from '../middlewares/validators/format-req.validator';

const router = Router();
const prefix = '/format';

router.post(prefix, documentBodyParser.parse, formatReqValidator.validate, formatController.format);

export const formatRouter = router;
