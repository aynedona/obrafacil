import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-register-manager",
  templateUrl: "./register-manager.page.html",
  styleUrls: ["./register-manager.page.scss"],
  standalone: false
})
export class RegisterManagerPage {
  registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ["", [Validators.required]],
        cpf: ["", [Validators.required, this.cpfValidator]],
        birthDate: [""],
        phone: ["", [Validators.required]],
        address: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required]],
      },
      { validator: this.checkPasswords },
    )
  }

  async registerManager() {
    if (this.registerForm.valid) {
      // Implementar lógica de registro aqui
      console.log("Register data:", this.registerForm.value)

      const alert = await this.alertController.create({
        header: "Cadastro Realizado",
        message: "Seu cadastro foi realizado com sucesso!",
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
      this.markFormGroupTouched(this.registerForm)
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

    return null
  }

  checkPasswords(group: FormGroup) {
    const password = group.get("password")?.value
    const confirmPassword = group.get("confirmPassword")?.value

    return password === confirmPassword ? null : { notSame: true }
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
