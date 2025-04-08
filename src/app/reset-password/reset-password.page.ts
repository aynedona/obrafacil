import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
  standalone: false
})
export class ResetPasswordPage {
  resetForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.resetForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required, this.cpfValidator]],
    })
  }

  async resetPassword() {
    if (this.resetForm.valid) {
      // Implementar lógica de reset de senha aqui
      console.log("Reset password data:", this.resetForm.value)

      const alert = await this.alertController.create({
        header: "Solicitação Enviada",
        message: "Instruções para redefinir sua senha foram enviadas para seu email.",
        buttons: [
          {
            text: "OK",
            handler: () => {
              this.router.navigate(["/login"])
            },
          },
        ],
      })

      await alert.present()
    } else {
      this.markFormGroupTouched(this.resetForm)
    }
  }

  cpfValidator(control: any) {
    const cpf = control.value.replace(/[^\d]+/g, "")
    if (cpf === "") return { invalidCpf: true }

    // Validação básica de CPF
    if (
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999"
    ) {
      return { invalidCpf: true }
    }

    // Validação completa de CPF poderia ser implementada aqui

    return null
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
