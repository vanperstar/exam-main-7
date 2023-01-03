import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

process.env.EXP = '2h'

process.DEFAULT = {}
process.DEFAULT.pagination = {}
process.DEFAULT.pagination.page = 1
process.DEFAULT.pagination.limit = 5


export {
    PORT
}