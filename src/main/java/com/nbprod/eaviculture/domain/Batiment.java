package com.nbprod.eaviculture.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Batiment.
 */
@Entity
@Table(name = "batiment")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Batiment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code_batiment")
    private String codeBatiment;

    @Column(name = "surface")
    private Long surface;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeBatiment() {
        return codeBatiment;
    }

    public Batiment codeBatiment(String codeBatiment) {
        this.codeBatiment = codeBatiment;
        return this;
    }

    public void setCodeBatiment(String codeBatiment) {
        this.codeBatiment = codeBatiment;
    }

    public Long getSurface() {
        return surface;
    }

    public Batiment surface(Long surface) {
        this.surface = surface;
        return this;
    }

    public void setSurface(Long surface) {
        this.surface = surface;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Batiment)) {
            return false;
        }
        return id != null && id.equals(((Batiment) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Batiment{" +
            "id=" + getId() +
            ", codeBatiment='" + getCodeBatiment() + "'" +
            ", surface=" + getSurface() +
            "}";
    }
}
