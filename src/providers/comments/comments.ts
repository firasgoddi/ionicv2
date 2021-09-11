import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {
apiUrl:'';
  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
    console.log(localStorage.getItem("token"));
  }
  addcomments(comment){


    return new Promise(resolve=>{
      this.http.post('http://localhost:5000/api/coments',comment,{
                      headers: new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization': localStorage.getItem("token")
                      })
                  }).subscribe(data=>{
        resolve(data);
      },
    err=>{
      console.log(err);
    })
  });
}
modifier(id ,comment ){
  return new Promise(resolve=>{
    this.http.put('http://localhost:5000/api/coments/'+id,comment,{
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

getallcomments(id){
  return new Promise(resolve=>{
    this.http.get('http://localhost:5000/api/coments/all?id='+id,{
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
deletecomment(id){
  return new Promise(resolve=>{
    this.http.get('http://localhost:5000/api/coments/remove?id='+id,{
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
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
