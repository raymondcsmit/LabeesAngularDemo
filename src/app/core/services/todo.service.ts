import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    endPoint = "todos";
    constructor(private api: ApiService) {
    }

    deleteTodo(id: number) {
        return this.api.delete(`${this.endPoint}/${id}`);
    }

    addTodo(todo: Todo) {
        return this.api.post(`${this.endPoint}`, todo)
    }

    getTodos(): Observable<Todo[]> {
        return this.api.get(`${this.endPoint}`);
    }

    getTodo(id: number): Observable<Todo> {
        return this.api.get(`${this.endPoint}/${id}`);
    }
}