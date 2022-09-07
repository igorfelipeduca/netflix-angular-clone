import { Injectable } from '@angular/core';

interface userInterface {
  name: string;
  picUrl: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = this.getUsers();

  constructor() {}

  getUsers() {
    const users: userInterface[] = [
      {
        name: 'igor',
        picUrl:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png',
        id: '1',
      },
      {
        name: 'duca',
        picUrl:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png',
        id: '2',
      },
      {
        name: 'teste',
        picUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        id: '3',
      },
      {
        name: 'lipe',
        picUrl:
          'https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png',
        id: '4',
      },
    ];

    return users;
  }
}
