export type TicketStatus =
    | 'Open'
    | 'Assigned'
    | 'In Progress'
    | 'Resolved'
    | 'Closed';

export type TicketPriority = 
    | 'Low'
    | 'Medium'
    | 'High'
    | 'Critical';

export interface Ticket {
    id: string;
    subject: string;
    description: string;
    category: string;
    status: TicketStatus;
    priority: TicketPriority;
    createdBy: string;
    assignedTo: string | null;
    createdAt: string;
    updatedAt: string;
}