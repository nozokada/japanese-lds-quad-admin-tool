import { cert, initializeApp } from 'firebase-admin/app'
import { changeEmailAddress } from './users'

const app = initializeApp({
  credential: cert(process.env['FIREBASE_JAPANESE_LDS_QUAD_CREDENTIALS']!)
})
console.log(app.options)
