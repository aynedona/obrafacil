import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { AlertController } from "@ionic/angular"

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.page.html",
  styleUrls: ["./project-details.page.scss"],
  standalone: false
})
export class ProjectDetailsPage implements OnInit {
  projectId: string
  project: any = {}
  phases: any[] = []
  materials: any[] = []

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
  ) {
    this.projectId = this.route.snapshot.paramMap.get("id") || ""
  }

  ngOnInit() {
    // Aqui você buscaria os detalhes da obra do seu serviço
    this.loadProjectDetails()
    this.loadProjectPhases()
    this.loadProjectMaterials()
  }

  loadProjectDetails() {
    // Simulação de dados - substituir por chamada ao serviço
    this.project = {
      id: this.projectId,
      address: "Rua das Flores, 123 - Jardim Primavera",
      totalArea: 150,
      floors: 2,
      client: {
        id: "1",
        name: "João Silva",
        phone: "(11) 98765-4321",
      },
      startDate: "2023-05-15",
      estimatedEndDate: "2023-11-15",
      progress: 35,
      hasArchitectural: true,
      hasElectrical: true,
      hasPlumbing: true,
      hasStructural: false,
      hasSoilSurvey: false,
      files: {
        architectural: ["planta_baixa.pdf", "fachada.pdf"],
        electrical: ["projeto_eletrico.pdf"],
        plumbing: ["projeto_hidraulico.pdf"],
        structural: [],
        soilSurvey: [],
      },
    }
  }

  loadProjectPhases() {
    // Simulação de dados - substituir por chamada ao serviço
    this.phases = [
      { id: "1", name: "Fundação", progress: 100, startDate: "2023-05-15", endDate: "2023-06-15" },
      { id: "2", name: "Alvenaria", progress: 70, startDate: "2023-06-16", endDate: null },
      { id: "3", name: "Telhado", progress: 0, startDate: null, endDate: null },
      { id: "4", name: "Acabamento", progress: 0, startDate: null, endDate: null },
    ]
  }

  loadProjectMaterials() {
    // Simulação de dados - substituir por chamada ao serviço
    this.materials = [
      { id: "1", name: "Cimento", quantity: "50 sacos", price: 1500, phase: "Fundação" },
      { id: "2", name: "Tijolos", quantity: "5000 unidades", price: 3000, phase: "Alvenaria" },
      { id: "3", name: "Areia", quantity: "5 m³", price: 500, phase: "Fundação" },
    ]
  }

  async viewFile(fileType: string, fileName: string) {
    // Implementar visualização do arquivo
    const alert = await this.alertController.create({
      header: "Visualizar Arquivo",
      message: `Visualizando ${fileName} do tipo ${fileType}`,
      buttons: ["OK"],
    })

    await alert.present()
  }

  getTotalBudget() {
    return this.materials.reduce((total, material) => total + material.price, 0)
  }
}
