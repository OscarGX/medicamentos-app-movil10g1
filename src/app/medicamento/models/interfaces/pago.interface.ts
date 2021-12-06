// Generated by https://quicktype.io
 
import { TipoPagoEnum } from '../enums/tipo-pago.enum';
 
export interface IPagoStripeRequest extends IPagoModal {
  payment: IStripePayment;
}
 
export interface IStripePayment {
  amount: number;
  description: string;
  token: string;
}
 
export interface IPagoModal {
  total: number;
  tipoPago: TipoPagoEnum;
  usuarioId: number;
  cantidad: number;
  medicamentoId: number;
  medicamentoName?: string;
}
 
// Generated by https://quicktype.io
 
export interface IPagoStripeResponse {
  fecha: string;
  hora: string;
  total: number;
  tipoPago: string;
  usuario: IUsuario;
  detallesOrdenes: IDetalleOrdenes[];
  stripeChargeId: string;
  id: number;
}
 
export interface IDetalleOrdenes {
  cantidad: number;
  medicamento: IMedicamento;
  id: number;
}
 
export interface IUsuario {
  id: number;
}
 
export interface IMedicamento {
  id: number;
}