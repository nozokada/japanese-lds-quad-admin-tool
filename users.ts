import { auth } from 'firebase-admin'

export const changeEmailAddress = (uid: string, email: string) => {
  console.log('Updating email address for user', uid)
  
  auth().updateUser(uid, {
    email: email
  })
  .then((userRecord) => {
    console.log('Successfully updated user', userRecord.toJSON())
  })
  .catch((error) => {
    console.log('Error updating user:', error)
  })
}
