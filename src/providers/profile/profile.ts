import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }



  modifier(id ,profile ){
    return new Promise(resolve=>{
      this.http.put('http://localhost:5000/api/users/'+id,profile,{
                      headers: new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization':localStorage.getItem("token")
                      })
                  }).subscribe(data=>{
        resolve(data);
      },
    err=>{
      console.log(err);
    })
  });

  }
  // getuser(id){
  //   return new Promise(resolve=>{
  //     this.http.get('http://localhost:5000/api/coments/',{
  //                     headers: new HttpHeaders({
  //                         'Content-Type': 'application/json',
  //                         'Authorization':localStorage.getItem("token")
  //                     })
  //                 }).subscribe(data=>{
  //       resolve(data);
  //     },
  //   err=>{
  //     console.log(err);
  //   })
  // });
  // }
}
