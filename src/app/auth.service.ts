import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  surname: string;
  secondName: string
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    {id: 0, name: 'Ilia',surname: 'pupkin',secondName: 'evgenij', email: 'ilia@gmail.com', password: '123456', role: 'user' },
    {id: 1, name: 'Ivan',surname: 'pupkin',secondName: 'evgenij', email: 'ivan@gmail.com', password: '123456', role: 'superadmin' },
    {id: 2, name: 'Alex',surname: 'pupkin',secondName: 'evgenij', email: 'alex@gmail.com', password: '123456', role: 'admin' },
    {id: 3, name: 'Waliot',surname: 'Waliot',secondName: 'Waliot', email: 'Waliot@gmail.com', password: '123456', role: 'admin' }
  ];

  private currentUser: User | null = null;

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userJson = localStorage.getItem('currentUser');
      if (userJson) {
        this.currentUser = JSON.parse(userJson);
      }
    }
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
}
