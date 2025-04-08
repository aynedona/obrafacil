import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-register-client",
  templateUrl: "./register-client.page.html",
  styleUrls: ["./register-client.page.scss"],
  standalone: false
})
export class RegisterClientPage {
  clientForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.clientForm = this.formBuilder.group({
      fullName: ["", [Validators.required]],
      cpf: ["", [Validators.required, this.cpfValidator]],
      birthDate: [""],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    })
  }

  async registerClient() {
    if (this.clientForm.valid) {
      // Implementar lógica de registro do cliente aqui
      console.log("Client data:", this.clientForm.value)

      const alert = await this.alertController.create({
        header: "Cliente Cadastrado",
        message: "Cliente cadastrado com sucesso!",
        buttons: [
          {
            text: "OK",
            handler: () => {
              this.router.navigate(["/clients"])
            },
          },
        ],
      })

      await alert.present()
    } else {
      this.markFormGroupTouched(this.clientForm)
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

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
