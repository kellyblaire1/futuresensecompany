import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "about",
    title: "About Us | FutureSense Company",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  },
  {
    path: "contact",
    title: "Contact Us | FutureSense Company",
    loadChildren: () =>
      import("./contact/contact.module").then(m => m.ContactModule)
  },
  {
    path: "approach",
    title: "Our Approach | FutureSense Company",
    loadChildren: () =>
      import("./approach/approach.module").then(m => m.ApproachModule)
  },
  {
    path: "competencies",
    title: "Competencies | FutureSense Company",
    loadChildren: () =>
      import("./competencies/competencies.module").then(
        m => m.CompetenciesModule
      )
  },
  {
    path: "",
    title: "Welcome to FutureSense Company | Redefining your future!",
    loadChildren: () => import("./index/index.module").then(m => m.IndexModule)
  },
  {
    path: "key-offerings",
    title: "Key Offerings | FutureSense Company",
    loadChildren: () =>
      import("./key-offerings/key-offerings.module").then(
        m => m.KeyOfferingsModule
      )
  },
  {
    path: "team",
    title: "Team | FutureSense Company",
    loadChildren: () => import("./team/team.module").then(m => m.TeamModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./error404/error404.module").then(m => m.Error404Module)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
