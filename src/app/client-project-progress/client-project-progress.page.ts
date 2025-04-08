import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-client-project-progress",
  templateUrl: "./client-project-progress.page.html",
  styleUrls: ["./client-project-progress.page.scss"],
  standalone: false
})
export class ClientProjectProgressPage implements OnInit {
  projectId: string
  project: any = {}
  phases: any[] = []

  constructor(private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.paramMap.get("id") || ""
  }

  ngOnInit() {
    this.loadProjectDetails()
    this.loadProjectPhases()
  }

  loadProjectDetails() {
    // Simulação de dados - substituir por chamada ao serviço
    this.project = {
      id: this.projectId,
      address: "Rua das Flores, 123 - Jardim Primavera",
      totalArea: 150,
      floors: 2,
      startDate: "2023-05-15",
      estimatedEndDate: "2023-11-15",
      progress: 35,
    }
  }

  loadProjectPhases() {
    // Simulação de dados - substituir por chamada ao serviço
    this.phases = [
      {
        id: "1",
        name: "Fundação",
        progress: 100,
        startDate: "2023-05-15",
        endDate: "2023-06-15",
        description: "Escavação e concretagem das fundações",
        images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
      },
      {
        id: "2",
        name: "Alvenaria",
        progress: 70,
        startDate: "2023-06-16",
        endDate: null,
        description: "Construção das paredes e estruturas",
        images: ["https://example.com/image3.jpg"],
      },
      {
        id: "3",
        name: "Telhado",
        progress: 0,
        startDate: null,
        endDate: null,
        description: "Instalação da estrutura e telhas do telhado",
        images: [],
      },
      {
        id: "4",
        name: "Acabamento",
        progress: 0,
        startDate: null,
        endDate: null,
        description: "Revestimentos, pintura e acabamentos finais",
        images: [],
      },
    ]
  }

  getPhaseStatusColor(progress: number): string {
    if (progress === 0) return "medium"
    if (progress < 100) return "warning"
    return "success"
  }

  getPhaseStatusText(progress: number): string {
    if (progress === 0) return "Não iniciada"
    if (progress < 100) return "Em andamento"
    return "Concluída"
  }
}
