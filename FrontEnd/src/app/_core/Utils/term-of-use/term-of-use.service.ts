import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TermOfUseApiService } from './term-of-use-api.service';

@Injectable({
  providedIn: 'root'
})
export class TermOfUseService {

  constructor(
    private termOfUseApiService: TermOfUseApiService
  ) { }

  saveFile(files: any) {
    const formFileData = new FormData();
    const savedFile = new Subject<any>();

    if(files?.length > 0){

      for(let file of files){
        if(!file.id){
          formFileData.append('Files[]', file, file.name);
        }
      }

      this.termOfUseApiService.saveFiles(formFileData).subscribe((res: any) => {
        savedFile.next(res.body);
      });

      return savedFile;
    }
  }

  getLastTerm(){
    const term = new Subject<any>();

    this.termOfUseApiService.getLastTerm().subscribe((data: any) => {
      term.next(data);
    });

    return term.asObservable();
  }

  checkCompanyAcceptedTerm(id){
    const term = new Subject<any>();

    this.termOfUseApiService.checkCompanyAcceptedTerm(id).subscribe((data: any) => {
      term.next(data);
    });

    return term.asObservable();
  }

  download(){
    const term = new Subject<any>();

    this.termOfUseApiService.download().subscribe((event) => {
      const response = event as HttpResponse<Blob>;
      term.next(response);
    });

    return term.asObservable();
  }

  acceptTerm(id) {
    const term = new Subject<any>();
    this.termOfUseApiService.acceptTerm(id).subscribe(() => {
      term.next(true);
    });
    return term.asObservable();
  }
}
