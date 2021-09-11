import { Component } from '@angular/core';
import { NavController ,AlertController,NavParams} from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments/comments';


@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  comment:any [];
  text:string;
  id:any;
  constructor(public navCtrl: NavController,public commentProvider:CommentsProvider,private alertCtrl: AlertController,public navParams: NavParams) {

this.id=this.navParams.get('id');
    console.log(this.id)
this.getallcomments() ;
  }
  showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Ajouter Commentaire',
        message: "Veuillez ajouter une nouvelle commentaire",
        inputs: [
          {
            name: 'text',
            placeholder: 'ajouter commentaire'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log(data);
              this.comment={
                'text':data['text'],
            'offre': this.id,
              }
              console.log(this.comment)
              this.commentProvider.addcomments(this.comment).then(res=>{
                //console.log(data);
                this.getallcomments()
              })
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }


    modifierPrompt(id) {
        let prompt = this.alertCtrl.create({
          title: 'Modifier Commentaire',
          message: "Veuillez ajouter une nouvelle commentaire",
          inputs: [
            {
              name: 'text',
              placeholder: 'Modifier commentaire'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {{

                  this.comment={
                   'text':data.text,
                 }
                 console.log(this.comment);
                 console.log(id);
                 this.commentProvider.modifier(id,this.comment).then(data=>{
                   console.log(data);
                   this.getallcomments()

                 })

              }
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
      }

addcomments(text){
  this.comment={
    'text':text,
'offre': this.id,
  }
  console.log(this.comment)
  this.commentProvider.addcomments(this.comment).then(res=>{
    console.log(res);
  })

}

modifier(id,text){
  this.comment={
   'text':text,
 }
 console.log(this.comment);
 this.commentProvider.modifier(id,this.comment).then(data=>{
   console.log(data);

 })
}
getallcomments(){
  console.log(this.id)
  this.commentProvider.getallcomments(this.id).then(val=>{
    console.log(val);
this.comment=val;
  })
}

deletecomment(id){
  this.commentProvider.deletecomment(id).then(data=>{
    console.log(data);

    this.getallcomments()
  });
}
}
