import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DailyClassComponent } from './daily-class/daily-class.component';
import { FitArenaComponent } from './fit-arena/fit-arena.component';
import { FitCareComponent } from './fit-care/fit-care.component';
import { FitCastsComponent } from './fit-casts/fit-casts.component';
import { FitFuelComponent } from './fit-fuel/fit-fuel.component';
import { FitGuidProComponent } from './fit-guid-pro/fit-guid-pro.component';
import { FitTrainingComponent } from './fit-training/fit-training.component';
import { FitWellComponent } from './fit-well/fit-well.component';
import { HiitComponent } from './hiit/hiit.component';
import { FitExpertLiveComponent } from './fit-expert-live/fit-expert-live.component';
import { YogaComponent } from './yoga/yoga.component';
import { ZumbaComponent } from './zumba/zumba.component';
import { LoginComponent } from './login/login.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { StrengthComponent } from './strength/strength.component';
import { MeditationComponent } from './meditation/meditation.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [

    {path:'', pathMatch: 'full', component: HomepageComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'daily-class', component: DailyClassComponent},
    {path:'fit-arena', component: FitArenaComponent},
    {path:'fit-care', component: FitCareComponent},
    {path:'fit-casts', component: FitCastsComponent},
    {path:'fit-fuel', component: FitFuelComponent},
    {path:'fit-guid', component: FitGuidProComponent},
    {path:'fit-training', component: FitTrainingComponent},
    {path:'fit-well', component: FitWellComponent},
    {path:'hiit', component: HiitComponent},
    {path:'fit-expert-live', component: FitExpertLiveComponent},
    {path:'yoga', component: YogaComponent},
    {path:'zumba', component: ZumbaComponent},
    {path:'strength', component: StrengthComponent},
    {path:'meditation', component: MeditationComponent},
    {path:'subscribe', component: PricingComponent},

];
