package com.nbprod.eaviculture.web.rest;

import com.nbprod.eaviculture.domain.TypeProduit;
import com.nbprod.eaviculture.repository.TypeProduitRepository;
import com.nbprod.eaviculture.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.nbprod.eaviculture.domain.TypeProduit}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TypeProduitResource {

    private final Logger log = LoggerFactory.getLogger(TypeProduitResource.class);

    private static final String ENTITY_NAME = "typeProduit";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TypeProduitRepository typeProduitRepository;

    public TypeProduitResource(TypeProduitRepository typeProduitRepository) {
        this.typeProduitRepository = typeProduitRepository;
    }

    /**
     * {@code POST  /type-produits} : Create a new typeProduit.
     *
     * @param typeProduit the typeProduit to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new typeProduit, or with status {@code 400 (Bad Request)} if the typeProduit has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/type-produits")
    public ResponseEntity<TypeProduit> createTypeProduit(@RequestBody TypeProduit typeProduit) throws URISyntaxException {
        log.debug("REST request to save TypeProduit : {}", typeProduit);
        if (typeProduit.getId() != null) {
            throw new BadRequestAlertException("A new typeProduit cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TypeProduit result = typeProduitRepository.save(typeProduit);
        return ResponseEntity.created(new URI("/api/type-produits/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /type-produits} : Updates an existing typeProduit.
     *
     * @param typeProduit the typeProduit to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated typeProduit,
     * or with status {@code 400 (Bad Request)} if the typeProduit is not valid,
     * or with status {@code 500 (Internal Server Error)} if the typeProduit couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/type-produits")
    public ResponseEntity<TypeProduit> updateTypeProduit(@RequestBody TypeProduit typeProduit) throws URISyntaxException {
        log.debug("REST request to update TypeProduit : {}", typeProduit);
        if (typeProduit.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TypeProduit result = typeProduitRepository.save(typeProduit);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, typeProduit.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /type-produits} : get all the typeProduits.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of typeProduits in body.
     */
    @GetMapping("/type-produits")
    public List<TypeProduit> getAllTypeProduits() {
        log.debug("REST request to get all TypeProduits");
        return typeProduitRepository.findAll();
    }

    /**
     * {@code GET  /type-produits/:id} : get the "id" typeProduit.
     *
     * @param id the id of the typeProduit to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the typeProduit, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/type-produits/{id}")
    public ResponseEntity<TypeProduit> getTypeProduit(@PathVariable Long id) {
        log.debug("REST request to get TypeProduit : {}", id);
        Optional<TypeProduit> typeProduit = typeProduitRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(typeProduit);
    }

    /**
     * {@code DELETE  /type-produits/:id} : delete the "id" typeProduit.
     *
     * @param id the id of the typeProduit to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/type-produits/{id}")
    public ResponseEntity<Void> deleteTypeProduit(@PathVariable Long id) {
        log.debug("REST request to delete TypeProduit : {}", id);
        typeProduitRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
