import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './depense.reducer';
import { IDepense } from 'app/shared/model/depense.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDepenseDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export const DepenseDetail = (props: IDepenseDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { depenseEntity } = props;
  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h2>
            Depense [<b>{depenseEntity.id}</b>]
        </h2>
          <AvForm>
            <div className="row">
              <div className="col-12 entity-setup-box">
                <div>
                  <AvGroup>
                    <Label id="nameLabel" for="name">
                      <span id="codeDepense">Code Depense</span>
                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.codeDepense} readOnly />
                  </AvGroup>
                  <AvGroup>
                    <Label id="descrLabel" for="descr">
                      <span id="quantite">Quantite</span>
                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.quantite} readOnly />
                  </AvGroup>
                  <AvGroup>
                    <Label id="addressLabel" for="address">
                      <span id="dateDemande">Date Demande</span>
                    </Label>
                    <TextFormat value={depenseEntity.dateDemande} type="date" format={APP_LOCAL_DATE_FORMAT} />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cityLabel" for="city">
                      <span id="tva">Tva</span>
                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.tva} readOnly />
                  </AvGroup>
                  <AvGroup>
                    <Label id="stateLabel" for="state">
                      <span id="etatDepense">Etat Depense</span>
                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.etatDepense} readOnly />
                  </AvGroup>
                  <AvGroup>
                    <Label id="stateLabel" for="state">
                      Foursnisseur                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.foursnisseur ? depenseEntity.foursnisseur.id : ''} readOnly />
                  </AvGroup>
                  <AvGroup>
                    <Label id="stateLabel" for="state">
                      <dt>Facture</dt>
                    </Label>
                    <input type="text" className="form-control" value={depenseEntity.facture ? depenseEntity.facture.id : ''} readOnly />
                  </AvGroup>
                </div>
                <div className="card-footer">
                  <Button tag={Link} to="/depense" replace color="info">
                    <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
                  </Button>
        &nbsp;
        <Button tag={Link} to={`/depense/${depenseEntity.id}/edit`} replace color="primary">
                    <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                  </Button>
                </div>
              </div>
            </div>
          </AvForm>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ depense }: IRootState) => ({
  depenseEntity: depense.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DepenseDetail);
