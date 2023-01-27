import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "seiler.cjs@gmail.com",
        password: bcrypt.hashSync("CJSrv2011!", 10),
        isAdmin: true
    },
    {
        name: "User",
        email:"user@example.com",
        password: bcrypt.hashSync("user123456", 10),
    },
]

export default users