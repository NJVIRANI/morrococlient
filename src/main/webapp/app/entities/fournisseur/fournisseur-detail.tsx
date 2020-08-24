import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './fournisseur.reducer';
import { IFournisseur } from 'app/shared/model/fournisseur.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFournisseurDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FournisseurDetail = (props: IFournisseurDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fournisseurEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Fournisseur [<b>{fournisseurEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nomComplete">Nom Complete</span>
          </dt>
          <dd>{fournisseurEntity.nomComplete}</dd>
          <dt>
            <span id="adresse">Adresse</span>
          </dt>
          <dd>{fournisseurEntity.adresse}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{fournisseurEntity.email}</dd>
          <dt>
            <span id="numeroTel">Numero Tel</span>
          </dt>
          <dd>{fournisseurEntity.numeroTel}</dd>
        </dl>
        <Button tag={Link} to="/fournisseur" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fournisseur/${fournisseurEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fournisseur }: IRootState) => ({
  fournisseurEntity: fournisseur.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FournisseurDetail);
