import multer from "multer";

import { Router } from "express";
import {
  concentAddAllowOverwrite,
  importCsv,
  concentAdd,
} from "../controller/userController.js";

const route = Router();
const upload = multer({ dest: "uploads/" });

// route.put("/consent", concentAdd);
route.put("/consent", upload.single("csv"), concentAdd);
route.post("/user-import", upload.single("csv"), importCsv);

export default route;
