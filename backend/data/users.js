import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Empire',
        email: 'empire@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Sheikh',
        email: 'sheikh@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users;