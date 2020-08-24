import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employe.reducer';
import { IEmploye } from 'app/shared/model/employe.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeDetail = (props: IEmployeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { employeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Employe [<b>{employeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="prenom">Prenom</span>
          </dt>
          <dd>{employeEntity.prenom}</dd>
          <dt>
            <span id="nom">Nom</span>
          </dt>
          <dd>{employeEntity.nom}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{employeEntity.email}</dd>
          <dt>
            <span id="numeroTel">Numero Tel</span>
          </dt>
          <dd>{employeEntity.numeroTel}</dd>
          <dt>
            <span id="dateEmbauche">Date Embauche</span>
          </dt>
          <dd>
            <TextFormat value={employeEntity.dateEmbauche} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="salaire">Salaire</span>
          </dt>
          <dd>{employeEntity.salaire}</dd>
          <dt>
            <span id="adresse">Adresse</span>
          </dt>
          <dd>{employeEntity.adresse}</dd>
          <dt>
            <span id="cin">Cin</span>
          </dt>
          <dd>{employeEntity.cin}</dd>
          <dt>
            <span id="dateNaissance">Date Naissance</span>
          </dt>
          <dd>
            <TextFormat value={employeEntity.dateNaissance} type="date" format={APP_LOCAL_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="sexe">Sexe</span>
          </dt>
          <dd>{employeEntity.sexe}</dd>
          <dt>Fonction</dt>
          <dd>{employeEntity.fonction ? employeEntity.fonction.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/employe" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employe/${employeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ employe }: IRootState) => ({
  employeEntity: employe.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeDetail);
