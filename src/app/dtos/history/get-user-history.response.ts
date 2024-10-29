export interface HistoryEntry {
  id: number;
  descripcionVoluntariado: string;
  fechaParticipacion: string;
  usuario: {
    uuid: string;
    username: string;
    email: string;
  };
  evento: {
    uuid: string;
    name: string;
  };
}

export interface GetUserHistoryResponse {
  success: boolean;
  histories: HistoryEntry[];
}
