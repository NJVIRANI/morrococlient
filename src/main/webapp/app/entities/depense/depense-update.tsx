import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { getEntities as getFournisseurs } from 'app/entities/fournisseur/fournisseur.reducer';
import { IFacture } from 'app/shared/model/facture.model';
import { getEntities as getFactures } from 'app/entities/facture/facture.reducer';
import { getEntity, updateEntity, createEntity, reset } from './depense.reducer';
import { IDepense } from 'app/shared/model/depense.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDepenseUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export const DepenseUpdate = (props: IDepenseUpdateProps) => {
  const [foursnisseurId, setFoursnisseurId] = useState('0');
  const [factureId, setFactureId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { depenseEntity, fournisseurs, factures, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/depense');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getFournisseurs();
    props.getFactures();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...depenseEntity,
        ...values
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" id="eAvicultureApp.client.home.createOrEditLabel">Create or edit a Depense</h4>
          {loading ? (
            <p>Loading...</p>
          ) : (
              <AvForm model={isNew ? {} : depenseEntity} onSubmit={saveEntity} className="forms-sample">
                {!isNew ? (
                  <AvGroup>
                    <Label for="depense-id">ID</Label>
                    <AvInput id="depense-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="codeDepenseLabel" for="depense-codeDepense">
                    Code Depense
                </Label>
                  <AvField id="depense-codeDepense" type="text" name="codeDepense" />
                </AvGroup>
                <AvGroup>
                  <Label id="quantiteLabel" for="depense-quantite">
                    Quantite
                </Label>
                  <AvField id="depense-quantite" type="string" className="form-control" name="quantite" />
                </AvGroup>
                <AvGroup>
                  <Label id="dateDemandeLabel" for="depense-dateDemande">
                    Date Demande
                </Label>
                  <AvField id="depense-dateDemande" type="date" className="form-control" name="dateDemande" />
                </AvGroup>
                <AvGroup>
                  <Label id="tvaLabel" for="depense-tva">
                    Tva
                </Label>
                  <AvField id="depense-tva" type="string" className="form-control" name="tva" />
                </AvGroup>
                <AvGroup>
                  <Label id="etatDepenseLabel" for="depense-etatDepense">
                    Etat Depense
                </Label>
                  <AvField id="depense-etatDepense" type="text" name="etatDepense" />
                </AvGroup>
                <AvGroup>
                  <Label for="depense-foursnisseur">Foursnisseur</Label>
                  <AvInput id="depense-foursnisseur" type="select" className="form-control" name="foursnisseur.id">
                    <option value="" key="0" />
                    {fournisseurs
                      ? fournisseurs.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="depense-facture">Facture</Label>
                  <AvInput id="depense-facture" type="select" className="form-control" name="facture.id">
                    <option value="" key="0" />
                    {factures
                      ? factures.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/depense" className="btn btn-light">
                  <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
                </Button>
              &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating} className="btn btn-primary mr-2">
                  <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
              </AvForm>
            )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  fournisseurs: storeState.fournisseur.entities,
  factures: storeState.facture.entities,
  depenseEntity: storeState.depense.entity,
  loading: storeState.depense.loading,
  updating: storeState.depense.updating,
  updateSuccess: storeState.depense.updateSuccess
});

const mapDispatchToProps = {
  getFournisseurs,
  getFactures,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DepenseUpdate);
