import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HistoryService } from 'src/app/services/histories.service';
import { GetUserHistoryResponse, HistoryEntry } from 'src/app/dtos/history/get-user-history.response';
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-histories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
  public registerOrganization: boolean = true;
  public organizationObj: any = null;
  registerForm: FormGroup;
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';
  public noData: boolean = true; 
  public historyEntries: HistoryEntry[] = []; 
  
  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.fetchUserHistory(); 
  }

  private fetchUserHistory(): void {
    this.historyService.getUserHistory().subscribe(
      (response: GetUserHistoryResponse) => {
        this.historyEntries = response as unknown as HistoryEntry[]; 
        this.noData = this.historyEntries.length === 0;
      },
      (error) => {
        console.error('Error al obtener el historial:', error);
        this.noData = true;
      }
    );
  }

  public downloadPDF(): void {
    const doc = new jsPDF();
    doc.text('Historial de Participación', 10, 10);

    const tableData = this.historyEntries.map(entry => [
      entry.evento.name,                 
      entry.fechaParticipacion,           
      entry.descripcionVoluntariado       
    ]);

    (doc as any).autoTable({
      head: [['Evento', 'Fecha', 'Descripción']],
      body: tableData,
      startY: 20
    });

    doc.save('historial_participacion.pdf');
  }

  public generateReport(): void {
    const worksheetData = this.historyEntries.map(entry => ({
      Evento: entry.evento.name,
      Fecha: entry.fechaParticipacion,
      Descripción: entry.descripcionVoluntariado
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Historial');

    XLSX.writeFile(workbook, 'historial_participacion.xlsx');
  }
}
