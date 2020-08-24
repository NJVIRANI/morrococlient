package com.nbprod.eaviculture.web.rest;

import com.nbprod.eaviculture.domain.PhaseProduction;
import com.nbprod.eaviculture.repository.PhaseProductionRepository;
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
 * REST controller for managing {@link com.nbprod.eaviculture.domain.PhaseProduction}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PhaseProductionResource {

    private final Logger log = LoggerFactory.getLogger(PhaseProductionResource.class);

    private static final String ENTITY_NAME = "phaseProduction";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PhaseProductionRepository phaseProductionRepository;

    public PhaseProductionResource(PhaseProductionRepository phaseProductionRepository) {
        this.phaseProductionRepository = phaseProductionRepository;
    }

    /**
     * {@code POST  /phase-productions} : Create a new phaseProduction.
     *
     * @param phaseProduction the phaseProduction to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new phaseProduction, or with status {@code 400 (Bad Request)} if the phaseProduction has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/phase-productions")
    public ResponseEntity<PhaseProduction> createPhaseProduction(@RequestBody PhaseProduction phaseProduction) throws URISyntaxException {
        log.debug("REST request to save PhaseProduction : {}", phaseProduction);
        if (phaseProduction.getId() != null) {
            throw new BadRequestAlertException("A new phaseProduction cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PhaseProduction result = phaseProductionRepository.save(phaseProduction);
        return ResponseEntity.created(new URI("/api/phase-productions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /phase-productions} : Updates an existing phaseProduction.
     *
     * @param phaseProduction the phaseProduction to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated phaseProduction,
     * or with status {@code 400 (Bad Request)} if the phaseProduction is not valid,
     * or with status {@code 500 (Internal Server Error)} if the phaseProduction couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/phase-productions")
    public ResponseEntity<PhaseProduction> updatePhaseProduction(@RequestBody PhaseProduction phaseProduction) throws URISyntaxException {
        log.debug("REST request to update PhaseProduction : {}", phaseProduction);
        if (phaseProduction.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PhaseProduction result = phaseProductionRepository.save(phaseProduction);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, phaseProduction.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /phase-productions} : get all the phaseProductions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of phaseProductions in body.
     */
    @GetMapping("/phase-productions")
    public List<PhaseProduction> getAllPhaseProductions() {
        log.debug("REST request to get all PhaseProductions");
        return phaseProductionRepository.findAll();
    }

    /**
     * {@code GET  /phase-productions/:id} : get the "id" phaseProduction.
     *
     * @param id the id of the phaseProduction to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the phaseProduction, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/phase-productions/{id}")
    public ResponseEntity<PhaseProduction> getPhaseProduction(@PathVariable Long id) {
        log.debug("REST request to get PhaseProduction : {}", id);
        Optional<PhaseProduction> phaseProduction = phaseProductionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(phaseProduction);
    }

    /**
     * {@code DELETE  /phase-productions/:id} : delete the "id" phaseProduction.
     *
     * @param id the id of the phaseProduction to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/phase-productions/{id}")
    public ResponseEntity<Void> deletePhaseProduction(@PathVariable Long id) {
        log.debug("REST request to delete PhaseProduction : {}", id);
        phaseProductionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
