import jwt from "jsonwebtoken";
import config from "./config";

const getToken= (admin) => {
    return jwt.sign({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
    }, config.JWT_SECRET, {
        expiresIn: "20h",
    });
};

export {getToken};