import express from "express"
import auth from "../middleware/auth.js";

import ctrl from "../controllers/controllers.js";

const router = express.Router();

router.post("/create/teachers", ctrl.createTeachers);

router.post("/create/students", ctrl.createStudents);

router.post("/login/teachers", ctrl.loginTeachers);

router.post("/login/students", ctrl.loginStudents);

router.get("/accounts/teachers", auth, ctrl.accountTeachers);

router.delete("/delete/teachers", auth, ctrl.deleteTeachers);

router.get("/getData/:user", auth, ctrl.getData);

router.put("/update/teachers", auth, ctrl.updateTeachers);


router.get("/accounts/students", auth, ctrl.accountStudents);

router.delete("/delete/students", auth, ctrl.deleteStudents);

router.put("/update/students", auth, ctrl.updateStudents);

export default router;