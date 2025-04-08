import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: false
})
export class HomePage {
  userType: "manager" | "client" = "manager" // Simulando o tipo de usuário logado

  managerLinks = [
    { title: "Clientes", icon: "people", route: "/clients", description: "Gerenciar clientes" },
    { title: "Obras", icon: "business", route: "/projects", description: "Gerenciar obras" },
    {
      title: "Cadastrar Cliente",
      icon: "person-add",
      route: "/register-client",
      description: "Adicionar novo cliente",
    },
    { title: "Cadastrar Obra", icon: "add-circle", route: "/register-project", description: "Adicionar nova obra" },
    {
      title: "Cadastrar Etapa",
      icon: "construct",
      route: "/register-phase/new",
      description: "Adicionar etapa de obra",
    },
    {
      title: "Cadastrar Material",
      icon: "cube",
      route: "/register-material/new",
      description: "Adicionar material e orçamento",
    },
  ]

  clientLinks = [
    { title: "Minhas Obras", icon: "home", route: "/client-projects", description: "Visualizar minhas obras" },
    {
      title: "Progresso",
      icon: "analytics",
      route: "/client-project-progress/1",
      description: "Acompanhar progresso da obra",
    },
    { title: "Pagamentos", icon: "cash", route: "/client-payments", description: "Gerenciar pagamentos" },
  ]

  accountLinks = [
    { title: "Meu Perfil", icon: "person", route: "/profile", description: "Editar informações pessoais" },
    {
      title: "Alterar Senha",
      icon: "lock-closed",
      route: "/change-password",
      description: "Atualizar senha de acesso",
    },
    { title: "Sair", icon: "log-out", route: "/login", description: "Encerrar sessão" },
  ]

  recentProjects = [
    { id: "1", title: "Residência Silva", address: "Rua das Flores, 123", progress: 35 },
    { id: "2", title: "Apartamento Costa", address: "Av. dos Pássaros, 456", progress: 10 },
    { id: "3", title: "Casa de Praia Santos", address: "Rua da Praia, 789", progress: 75 },
  ]

  constructor(private router: Router) {}

  toggleUserType() {
    this.userType = this.userType === "manager" ? "client" : "manager"
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
