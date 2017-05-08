import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { RouterService } from './router.service';
import { ToastService } from './toast.service';

import { LogInGuard } from './login.guard'

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [AuthService, RouterService, ToastService, LogInGuard ],
})
export class ServiceModule { }
