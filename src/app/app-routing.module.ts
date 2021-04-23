import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionsComponent } from "./transactions/transactions.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CustomersComponent } from "./customers/customers.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";
import { AuthGaurdService } from "./service/auth-gaurd.service";
import { FullLayoutComponent } from "./layout/full-layout/full-layout.component";
import { CreateWebuserComponent } from "./create-webuser/create-webuser.component";
import { MiniStatementComponent } from "./mini-statement/mini-statement.component";

const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      { path: "", redirectTo: "/login", pathMatch: "full" },
      {
        path: "create-webuser",
        component: CreateWebuserComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "mini-statement",
        component: MiniStatementComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "transactions",
        component: TransactionsComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "customers",
        component: CustomersComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "account-balance",
        component: AccountBalanceComponent,
        canActivate: [AuthGaurdService],
      },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
