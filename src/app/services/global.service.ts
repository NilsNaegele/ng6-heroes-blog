import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public searchTerm = new BehaviorSubject('');
  public user = new BehaviorSubject(null);
  public admin = new BehaviorSubject(null);

  public slugify(text: string) {
    return text.toString().toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
  }

  constructor() { }
}
