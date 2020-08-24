import { Moment } from 'moment';
import { IDepense } from 'app/shared/model/depense.model';

export interface IFacture {
  id?: number;
  numeroFacture?: string;
  dateFacturation?: Moment;
  prixUnite?: number;
  tva?: number;
  quantite?: number;
  fraisLivraison?: number;
  methodPaiment?: string;
  etatFacture?: string;
  depenses?: IDepense[];
}

export const defaultValue: Readonly<IFacture> = {};
