package com.nbprod.eaviculture.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Fonction.
 */
@Entity
@Table(name = "fonction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Fonction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code_fonction")
    private String codeFonction;

    @Column(name = "description")
    private String description;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeFonction() {
        return codeFonction;
    }

    public Fonction codeFonction(String codeFonction) {
        this.codeFonction = codeFonction;
        return this;
    }

    public void setCodeFonction(String codeFonction) {
        this.codeFonction = codeFonction;
    }

    public String getDescription() {
        return description;
    }

    public Fonction description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Fonction)) {
            return false;
        }
        return id != null && id.equals(((Fonction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Fonction{" +
            "id=" + getId() +
            ", codeFonction='" + getCodeFonction() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
