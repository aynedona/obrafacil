import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-register-phase",
  templateUrl: "./register-phase.page.html",
  styleUrls: ["./register-phase.page.scss"],
  standalone: false
})
export class RegisterPhasePage implements OnInit {
  phaseForm: FormGroup
  projectId: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.projectId = this.route.snapshot.paramMap.get("id") || ""

    this.phaseForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: [""],
      startDate: ["", [Validators.required]],
      estimatedEndDate: ["", [Validators.required]],
      order: ["", [Validators.required, Validators.min(1)]],
    })
  }

  ngOnInit() {}

  async registerPhase() {
    if (this.phaseForm.valid) {
      // Implementar lógica de registro da etapa aqui
      console.log("Phase data:", this.phaseForm.value)

      const alert = await this.alertController.create({
        header: "Etapa Cadastrada",
        message: "Etapa cadastrada com sucesso!",
        buttons: [
          {
            text: "OK",
            handler: () => {
              this.router.navigate(["/project-details", this.projectId])
            },
          },
        ],
      })

      await alert.present()
    } else {
      this.markFormGroupTouched(this.phaseForm)
    }
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
