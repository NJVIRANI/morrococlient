import { Moment } from 'moment';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { IFacture } from 'app/shared/model/facture.model';

export interface IDepense {
  id?: number;
  codeDepense?: string;
  quantite?: number;
  dateDemande?: Moment;
  tva?: number;
  etatDepense?: string;
  foursnisseur?: IFournisseur;
  facture?: IFacture;
}

export const defaultValue: Readonly<IDepense> = {};
