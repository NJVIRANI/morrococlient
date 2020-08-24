import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './facture.reducer';
import { IFacture } from 'app/shared/model/facture.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFactureProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Facture = (props: IFactureProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { factureList, match, loading } = props;
  return (
    <div>
      <h2 id="facture-heading">
        Factures
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Facture
        </Link>
      </h2>
      <div className="table-responsive">
        {factureList && factureList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Numero Facture</th>
                <th>Date Facturation</th>
                <th>Prix Unite</th>
                <th>Tva</th>
                <th>Quantite</th>
                <th>Frais Livraison</th>
                <th>Method Paiment</th>
                <th>Etat Facture</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {factureList.map((facture, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${facture.id}`} color="link" size="sm">
                      {facture.id}
                    </Button>
                  </td>
                  <td>{facture.numeroFacture}</td>
                  <td>
                    <TextFormat type="date" value={facture.dateFacturation} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>{facture.prixUnite}</td>
                  <td>{facture.tva}</td>
                  <td>{facture.quantite}</td>
                  <td>{facture.fraisLivraison}</td>
                  <td>{facture.methodPaiment}</td>
                  <td>{facture.etatFacture}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${facture.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${facture.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${facture.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Factures found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ facture }: IRootState) => ({
  factureList: facture.entities,
  loading: facture.loading
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Facture);
