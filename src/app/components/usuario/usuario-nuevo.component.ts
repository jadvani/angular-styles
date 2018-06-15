import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe( params => {
      console.log('ruta HIJA Usuario nuevo');
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
