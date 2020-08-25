package com.nbprod.eaviculture.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A PhaseProduction.
 */
@Entity
@Table(name = "phase_production")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class PhaseProduction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code_phase")
    private String codePhase;

    @Column(name = "date_debut")
    private LocalDate dateDebut;

    @Column(name = "date_fin")
    private LocalDate dateFin;

    @Column(name = "nombre_poulets")
    private Integer nombrePoulets;

    @Column(name = "nombre_deces")
    private Integer nombreDeces;

    @OneToMany(mappedBy = "phaseProduction")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<LogParametreEnvironement> logParametreEnvironements = new HashSet<>();

    @OneToMany(mappedBy = "phaseProduction")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Depense> listeDepenses = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("phaseProductions")
    private Batiment batiment;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodePhase() {
        return codePhase;
    }

    public PhaseProduction codePhase(String codePhase) {
        this.codePhase = codePhase;
        return this;
    }

    public void setCodePhase(String codePhase) {
        this.codePhase = codePhase;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public PhaseProduction dateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
        return this;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public PhaseProduction dateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
        return this;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public Integer getNombrePoulets() {
        return nombrePoulets;
    }

    public PhaseProduction nombrePoulets(Integer nombrePoulets) {
        this.nombrePoulets = nombrePoulets;
        return this;
    }

    public void setNombrePoulets(Integer nombrePoulets) {
        this.nombrePoulets = nombrePoulets;
    }

    public Integer getNombreDeces() {
        return nombreDeces;
    }

    public PhaseProduction nombreDeces(Integer nombreDeces) {
        this.nombreDeces = nombreDeces;
        return this;
    }

    public void setNombreDeces(Integer nombreDeces) {
        this.nombreDeces = nombreDeces;
    }

    public Set<LogParametreEnvironement> getLogParametreEnvironements() {
        return logParametreEnvironements;
    }

    public PhaseProduction logParametreEnvironements(Set<LogParametreEnvironement> logParametreEnvironements) {
        this.logParametreEnvironements = logParametreEnvironements;
        return this;
    }

    public PhaseProduction addLogParametreEnvironement(LogParametreEnvironement logParametreEnvironement) {
        this.logParametreEnvironements.add(logParametreEnvironement);
        logParametreEnvironement.setPhaseProduction(this);
        return this;
    }

    public PhaseProduction removeLogParametreEnvironement(LogParametreEnvironement logParametreEnvironement) {
        this.logParametreEnvironements.remove(logParametreEnvironement);
        logParametreEnvironement.setPhaseProduction(null);
        return this;
    }

    public void setLogParametreEnvironements(Set<LogParametreEnvironement> logParametreEnvironements) {
        this.logParametreEnvironements = logParametreEnvironements;
    }

    public Set<Depense> getListeDepenses() {
        return listeDepenses;
    }

    public PhaseProduction listeDepenses(Set<Depense> depenses) {
        this.listeDepenses = depenses;
        return this;
    }

    public PhaseProduction addListeDepenses(Depense depense) {
        this.listeDepenses.add(depense);
        depense.setPhaseProduction(this);
        return this;
    }

    public PhaseProduction removeListeDepenses(Depense depense) {
        this.listeDepenses.remove(depense);
        depense.setPhaseProduction(null);
        return this;
    }

    public void setListeDepenses(Set<Depense> depenses) {
        this.listeDepenses = depenses;
    }

    public Batiment getBatiment() {
        return batiment;
    }

    public PhaseProduction batiment(Batiment batiment) {
        this.batiment = batiment;
        return this;
    }

    public void setBatiment(Batiment batiment) {
        this.batiment = batiment;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PhaseProduction)) {
            return false;
        }
        return id != null && id.equals(((PhaseProduction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "PhaseProduction{" +
            "id=" + getId() +
            ", codePhase='" + getCodePhase() + "'" +
            ", dateDebut='" + getDateDebut() + "'" +
            ", dateFin='" + getDateFin() + "'" +
            ", nombrePoulets=" + getNombrePoulets() +
            ", nombreDeces=" + getNombreDeces() +
            "}";
    }
}
