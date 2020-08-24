import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IBatiment } from 'app/shared/model/batiment.model';
import { getEntities as getBatiments } from 'app/entities/batiment/batiment.reducer';
import { IDepense } from 'app/shared/model/depense.model';
import { getEntities as getDepenses } from 'app/entities/depense/depense.reducer';
import { getEntity, updateEntity, createEntity, reset } from './phase-production.reducer';
import { IPhaseProduction } from 'app/shared/model/phase-production.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPhaseProductionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PhaseProductionUpdate = (props: IPhaseProductionUpdateProps) => {
  const [batimentId, setBatimentId] = useState('0');
  const [listeDepensesId, setListeDepensesId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { phaseProductionEntity, batiments, depenses, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/phase-production');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getBatiments();
    props.getDepenses();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...phaseProductionEntity,
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
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="eAvicultureApp.phaseProduction.home.createOrEditLabel">Create or edit a PhaseProduction</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : phaseProductionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="phase-production-id">ID</Label>
                  <AvInput id="phase-production-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codePhaseLabel" for="phase-production-codePhase">
                  Code Phase
                </Label>
                <AvField id="phase-production-codePhase" type="text" name="codePhase" />
              </AvGroup>
              <AvGroup>
                <Label id="dateDebutLabel" for="phase-production-dateDebut">
                  Date Debut
                </Label>
                <AvField id="phase-production-dateDebut" type="date" className="form-control" name="dateDebut" />
              </AvGroup>
              <AvGroup>
                <Label id="dateFinLabel" for="phase-production-dateFin">
                  Date Fin
                </Label>
                <AvField id="phase-production-dateFin" type="date" className="form-control" name="dateFin" />
              </AvGroup>
              <AvGroup>
                <Label id="nombrePouletsLabel" for="phase-production-nombrePoulets">
                  Nombre Poulets
                </Label>
                <AvField id="phase-production-nombrePoulets" type="string" className="form-control" name="nombrePoulets" />
              </AvGroup>
              <AvGroup>
                <Label id="nombreDecesLabel" for="phase-production-nombreDeces">
                  Nombre Deces
                </Label>
                <AvField id="phase-production-nombreDeces" type="string" className="form-control" name="nombreDeces" />
              </AvGroup>
              <AvGroup>
                <Label for="phase-production-batiment">Batiment</Label>
                <AvInput id="phase-production-batiment" type="select" className="form-control" name="batiment.id">
                  <option value="" key="0" />
                  {batiments
                    ? batiments.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="phase-production-listeDepenses">Liste Depenses</Label>
                <AvInput id="phase-production-listeDepenses" type="select" className="form-control" name="listeDepenses.id">
                  <option value="" key="0" />
                  {depenses
                    ? depenses.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/phase-production" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  batiments: storeState.batiment.entities,
  depenses: storeState.depense.entities,
  phaseProductionEntity: storeState.phaseProduction.entity,
  loading: storeState.phaseProduction.loading,
  updating: storeState.phaseProduction.updating,
  updateSuccess: storeState.phaseProduction.updateSuccess
});

const mapDispatchToProps = {
  getBatiments,
  getDepenses,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PhaseProductionUpdate);
