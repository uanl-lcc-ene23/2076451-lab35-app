import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

import { Capacitor } from "@capacitor/core";
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(
    private platform: Platform
  ) { }

  public fotos: UserFoto[]=[];

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const fotoGuardada=await this.savePicture(capturedPhoto);
    this.fotos.unshift(fotoGuardada)
  }

  public async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path || ''
      });
  
      return file.data;
    }
    // Busca foto, lee como blob y cambia a base64
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  private async savePicture(photo: Photo){
    //Convierte foto a Base 64
    const base64Data = await this.readAsBase64(photo);
  
    // Escribe archivo en el directorio
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
  
    if (this.platform.is('hybrid')) {
      //console.log(savedFile.uri, Capacitor.convertFileSrc(savedFile.uri), "hybrid")
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      console.log(fileName, photo.webPath, "web");
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
  }

}

export interface UserFoto{
  filepath: string;
  webviewPath?: string; 
}

