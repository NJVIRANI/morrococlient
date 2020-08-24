import { Moment } from 'moment';
import { ILogParametreEnvironement } from 'app/shared/model/log-parametre-environement.model';
import { IBatiment } from 'app/shared/model/batiment.model';
import { IDepense } from 'app/shared/model/depense.model';

export interface IPhaseProduction {
  id?: number;
  codePhase?: string;
  dateDebut?: Moment;
  dateFin?: Moment;
  nombrePoulets?: number;
  nombreDeces?: number;
  logParametreEnvironements?: ILogParametreEnvironement[];
  batiment?: IBatiment;
  listeDepenses?: IDepense;
}

export const defaultValue: Readonly<IPhaseProduction> = {};
