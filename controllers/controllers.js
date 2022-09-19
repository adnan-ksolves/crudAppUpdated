import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Teachers from "../models/model1.js";
import Students from "../models/model2.js";


const controllers = {
    createTeachers: async (req, res) => {
        const data = await Teachers.findOne({ email: req.body.email });
        if (data) {
            return res.status(500).send();
        }

        req.body.pass = await bcrypt.hash(req.body.pass, 10);
        const x = new Teachers(req.body);
        await x.save();
        return res.status(201).send();
    },

    createStudents: async (req, res) => {
        const data = await Students.findOne({ email: req.body.email });
        if (data) {
            return res.status(500).send();
        }

        req.body.pass = await bcrypt.hash(req.body.pass, 10);
        const x = new Students(req.body);
        await x.save();
        return res.status(201).send();
    },

    loginTeachers: async (req, res) => {
        const data = await Teachers.findOne({ email: req.body.email });
        if (data) {
            const verify = await bcrypt.compare(req.body.pass, data.pass);
            if (verify) {
                const token = await jwt.sign({ email: data.email }, process.env.ID);
                return res.status(200).cookie("mytoken", token).json({ name: data.name });
            } else {
                return res.status(401).send();
            }
        }
        return res.status(401).send();
    },

    loginStudents: async (req, res) => {
        const data = await Students.findOne({ email: req.body.email });
        if (data) {
            const verify = await bcrypt.compare(req.body.pass, data.pass);
            if (verify) {
                const token = await jwt.sign({ email: data.email }, process.env.ID);
                return res.status(200).cookie("mytoken", token).json({ name: data.name });
            } else {
                return res.status(401).send();
            }
        }
        return res.status(401).send();
    },

    accountTeachers: async (req, res) => {
        try {
            const data = await Teachers.find();
            const udata = await Teachers.findOne(req.token);
            let x = data.filter((val) => {
                return udata.email !== val.email;
            })
            x.unshift(udata);
            res.status(200).json(x);
        } catch (err) {
            res.status(401).send();
        }
    },

    deleteTeachers: async (req, res) => {
        try {
            await Teachers.deleteOne(req.token);
            res.status(200).send();
        } catch (err) {
            res.status(401).send();
        }
    },

    getData: async (req, res) => {
        if (req.params.user === "teachers") {
            const data = await Teachers.findOne(req.token);
            res.status(200).json(data);
        } else {
            const data = await Students.findOne(req.token);
            res.status(200).json(data);
        }
    },

    updateTeachers: async (req, res) => {
        try {
            await Teachers.updateOne(req.token, req.body);
            res.status(200).send();
        } catch (err) {
            console.log(err)
            res.status(401).send();
        }
    },

    accountStudents: async (req, res) => {
        try {
            const data = await Students.find();
            const udata = await Students.findOne(req.token);

            let x = data.filter((val) => {
                return udata.email !== val.email;
            })
            x.unshift(udata);
            res.status(200).json(x);
        } catch (err) {
            res.status(401).send();
        }
    },

    deleteStudents: async (req, res) => {
        try {
            await Students.deleteOne(req.token);
            res.status(200).send();
        } catch (err) {
            res.status(401).send();
        }
    },

    updateStudents: async (req, res) => {
        try {
            await Students.updateOne(req.token, req.body);
            res.status(200).send();
        } catch (err) {
            console.log(err)
            res.status(401).send();
        }
    }
}

export default controllers;



