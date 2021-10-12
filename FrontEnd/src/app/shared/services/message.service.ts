import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private translateService: TranslateService,
    private toastrService: ToastrService
  ) { }

  success(key: string, time: number = 3000) {
    this.translateService.get(key).subscribe((label: string) => {
      this.toastrService.success(label, '', {
        timeOut: time,
      });
    });
  }
 
  warning(key: string, time: number = 3000) {
    this.translateService.get(key).subscribe((label: string) => {
      this.toastrService.warning(label, '', {
        timeOut: time,
      });
    });
  }

  error(key: string, time: number = 3000) {
    this.translateService.get(key).subscribe((label: string) => {
      this.toastrService.error(label, '', {
        timeOut: time,
      });
    });
  }
}
