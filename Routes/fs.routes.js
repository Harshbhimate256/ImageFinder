import express from 'express'
import {fetchingImage} from '../fileSystem/writeOnFile.js'
import {fileRead} from '../fileSystem/readFile.js'
import {fetchAndUpdate} from '../fileSystem/updateFile.js'
import {deleteFile} from '../fileSystem/deleteFile.js'
import protectedRoute from '../Middleware/authProtected.js'
const router = express.Router();

router.post("/create",fetchingImage);
router.get("/read",protectedRoute,fileRead);
router.put("/update",fetchAndUpdate);
router.delete("/delete",deleteFile);

export default router;