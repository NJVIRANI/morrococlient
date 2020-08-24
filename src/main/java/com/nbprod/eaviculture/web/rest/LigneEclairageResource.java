package com.nbprod.eaviculture.web.rest;

import com.nbprod.eaviculture.domain.LigneEclairage;
import com.nbprod.eaviculture.repository.LigneEclairageRepository;
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
 * REST controller for managing {@link com.nbprod.eaviculture.domain.LigneEclairage}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class LigneEclairageResource {

    private final Logger log = LoggerFactory.getLogger(LigneEclairageResource.class);

    private static final String ENTITY_NAME = "ligneEclairage";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final LigneEclairageRepository ligneEclairageRepository;

    public LigneEclairageResource(LigneEclairageRepository ligneEclairageRepository) {
        this.ligneEclairageRepository = ligneEclairageRepository;
    }

    /**
     * {@code POST  /ligne-eclairages} : Create a new ligneEclairage.
     *
     * @param ligneEclairage the ligneEclairage to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new ligneEclairage, or with status {@code 400 (Bad Request)} if the ligneEclairage has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/ligne-eclairages")
    public ResponseEntity<LigneEclairage> createLigneEclairage(@RequestBody LigneEclairage ligneEclairage) throws URISyntaxException {
        log.debug("REST request to save LigneEclairage : {}", ligneEclairage);
        if (ligneEclairage.getId() != null) {
            throw new BadRequestAlertException("A new ligneEclairage cannot already have an ID", ENTITY_NAME, "idexists");
        }
        LigneEclairage result = ligneEclairageRepository.save(ligneEclairage);
        return ResponseEntity.created(new URI("/api/ligne-eclairages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /ligne-eclairages} : Updates an existing ligneEclairage.
     *
     * @param ligneEclairage the ligneEclairage to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated ligneEclairage,
     * or with status {@code 400 (Bad Request)} if the ligneEclairage is not valid,
     * or with status {@code 500 (Internal Server Error)} if the ligneEclairage couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/ligne-eclairages")
    public ResponseEntity<LigneEclairage> updateLigneEclairage(@RequestBody LigneEclairage ligneEclairage) throws URISyntaxException {
        log.debug("REST request to update LigneEclairage : {}", ligneEclairage);
        if (ligneEclairage.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        LigneEclairage result = ligneEclairageRepository.save(ligneEclairage);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, ligneEclairage.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /ligne-eclairages} : get all the ligneEclairages.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of ligneEclairages in body.
     */
    @GetMapping("/ligne-eclairages")
    public List<LigneEclairage> getAllLigneEclairages() {
        log.debug("REST request to get all LigneEclairages");
        return ligneEclairageRepository.findAll();
    }

    /**
     * {@code GET  /ligne-eclairages/:id} : get the "id" ligneEclairage.
     *
     * @param id the id of the ligneEclairage to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the ligneEclairage, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/ligne-eclairages/{id}")
    public ResponseEntity<LigneEclairage> getLigneEclairage(@PathVariable Long id) {
        log.debug("REST request to get LigneEclairage : {}", id);
        Optional<LigneEclairage> ligneEclairage = ligneEclairageRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(ligneEclairage);
    }

    /**
     * {@code DELETE  /ligne-eclairages/:id} : delete the "id" ligneEclairage.
     *
     * @param id the id of the ligneEclairage to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/ligne-eclairages/{id}")
    public ResponseEntity<Void> deleteLigneEclairage(@PathVariable Long id) {
        log.debug("REST request to delete LigneEclairage : {}", id);
        ligneEclairageRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
