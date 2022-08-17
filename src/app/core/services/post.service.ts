import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    endPoint = "posts";
    constructor(private api: ApiService) {
    }

    deletePost(id: number) {
        return this.api.delete(`${this.endPoint}/${id}`);
    }

    addPost(post: Post) {
        return this.api.post(`${this.endPoint}`, post)
    }

    getPosts(): Observable<Post[]> {
        return this.api.get(`${this.endPoint}`);
    }

    getPost(id: number): Observable<Post> {
        return this.api.get(`${this.endPoint}/${id}`);
    }
}