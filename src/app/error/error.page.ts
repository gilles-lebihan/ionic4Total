import { Component, OnInit } from '@angular/core';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})


export class ErrorPage implements OnInit {
  image: string;

  constructor(private camera: Camera, private webview: WebView, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    await toast.present();
  }

  onTakePhoto() {
    const options: CameraOptions = {
         quality: 100,
         destinationType: this.camera.DestinationType.FILE_URI,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE
      //   correctOrientation: true
       };
    console.log('onTakePhoto');
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //alert(imageData)
      this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
     }, (err) => {
      // Handle error
     // alert('error '+JSON.stringify(err))
      alert('error ');
     });
  }

}
