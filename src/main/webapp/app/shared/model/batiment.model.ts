import { ILigneEclairage } from 'app/shared/model/ligne-eclairage.model';

export interface IBatiment {
  id?: number;
  codeBatiment?: string;
  surface?: number;
  ligneEclairages?: ILigneEclairage[];
}

export const defaultValue: Readonly<IBatiment> = {};
