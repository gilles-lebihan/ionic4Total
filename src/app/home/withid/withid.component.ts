import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';
import { from } from 'rxjs';
import { CanInfoService } from './../../can-info.service';

@Component({
  selector: 'app-withid',
  templateUrl: './withid.component.html',
  styleUrls: ['./withid.component.scss'],
})
export class WithidComponent implements OnInit {
  
    public id: string;
    public title = '';
    constructor(private route: ActivatedRoute,
                public loadingController: LoadingController,
                public http: HttpClient,
                public router: Router,
                public canInfoService: CanInfoService)
    {
    }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      console.log('GLB constructor withId name:' + this.id);
      from(this.presentLoading())
      .subscribe(() => {
        this.http.get("https://jsonplaceholder.typicode.com/todos/"+this.id) 
        .subscribe(
          (data) => {
          //  console.log(data);
             // this.title = data.title;
             //  console.log('GLB TITLE:' + this.title);
      //      console.log('GLB TITLE:');
          
          },
          (error) => {
            console.log('GLB ERROR')
            console.log(error);
          }
        )
  //      .add(() => this.loading.dismiss());
        .add(() => this.dismissLoading());
      });
    }
  
    private async presentLoading(): Promise<any> {
      const loading = await this.loadingController.create({
        message: 'Please wait ...',
      });
      return await loading.present();
    }
  
    private async dismissLoading(): Promise<any> {
      // this.isLoading = false;
      return await this.loadingController.dismiss().then(() => 
      {
        /*
        let navigationExtras: NavigationExtras = {
          queryParams: {
          //  'title': this.title,
            'title': 'text',
          }
        };
        */
        const name = 'INEO C1 5W 30';
        const application: string[] = ['TOTAL ACTIVA 9000 SW-40 a été dévelopée pour tous les moteurs à essence et diesel',
                             'Ce lubrifiant convient parfaitement aux motorisations turbocompressés, multisoupapes et injection directe'];
        const customerBenefit = 'la fluidité à basse température de cette huile facilite les démarrages à froid';
        const useAdvices = 'la résistance à l oxydation de ce lubrifiant permet de satisfaire aux intervalles de vidanges allongés';
        console.log('dismissLoading WithId');
        this.canInfoService.SetCanInfo(name, application, customerBenefit, useAdvices);
       // this.router.navigate(['generalinfo'], navigationExtras);
       // this.router.navigate(['generalinfo']);
        this.router.navigate(['error']);
      });
    }
  }