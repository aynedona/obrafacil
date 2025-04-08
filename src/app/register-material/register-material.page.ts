import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-register-material",
  templateUrl: "./register-material.page.html",
  styleUrls: ["./register-material.page.scss"],
  standalone: false
})
export class RegisterMaterialPage implements OnInit {
  materialForm: FormGroup
  projectId: string
  phases: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.projectId = this.route.snapshot.paramMap.get("id") || ""

    this.materialForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      unit: ["", [Validators.required]],
      unitPrice: ["", [Validators.required, Validators.min(0.01)]],
      phaseId: ["", [Validators.required]],
    })
  }

  ngOnInit() {
    this.loadProjectPhases()
  }

  loadProjectPhases() {
    // Simulação de dados - substituir por chamada ao serviço
    this.phases = [
      { id: "1", name: "Fundação" },
      { id: "2", name: "Alvenaria" },
      { id: "3", name: "Telhado" },
      { id: "4", name: "Acabamento" },
    ]
  }

  async registerMaterial() {
    if (this.materialForm.valid) {
      // Implementar lógica de registro do material aqui
      console.log("Material data:", this.materialForm.value)

      const alert = await this.alertController.create({
        header: "Material Cadastrado",
        message: "Material cadastrado com sucesso!",
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
      this.markFormGroupTouched(this.materialForm)
    }
  }

  calculateTotal() {
    const quantity = Number.parseFloat(this.materialForm.get("quantity")?.value || "0")
    const unitPrice = Number.parseFloat(this.materialForm.get("unitPrice")?.value || "0")
    return (quantity * unitPrice).toFixed(2)
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
