package cn.edu.bnu.land.model;

// Generated 2016-1-10 20:27:18 by Hibernate Tools 4.0.0

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Zbgmgl.
 * @see cn.edu.bnu.land.model.Zbgmgl
 * @author Hibernate Tools
 */
@Stateless
public class ZbgmglHome {

	private static final Log log = LogFactory.getLog(ZbgmglHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Zbgmgl transientInstance) {
		log.debug("persisting Zbgmgl instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Zbgmgl persistentInstance) {
		log.debug("removing Zbgmgl instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Zbgmgl merge(Zbgmgl detachedInstance) {
		log.debug("merging Zbgmgl instance");
		try {
			Zbgmgl result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Zbgmgl findById(Integer id) {
		log.debug("getting Zbgmgl instance with id: " + id);
		try {
			Zbgmgl instance = entityManager.find(Zbgmgl.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
