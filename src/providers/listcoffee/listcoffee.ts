import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListcoffeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListcoffeeProvider {
apiUrl:'';
  constructor(public http: HttpClient) {
    console.log('Hello ListcoffeeProvider Provider');
  }
  getallcoffees(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:5000/api/coffes/',{
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

  getall(id){
    return new Promise(resolve=>{
      this.http.get('http://localhost:5000/api/coffes/all?id='+id,{
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


  coffeedislike(id){
    return new Promise(resolve=>{
      this.http.put('http://localhost:5000/api/coffes/'+id+'/decrement',{
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
  coffeelike(id){
    return new Promise(resolve=>{
      this.http.put('http://localhost:5000/api/coffes/'+id+'/increment',{
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
}
