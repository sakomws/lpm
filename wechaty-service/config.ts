import 'dotenv/config'

const MONGODB_URI=process.env['MONGODB_URI'] || ''

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set')
}

export {
    MONGODB_URI,
}
