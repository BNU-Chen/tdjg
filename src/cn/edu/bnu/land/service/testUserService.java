package cn.edu.bnu.land.service;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.edu.bnu.land.model.TestUserId;

@Service
public class testUserService {
	private SessionFactory sessionFactory;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	// -----------------------------用户信息users---------------------------
	// 查询用户信息
	@SuppressWarnings("unchecked")
	public Map<String, Object> getUsersList(String searchKey) {
		System.out.println("进入getUsersList函数-----");
		String hql = "FROM TestUserId as u";
		if (!searchKey.equals("")) {
			String hql2 = " WHERE u.userName LIKE '%" + searchKey + "%'"
					+ "OR u.address LIKE '%" + searchKey + "%'"
					+ " OR u.telNum LIKE '%" + searchKey + "%'";
			hql = hql + hql2;
		}
		System.out.println(hql);
		List<TestUserId> results = null;
		org.hibernate.Query query = sessionFactory.getCurrentSession()
				.createQuery(hql);
		results = (List<TestUserId>) query.list();
		Map<String, Object> myMapResult = new TreeMap<String, Object>();
		myMapResult.put("root", results);
		myMapResult.put("success", true);
		return myMapResult;
	}
}
