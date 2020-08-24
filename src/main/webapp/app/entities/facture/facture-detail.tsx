import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './facture.reducer';
import { IFacture } from 'app/shared/model/facture.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFactureDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FactureDetail = (props: IFactureDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { factureEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Facture [<b>{factureEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="numeroFacture">Numero Facture</span>
          </dt>
          <dd>{factureEntity.numeroFacture}</dd>
          <dt>
            <span id="dateFacturation">Date Facturation</span>
          </dt>
          <dd>
            <TextFormat value={factureEntity.dateFacturation} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="prixUnite">Prix Unite</span>
          </dt>
          <dd>{factureEntity.prixUnite}</dd>
          <dt>
            <span id="tva">Tva</span>
          </dt>
          <dd>{factureEntity.tva}</dd>
          <dt>
            <span id="quantite">Quantite</span>
          </dt>
          <dd>{factureEntity.quantite}</dd>
          <dt>
            <span id="fraisLivraison">Frais Livraison</span>
          </dt>
          <dd>{factureEntity.fraisLivraison}</dd>
          <dt>
            <span id="methodPaiment">Method Paiment</span>
          </dt>
          <dd>{factureEntity.methodPaiment}</dd>
          <dt>
            <span id="etatFacture">Etat Facture</span>
          </dt>
          <dd>{factureEntity.etatFacture}</dd>
        </dl>
        <Button tag={Link} to="/facture" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/facture/${factureEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ facture }: IRootState) => ({
  factureEntity: facture.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FactureDetail);
