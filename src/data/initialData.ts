import { Lead, AgentSettings, WhatsAppConnection, User, BroadcastCampaign } from '../types/crm';

export const INITIAL_USERS: User[] = [
  {
    id: 'usr_1',
    name: 'Dr. Roberto Garza',
    email: 'dr.garza@auracrm.com',
    role: 'Director / Admin',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'usr_2',
    name: 'Sofía Morales',
    email: 'sofia.morales@auracrm.com',
    role: 'Asesora WhatsApp',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'usr_3',
    name: 'Carlos Méndez',
    email: 'carlos.mendez@auracrm.com',
    role: 'Recepción & Citas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  }
];

export const INITIAL_AGENT_SETTINGS: AgentSettings = {
  botName: 'DienteBot IA',
  businessName: 'Clínica Dental Diente Feliz 🦷✨',
  businessType: 'Odontología Integral, Ortodoncia y Estética Dental',
  tone: 'empatico_medico',
  customPrompt: 'Brinda atención cálida, empática y resolutiva para pacientes dentales. Prioriza resolver dolor o urgencias dentales, dudas sobre tratamientos (limpieza, ortodoncia, blanqueamiento) y agendar la consulta de valoración.',
  autoAppointmentBooking: true,
  autoStageTransition: true,
  businessHours: 'Lunes a Sábado de 9:00 AM a 7:00 PM',
  welcomeMessage: '¡Hola! 🦷 Gracias por contactar a Clínica Dental Diente Feliz. Soy DienteBot, tu asistente dental. ¿En qué podemos ayudarte hoy para cuidar tu sonrisa?',
  fallbackMessage: 'He tomado nota de tu solicitud. Uno de nuestros odontólogos continuará tu atención en unos instantes.',
  consultationPrice: '$35 USD / $650 MXN (Incluye diagnóstico, revisión con cámara intraoral y plan)',
  locationAddress: 'Av. Sonrisas #120, Consultorio 201, Plaza Médica Dental',
  servicesCatalog: [
    'Limpieza Dental con Ultrasonido (Profilaxis)',
    'Blanqueamiento Dental Láser',
    'Ortodoncia (Brackets y Alineadores Invisibles)',
    'Extracciones y Muelas del Juicio',
    'Resinas Estéticas y Curaciones',
    'Endodoncia (Tratamiento de Conducto)',
    'Implantes Dentales y Prótesis'
  ]
};

export const INITIAL_WHATSAPP_CONNECTION: WhatsAppConnection = {
  isConnected: true,
  phoneNumber: '+52 1 55 0000 0000',
  displayName: 'Clínica Dental Diente Feliz 🦷',
  qrCodeToken: 'diente_feliz_qr_token',
  webhookUrl: typeof window !== 'undefined' ? `${window.location.origin}/api/webhook/whatsapp` : '/api/webhook/whatsapp',
  verifyToken: 'diente_feliz_whatsapp_secret_2026',
  lastSync: 'Hace 1 minuto',
  batteryLevel: 98,
};

// ✅ Sin datos demo — los leads reales llegan automáticamente desde Supabase vía /api/crm/leads-live
export const INITIAL_LEADS: Lead[] = [];

export const INITIAL_CAMPAIGNS: BroadcastCampaign[] = [
  {
    id: 'camp_1',
    name: 'Recontacto Cartera: Limpieza Dental Semestral 🦷',
    targetStage: 'en_cartera',
    templateMessage: '¡Hola {nombre}! 🦷 En Clínica Dental Diente Feliz queremos recordarte que ya pasaron varios meses desde tu última visita. ¿Te gustaría agendar tu limpieza dental preventiva con 20% de descuento esta semana?',
    scheduledDate: '2026-10-16',
    status: 'borrador',
    recipientCount: 10,
    openRate: 85
  },
  {
    id: 'camp_2',
    name: 'Confirmación de Cita Odontológica 📅',
    targetStage: 'atendiendo',
    templateMessage: 'Hola {nombre}, te recordamos tu cita en Clínica Dental Diente Feliz. ¿Nos confirmas tu asistencia? 😊',
    scheduledDate: '2026-10-15',
    status: 'completada',
    recipientCount: 5,
    openRate: 98
  }
];
