import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.page.html",
  styleUrls: ["./client-details.page.scss"],
  standalone: false
})
export class ClientDetailsPage implements OnInit {
  clientId: string
  client: any = {}
  projects: any[] = []
  payments: any[] = []

  constructor(private route: ActivatedRoute) {
    this.clientId = this.route.snapshot.paramMap.get("id") || ""
  }

  ngOnInit() {
    // Aqui você buscaria os detalhes do cliente do seu serviço
    this.loadClientDetails()
    this.loadClientProjects()
    this.loadClientPayments()
  }

  loadClientDetails() {
    // Simulação de dados - substituir por chamada ao serviço
    this.client = {
      id: this.clientId,
      fullName: "João Silva",
      cpf: "123.456.789-00",
      birthDate: "1980-05-10",
      phone: "(11) 98765-4321",
      address: "Av. Paulista, 1000 - Bela Vista",
      email: "joao.silva@email.com",
    }
  }

  loadClientProjects() {
    // Simulação de dados - substituir por chamada ao serviço
    this.projects = [
      {
        id: "1",
        address: "Rua das Flores, 123 - Jardim Primavera",
        totalArea: 150,
        progress: 35,
        startDate: "2023-05-15",
      },
      {
        id: "2",
        address: "Av. dos Pássaros, 456 - Vila Nova",
        totalArea: 200,
        progress: 10,
        startDate: "2023-07-20",
      },
    ]
  }

  loadClientPayments() {
    // Simulação de dados - substituir por chamada ao serviço
    this.payments = [
      { id: "1", date: "2023-05-10", amount: 10000, description: "Entrada - Obra Rua das Flores" },
      { id: "2", date: "2023-06-15", amount: 15000, description: "Pagamento 2 - Obra Rua das Flores" },
      { id: "3", date: "2023-07-20", amount: 8000, description: "Entrada - Obra Av. dos Pássaros" },
    ]
  }

  getTotalPayments() {
    return this.payments.reduce((total, payment) => total + payment.amount, 0)
  }
}
