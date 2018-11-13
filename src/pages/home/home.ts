import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Transaction } from '../../models/Transaction';
import { Autosize } from '../../components/autosize';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registros = [];
  ref = firebase.database().ref('transactions/');
  tran : Transaction = {
    ammount: 0,
    comment: '',
    country: '',
    mmc: ''
  };
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.registros = [];
      this.registros = firebaseToArray(resp);
    });
  }

  save(){
    let nuevoRegistro = this.ref.push();
    nuevoRegistro.set({
      ammount: this.tran.ammount,
      comment: this.tran.comment,
      country: this.tran.country,
      mmc: this.tran.mmc
    }).then(() => {
      const alert = this.alertCtrl.create({
        title: 'Datos guardados',
        subTitle: 'La transacción se ingresó con éxito',
        buttons: ['Aceptar']
      });
      alert.present().then(() => {
        this.tran.ammount = null,
        this.tran.comment = null,
        this.tran.country = null,
        this.tran.mmc = null
      });
    })
  }

}


export const firebaseToArray = snapshot => {
  let array = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    array.push(item);
  });

  return array;
}