package org.elsys.ip.rest.repository;

import org.elsys.ip.rest.model.Test;
import org.elsys.ip.rest.utils.HibernateUtils;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;


public class TestRepository {
  private HibernateUtils utils = new HibernateUtils();

  public Test saveTest(Test test) {
      Session session = utils.getSessionFactory().openSession();

      session.beginTransaction();
      session.save(test);
      session.getTransaction().commit();

      return test;
  }

  public List<Test> getAllTest() {
    Session session = utils.getSessionFactory().openSession();

      Query query = session.createQuery("FROM test");
      List list = query.list();

      return list;
  }
}
