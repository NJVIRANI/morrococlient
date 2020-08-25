package com.nbprod.eaviculture.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.LocalDate;

/**
 * A Depense.
 */
@Entity
@Table(name = "depense")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Depense implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code_depense")
    private String codeDepense;

    @Column(name = "quantite")
    private Integer quantite;

    @Column(name = "date_demande")
    private LocalDate dateDemande;

    @Column(name = "etat_depense")
    private String etatDepense;

    @ManyToOne
    @JsonIgnoreProperties("depenses")
    private Produit produit;

    @ManyToOne
    @JsonIgnoreProperties("depenses")
    private Fournisseur foursnisseur;

    @ManyToOne
    @JsonIgnoreProperties("depenses")
    private Facture facture;

    @ManyToOne
    @JsonIgnoreProperties("listeDepenses")
    private PhaseProduction phaseProduction;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeDepense() {
        return codeDepense;
    }

    public Depense codeDepense(String codeDepense) {
        this.codeDepense = codeDepense;
        return this;
    }

    public void setCodeDepense(String codeDepense) {
        this.codeDepense = codeDepense;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public Depense quantite(Integer quantite) {
        this.quantite = quantite;
        return this;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }

    public LocalDate getDateDemande() {
        return dateDemande;
    }

    public Depense dateDemande(LocalDate dateDemande) {
        this.dateDemande = dateDemande;
        return this;
    }

    public void setDateDemande(LocalDate dateDemande) {
        this.dateDemande = dateDemande;
    }

    public String getEtatDepense() {
        return etatDepense;
    }

    public Depense etatDepense(String etatDepense) {
        this.etatDepense = etatDepense;
        return this;
    }

    public void setEtatDepense(String etatDepense) {
        this.etatDepense = etatDepense;
    }

    public Produit getProduit() {
        return produit;
    }

    public Depense produit(Produit produit) {
        this.produit = produit;
        return this;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    public Fournisseur getFoursnisseur() {
        return foursnisseur;
    }

    public Depense foursnisseur(Fournisseur fournisseur) {
        this.foursnisseur = fournisseur;
        return this;
    }

    public void setFoursnisseur(Fournisseur fournisseur) {
        this.foursnisseur = fournisseur;
    }

    public Facture getFacture() {
        return facture;
    }

    public Depense facture(Facture facture) {
        this.facture = facture;
        return this;
    }

    public void setFacture(Facture facture) {
        this.facture = facture;
    }

    public PhaseProduction getPhaseProduction() {
        return phaseProduction;
    }

    public Depense phaseProduction(PhaseProduction phaseProduction) {
        this.phaseProduction = phaseProduction;
        return this;
    }

    public void setPhaseProduction(PhaseProduction phaseProduction) {
        this.phaseProduction = phaseProduction;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Depense)) {
            return false;
        }
        return id != null && id.equals(((Depense) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Depense{" +
            "id=" + getId() +
            ", codeDepense='" + getCodeDepense() + "'" +
            ", quantite=" + getQuantite() +
            ", dateDemande='" + getDateDemande() + "'" +
            ", etatDepense='" + getEtatDepense() + "'" +
            "}";
    }
}
