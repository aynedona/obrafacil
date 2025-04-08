import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-client-payments",
  templateUrl: "./client-payments.page.html",
  styleUrls: ["./client-payments.page.scss"],
  standalone: false
})
export class ClientPaymentsPage implements OnInit {
  payments: any[] = []
  projects: any[] = []
  paymentForm: FormGroup
  showPaymentForm = false

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
  ) {
    this.paymentForm = this.formBuilder.group({
      amount: ["", [Validators.required, Validators.min(1)]],
      description: ["", [Validators.required]],
      projectId: ["", [Validators.required]],
    })
  }

  ngOnInit() {
    this.loadPayments()
    this.loadProjects()
  }

  loadPayments() {
    // Simulação de dados - substituir por chamada ao serviço
    this.payments = [
      {
        id: "1",
        date: "2023-05-10",
        amount: 10000,
        description: "Entrada - Obra Rua das Flores",
        project: "Rua das Flores, 123",
      },
      {
        id: "2",
        date: "2023-06-15",
        amount: 15000,
        description: "Pagamento 2 - Obra Rua das Flores",
        project: "Rua das Flores, 123",
      },
      {
        id: "3",
        date: "2023-07-20",
        amount: 8000,
        description: "Entrada - Obra Av. dos Pássaros",
        project: "Av. dos Pássaros, 456",
      },
    ]
  }

  loadProjects() {
    // Simulação de dados - substituir por chamada ao serviço
    this.projects = [
      { id: "1", address: "Rua das Flores, 123 - Jardim Primavera" },
      { id: "2", address: "Av. dos Pássaros, 456 - Vila Nova" },
    ]
  }

  togglePaymentForm() {
    this.showPaymentForm = !this.showPaymentForm
    if (!this.showPaymentForm) {
      this.paymentForm.reset()
    }
  }

  async generatePaymentVoucher() {
    if (this.paymentForm.valid) {
      // Implementar lógica de geração de vale de pagamento aqui
      console.log("Payment data:", this.paymentForm.value)

      const alert = await this.alertController.create({
        header: "Vale de Pagamento Gerado",
        message: "Vale de pagamento gerado com sucesso! Um comprovante foi enviado para seu email.",
        buttons: ["OK"],
      })

      await alert.present()
      this.togglePaymentForm()
    } else {
      this.markFormGroupTouched(this.paymentForm)
    }
  }

  async viewPaymentDetails(payment: any) {
    const alert = await this.alertController.create({
      header: "Detalhes do Pagamento",
      message: `
        <p><strong>Data:</strong> ${new Date(payment.date).toLocaleDateString("pt-BR")}</p>
        <p><strong>Valor:</strong> R$ ${payment.amount.toFixed(2)}</p>
        <p><strong>Descrição:</strong> ${payment.description}</p>
        <p><strong>Obra:</strong> ${payment.project}</p>
      `,
      buttons: ["OK"],
    })

    await alert.present()
  }

  getTotalPayments() {
    return this.payments.reduce((total, payment) => total + payment.amount, 0)
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }
}
