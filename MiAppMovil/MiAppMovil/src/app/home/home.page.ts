import { Component } from '@angular/core';

import { FotoService } from '../foto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private fotoService: FotoService) {}

    fotos = this.fotoService.fotos;

    TomarFoto()
    {
      this.fotoService.addNewToGallery();

      this.fotos = this.fotoService.fotos;

    }

}
