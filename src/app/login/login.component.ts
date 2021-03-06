import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { RouterService } from '../shared/services/router.service';

import { User } from '../shared/interfaces/user.login';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LogInComponent implements OnInit {
    user : FormGroup;
    error : boolean = false;
    constructor(private fb : FormBuilder, private auth : AuthService, private route : RouterService) { }

    ngOnInit() { 
        this.route.actualizarRuta('/login');
        this.user =  this.fb.group( {
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