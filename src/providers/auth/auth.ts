import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
url:any="http://localhost:5000/api/users/authentication";
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

login(email,password){
  return this.http.post(this.url,{
	"email":email,
	"password":password

}
)
}



}
