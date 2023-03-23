import { Inject, Injectable } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class AppService {
  constructor(@Inject('DATABASE_CONNECTION') public db: Firestore) {


  }

  async getUsers() {
    const snapshot = await this.db.collection('users').get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
    return snapshot.docs.map(doc => doc.data());
  }
  getHello(): string {
    return 'Hello World!';
  }
}
