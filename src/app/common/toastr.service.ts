
import { Injectable } from '@angular/core'

declare let toastr
@Injectable()
export class ToastrService {

    success(message: string, title?: string){
        toastr.success(message,title)
    }
    warning(message: string, title?: string){
        toastr.warning(message,title)
    }
    info(message: string, title?: string){
        toastr.info(message,title)
    }
    erroor(message: string, title?: string){
        toastr.erroor(message,title)
    }
}