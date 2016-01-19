package cn.edu.bnu.land.model;

// Generated 2016-1-19 20:28:42 by Hibernate Tools 4.0.0

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Projection.
 * @see cn.edu.bnu.land.model.Projection
 * @author Hibernate Tools
 */
@Stateless
public class ProjectionHome {

	private static final Log log = LogFactory.getLog(ProjectionHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Projection transientInstance) {
		log.debug("persisting Projection instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Projection persistentInstance) {
		log.debug("removing Projection instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Projection merge(Projection detachedInstance) {
		log.debug("merging Projection instance");
		try {
			Projection result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Projection findById(Integer id) {
		log.debug("getting Projection instance with id: " + id);
		try {
			Projection instance = entityManager.find(Projection.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
