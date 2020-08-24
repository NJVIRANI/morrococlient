import { IBatiment } from 'app/shared/model/batiment.model';

export interface ILigneEclairage {
  id?: number;
  codeLigne?: string;
  description?: string;
  allume?: boolean;
  luxMax?: number;
  luxMin?: number;
  luxChoisi?: number;
  batiment?: IBatiment;
}

export const defaultValue: Readonly<ILigneEclairage> = {
  allume: false
};
