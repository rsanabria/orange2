import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';
import { RouterService } from '../common/services/router.service';

import { User } from '../common/interfaces/user.login';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LogInComponent implements OnInit {
    user : FormGroup;
    error : boolean = false;
    constructor(private auth : AuthService, private route : RouterService) { }

    ngOnInit() { 
        this.route.actualizarRuta('/login');
        this.user = new FormGroup( {
            user :  new FormControl('',[Validators.required]),
            passwd : new FormControl('',[Validators.required])
        });
    }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (valid) {
        this.auth.login(value);
        if (!this.auth.isLogged) {
            this.error = true;
        }
    }
  }
   public invalid (a:boolean,b:boolean) {
        return ((!a && b) || (a && !b));
    }

}