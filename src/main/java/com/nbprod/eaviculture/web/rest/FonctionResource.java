package com.nbprod.eaviculture.web.rest;

import com.nbprod.eaviculture.domain.Fonction;
import com.nbprod.eaviculture.repository.FonctionRepository;
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
 * REST controller for managing {@link com.nbprod.eaviculture.domain.Fonction}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FonctionResource {

    private final Logger log = LoggerFactory.getLogger(FonctionResource.class);

    private static final String ENTITY_NAME = "fonction";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FonctionRepository fonctionRepository;

    public FonctionResource(FonctionRepository fonctionRepository) {
        this.fonctionRepository = fonctionRepository;
    }

    /**
     * {@code POST  /fonctions} : Create a new fonction.
     *
     * @param fonction the fonction to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fonction, or with status {@code 400 (Bad Request)} if the fonction has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/fonctions")
    public ResponseEntity<Fonction> createFonction(@RequestBody Fonction fonction) throws URISyntaxException {
        log.debug("REST request to save Fonction : {}", fonction);
        if (fonction.getId() != null) {
            throw new BadRequestAlertException("A new fonction cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Fonction result = fonctionRepository.save(fonction);
        return ResponseEntity.created(new URI("/api/fonctions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /fonctions} : Updates an existing fonction.
     *
     * @param fonction the fonction to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fonction,
     * or with status {@code 400 (Bad Request)} if the fonction is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fonction couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/fonctions")
    public ResponseEntity<Fonction> updateFonction(@RequestBody Fonction fonction) throws URISyntaxException {
        log.debug("REST request to update Fonction : {}", fonction);
        if (fonction.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Fonction result = fonctionRepository.save(fonction);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, fonction.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /fonctions} : get all the fonctions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fonctions in body.
     */
    @GetMapping("/fonctions")
    public List<Fonction> getAllFonctions() {
        log.debug("REST request to get all Fonctions");
        return fonctionRepository.findAll();
    }

    /**
     * {@code GET  /fonctions/:id} : get the "id" fonction.
     *
     * @param id the id of the fonction to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fonction, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/fonctions/{id}")
    public ResponseEntity<Fonction> getFonction(@PathVariable Long id) {
        log.debug("REST request to get Fonction : {}", id);
        Optional<Fonction> fonction = fonctionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(fonction);
    }

    /**
     * {@code DELETE  /fonctions/:id} : delete the "id" fonction.
     *
     * @param id the id of the fonction to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/fonctions/{id}")
    public ResponseEntity<Void> deleteFonction(@PathVariable Long id) {
        log.debug("REST request to delete Fonction : {}", id);
        fonctionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
