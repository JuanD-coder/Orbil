import { Component, OnInit } from '@angular/core';
import { ServicePostService } from 'src/app/services/service-post.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.page.html',
  styleUrls: ['./reserva-detalle.page.scss'],
})
export class ReservaDetallePage implements OnInit {

  content: any;

  constructor( 
      private service: ServicePostService, 
      private route: ActivatedRoute 
    ) { }

  ngOnInit() {
    // <------- Mostrar Detalle ------>
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.service.getDetalle(id).subscribe( resp => {
      this.content = resp
      console.log(resp)
      }
     )
  }

}
