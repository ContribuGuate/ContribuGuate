
export interface CreateHistoryResponse {
    success: boolean;                  
    message: string;                   
    historyEntry?: {                  
      id: string;
      userId: string;
      eventId: string;
      participationDate: Date;
      volunteeringDescription: string;
    };
  }
  