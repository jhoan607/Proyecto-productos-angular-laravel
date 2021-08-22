import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from './../../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }


  Url='http://127.0.0.1:8000/api/categorias';

  getCategories(){
    return this.http.get<Category[]>(this.Url);
  }

  createCategory(category:Category){
    return this.http.post<Category>(this.Url, category);
  }

  getCategoryId(id:number){
    return this.http.get<Category>(this.Url+"/"+id);
  }

  updateCategory(category:Category){
    return this.http.put<Category>(this.Url+"/"+category.id,category);
  }
  deleteCategory(category:Category){
    return this.http.delete<Category>(this.Url+"/"+category.id);
  }


}
