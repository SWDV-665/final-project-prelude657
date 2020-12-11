import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
import { BrazilServiceProvider } from '../../providers/brazil-service/brazil-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  lat;
  lng;

  constructor( public navCtrl: NavController,public toastCtrl:ToastController,public alertCtrl: AlertController,public dataService: BrazilServiceProvider ) {

  }
 
// The add item Prompt
 loadItems(){
   return this.dataService.items;
 } 

 // The add item Prompt console and services provider
addItem(){
console.log("adding item");
this.addItemPrompt();
}

// The remove item function
removeItem(item,index){
  console.log("Removing -",item,index)
  const toast =this.toastCtrl.create({
  message:"Removing - " +index + ".....",
  duration:3000
  });
  toast.present();
  this.dataService.removeItem(index);
  }

  // The add item Prompt
addItemPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'New Landmark',
    message: "Enter some info about this landmark",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name of Landmark',
      },
      {
        name: 'description',
        placeholder: 'pick Catchy headline for this site',
      },
      {
        name: 'price',
        placeholder: 'Price of excursion',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Entry Canceled');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log(' Entry Saved',item);
          this.dataService.addItem(item);
        }
      }
    ]
  });
  prompt.present();
}
  // completion prompt 
showPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'CONGRATULATIONS!',
    message: "You have completed the tour of Rio. Thanks for choosing Rio Blog Builder",
    buttons: [
      {
        text: '`DONE!!!`',
        handler: data => {
          console.log('Entry Canceled');
        }
      }
    ]
  });
  prompt.present()}


  // I cant get the GEOLOCATION to work. 
  //showMap() {
  //this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
  // }).catch((error) => {
     // console.log('Error getting location', error);
   //});
   
   //let watch = this.geolocation.watchPosition();
  // watch.subscribe(() =>
   //{ 
  /// });
//}
}

