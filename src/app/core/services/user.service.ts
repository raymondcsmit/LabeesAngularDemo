import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    endPoint = "users";
    constructor(private api: ApiService) {
    }

    deleteUser(id: number) {
        return this.api.delete(`${this.endPoint}/${id}`);
    }

    addUser(user: User) {
        return this.api.post(`${this.endPoint}`, user)
    }

    getUsers(): Observable<User[]> {
        return this.api.get(`${this.endPoint}`);
    }

    getUser(id: number): Observable<User> {
        return this.api.get(`${this.endPoint}/${id}`);
    }
}