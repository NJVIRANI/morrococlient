import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './phase-production.reducer';
import { IPhaseProduction } from 'app/shared/model/phase-production.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPhaseProductionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PhaseProductionDetail = (props: IPhaseProductionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { phaseProductionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          PhaseProduction [<b>{phaseProductionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="codePhase">Code Phase</span>
          </dt>
          <dd>{phaseProductionEntity.codePhase}</dd>
          <dt>
            <span id="dateDebut">Date Debut</span>
          </dt>
          <dd>
            <TextFormat value={phaseProductionEntity.dateDebut} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="dateFin">Date Fin</span>
          </dt>
          <dd>
            <TextFormat value={phaseProductionEntity.dateFin} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="nombrePoulets">Nombre Poulets</span>
          </dt>
          <dd>{phaseProductionEntity.nombrePoulets}</dd>
          <dt>
            <span id="nombreDeces">Nombre Deces</span>
          </dt>
          <dd>{phaseProductionEntity.nombreDeces}</dd>
          <dt>Batiment</dt>
          <dd>{phaseProductionEntity.batiment ? phaseProductionEntity.batiment.id : ''}</dd>
          <dt>Liste Depenses</dt>
          <dd>{phaseProductionEntity.listeDepenses ? phaseProductionEntity.listeDepenses.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/phase-production" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/phase-production/${phaseProductionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ phaseProduction }: IRootState) => ({
  phaseProductionEntity: phaseProduction.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PhaseProductionDetail);
