import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfCustomSurveillComponent } from './prof-custom-surveill/prof-custom-surveill.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { StudentCoursComponent } from './student-cours/student-cours.component';
import { SurveillanceAdminComponent } from './surveillance-admin/surveillance-admin.component';
import { TimeTableStudentComponent } from './time-table-student/time-table-student.component';
import { TeacherCoursComponent } from './teacher-cours/teacher-cours.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { NewsPageComponent } from './news-page/news-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
    { path: 'login', component: LoginComponent },
    { path: 'news', component: AcceuilComponent },
    { path: 'admin/news', component: AcceuilAdminComponent },
    { path: 'student/cours', component: StudentCoursComponent },
    { path: 'teacher/cours', component: TeacherCoursComponent },
    { path: 'student/timeTable', component: TimeTableStudentComponent },
    { path: 'teacher/custom-surveillance', component: ProfCustomSurveillComponent },
    { path: 'admin/surveillance', component: SurveillanceAdminComponent },
    { path: 'news/:newsId', component: NewsPageComponent},
    { path: '**', redirectTo: 'login' } // Redirect unknown paths to login
  ];
