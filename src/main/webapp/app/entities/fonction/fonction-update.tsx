import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './fonction.reducer';
import { IFonction } from 'app/shared/model/fonction.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFonctionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FonctionUpdate = (props: IFonctionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { fonctionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/fonction');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...fonctionEntity,
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
          <h2 id="eAvicultureApp.fonction.home.createOrEditLabel">Create or edit a Fonction</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fonctionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="fonction-id">ID</Label>
                  <AvInput id="fonction-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="prenomLabel" for="fonction-prenom">
                  Prenom
                </Label>
                <AvField id="fonction-prenom" type="text" name="prenom" />
              </AvGroup>
              <AvGroup>
                <Label id="codeFonctionLabel" for="fonction-codeFonction">
                  Code Fonction
                </Label>
                <AvField id="fonction-codeFonction" type="text" name="codeFonction" />
              </AvGroup>
              <AvGroup>
                <Label id="descriptionLabel" for="fonction-description">
                  Description
                </Label>
                <AvField id="fonction-description" type="text" name="description" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/fonction" replace color="info">
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
  fonctionEntity: storeState.fonction.entity,
  loading: storeState.fonction.loading,
  updating: storeState.fonction.updating,
  updateSuccess: storeState.fonction.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FonctionUpdate);
