import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './fonction.reducer';
import { IFonction } from 'app/shared/model/fonction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFonctionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FonctionDetail = (props: IFonctionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fonctionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Fonction [<b>{fonctionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="prenom">Prenom</span>
          </dt>
          <dd>{fonctionEntity.prenom}</dd>
          <dt>
            <span id="codeFonction">Code Fonction</span>
          </dt>
          <dd>{fonctionEntity.codeFonction}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{fonctionEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/fonction" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fonction/${fonctionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fonction }: IRootState) => ({
  fonctionEntity: fonction.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FonctionDetail);
