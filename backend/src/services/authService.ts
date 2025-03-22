import { authDb } from '../DB/index.ts';

export async function createUserProfile(uid: string, data: any) {
  return authDb.collection('users').doc(uid).set(data);
}
