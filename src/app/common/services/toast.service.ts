import { Injectable } from '@angular/core';
declare var Materialize :any;
@Injectable()
export class ToastService {

    constructor() { }

private time : number = 2000; 

    public success(msg : string) {
        Materialize.toast(`<i class="small material-icons">check</i>&nbsp;&nbsp;${msg}`, this.time, 'light-green toast-orange');

    }
    public error(msg: string) {
        Materialize.toast(`<i class="small material-icons">error</i>&nbsp;&nbsp;${msg}`, this.time, 'red darken-1');
        
    }
    public alert(msg: string) {
        Materialize.toast(`<i class="small material-icons">announcement</i>&nbsp;&nbsp;${msg}`, this.time, 'yellow darken-1');
    }

    public info(msg: string) {
        Materialize.toast(`<i class="small material-icons">info_outline</i>&nbsp;&nbsp;${msg}`, this.time, 'teal');
    }

}