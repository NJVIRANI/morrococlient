package com.nbprod.eaviculture.web.rest;

import com.nbprod.eaviculture.domain.LogParametreEnvironement;
import com.nbprod.eaviculture.repository.LogParametreEnvironementRepository;
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
 * REST controller for managing {@link com.nbprod.eaviculture.domain.LogParametreEnvironement}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class LogParametreEnvironementResource {

    private final Logger log = LoggerFactory.getLogger(LogParametreEnvironementResource.class);

    private static final String ENTITY_NAME = "logParametreEnvironement";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final LogParametreEnvironementRepository logParametreEnvironementRepository;

    public LogParametreEnvironementResource(LogParametreEnvironementRepository logParametreEnvironementRepository) {
        this.logParametreEnvironementRepository = logParametreEnvironementRepository;
    }

    /**
     * {@code POST  /log-parametre-environements} : Create a new logParametreEnvironement.
     *
     * @param logParametreEnvironement the logParametreEnvironement to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new logParametreEnvironement, or with status {@code 400 (Bad Request)} if the logParametreEnvironement has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/log-parametre-environements")
    public ResponseEntity<LogParametreEnvironement> createLogParametreEnvironement(@RequestBody LogParametreEnvironement logParametreEnvironement) throws URISyntaxException {
        log.debug("REST request to save LogParametreEnvironement : {}", logParametreEnvironement);
        if (logParametreEnvironement.getId() != null) {
            throw new BadRequestAlertException("A new logParametreEnvironement cannot already have an ID", ENTITY_NAME, "idexists");
        }
        LogParametreEnvironement result = logParametreEnvironementRepository.save(logParametreEnvironement);
        return ResponseEntity.created(new URI("/api/log-parametre-environements/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /log-parametre-environements} : Updates an existing logParametreEnvironement.
     *
     * @param logParametreEnvironement the logParametreEnvironement to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated logParametreEnvironement,
     * or with status {@code 400 (Bad Request)} if the logParametreEnvironement is not valid,
     * or with status {@code 500 (Internal Server Error)} if the logParametreEnvironement couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/log-parametre-environements")
    public ResponseEntity<LogParametreEnvironement> updateLogParametreEnvironement(@RequestBody LogParametreEnvironement logParametreEnvironement) throws URISyntaxException {
        log.debug("REST request to update LogParametreEnvironement : {}", logParametreEnvironement);
        if (logParametreEnvironement.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        LogParametreEnvironement result = logParametreEnvironementRepository.save(logParametreEnvironement);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, logParametreEnvironement.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /log-parametre-environements} : get all the logParametreEnvironements.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of logParametreEnvironements in body.
     */
    @GetMapping("/log-parametre-environements")
    public List<LogParametreEnvironement> getAllLogParametreEnvironements() {
        log.debug("REST request to get all LogParametreEnvironements");
        return logParametreEnvironementRepository.findAll();
    }

    /**
     * {@code GET  /log-parametre-environements/:id} : get the "id" logParametreEnvironement.
     *
     * @param id the id of the logParametreEnvironement to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the logParametreEnvironement, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/log-parametre-environements/{id}")
    public ResponseEntity<LogParametreEnvironement> getLogParametreEnvironement(@PathVariable Long id) {
        log.debug("REST request to get LogParametreEnvironement : {}", id);
        Optional<LogParametreEnvironement> logParametreEnvironement = logParametreEnvironementRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(logParametreEnvironement);
    }

    /**
     * {@code DELETE  /log-parametre-environements/:id} : delete the "id" logParametreEnvironement.
     *
     * @param id the id of the logParametreEnvironement to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/log-parametre-environements/{id}")
    public ResponseEntity<Void> deleteLogParametreEnvironement(@PathVariable Long id) {
        log.debug("REST request to delete LogParametreEnvironement : {}", id);
        logParametreEnvironementRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
