import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-register-project",
  templateUrl: "./register-project.page.html",
  styleUrls: ["./register-project.page.scss"],
  standalone: false
})
export class RegisterProjectPage {
  projectForm: FormGroup
  selectedFiles: { [key: string]: File[] } = {
    architectural: [],
    electrical: [],
    plumbing: [],
    structural: [],
    soilSurvey: [],
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.projectForm = this.formBuilder.group({
      address: ["", [Validators.required]],
      totalArea: ["", [Validators.required, Validators.min(1)]],
      floors: ["", [Validators.required, Validators.min(1)]],
      hasArchitectural: [false],
      hasElectrical: [false],
      hasPlumbing: [false],
      hasStructural: [false],
      hasSoilSurvey: [false],
    })
  }

  onFileChange(event: any, projectType: string) {
    if (event.target.files && event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.selectedFiles[projectType].push(event.target.files[i])
      }
    }
  }

  removeFile(projectType: string, index: number) {
    this.selectedFiles[projectType].splice(index, 1)
  }

  async registerProject() {
    if (this.projectForm.valid) {
      // Implementar lógica de registro da obra aqui
      console.log("Project data:", this.projectForm.value)
      console.log("Selected files:", this.selectedFiles)

      const alert = await this.alertController.create({
        header: "Obra Cadastrada",
        message: "Obra cadastrada com sucesso!",
        buttons: [
          {
            text: "OK",
            handler: () => {
              this.router.navigate(["/projects"])
            },
          },
        ],
      })

      await alert.present()
    } else {
      this.markFormGroupTouched(this.projectForm)
    }
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
