//package com.example.demo;
//
//import com.example.demo.dao.*;
//import com.example.demo.pojo.*;
//import com.example.demo.service.ArticleService;
//import com.example.demo.service.CompanyService;
//import net.sf.json.JSON;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.sql.Timestamp;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import static org.aspectj.bridge.Version.getTime;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class RiskAssessmentApplicationTests {
//    @Autowired
//	private UserPermissionDAO userPermissionDAO;
//    @Autowired
//	private UserDAO userDAO;
//    @Autowired
//	private CompanyService companyService;
//    @Autowired
//	private ComplantsDAO complantsDAO;
//    @Autowired
//	private ArticleService articleService;
//	@Autowired
//	private ArticleDAO articleDAO;
//	@Autowired
//	private CommentDAO commentDAO;
//	@Test
//	public void contextLoads() {
//	}
//    @Test
//	public void Savecompany(){
//		CompanyDO companyDO=new CompanyDO();
//		companyDO.setCompanyName("红塔仁恒");
//		companyDO.setCompanyPemission("3");
//		companyDO.setCompanyDate(new Timestamp(new Date().getTime()));
//		companyDO.setCompanyRepresentative("李钊");
//		companyDO.setComplantsDO(new ComplantsDO("红塔仁恒风险上诉事件"));
//		companyService.saveCompany(companyDO);
//	}
//    @Test
//    public void updatecompany(){
//       CompanyDO companyDO=companyService.findCompany(5);
//       companyDO.setCompanyRepresentative("李冰");
//       companyDO.setCompanyPemission("2");
//       ComplantsDO complantsDO=companyDO.getComplantsDO();
//       complantsDO.setComplantsName("张建上诉事件");
//       companyDO.setComplantsDO(complantsDO);
//        companyService.updateCompany(companyDO);
//    }
//    @Test
//	public void deletecompany(){
//		companyService.deleteCompany(2);
//	}
//	@Test
//	public void findcompany(){
//		CompanyDO companyDO=companyService.findCompany(5);
//		System.out.println(com.alibaba.fastjson.JSON.toJSONString(companyDO));
//	}
//	@Test
//	public void findcomplants(){
//		ComplantsDO complantsDO=complantsDAO.findById(1);
//		System.out.println(com.alibaba.fastjson.JSON.toJSONString(complantsDO));
//	}
//	@Test
//	public void deletecomplants(){
//		complantsDAO.deleteById(2);
//	}
//	@Test
//	public void saveAuthor(){
//		ArticleDO articleDO=new ArticleDO();
//		articleDO.setTitle("中华纸业新闻网");
//		articleDO.setContent("内容");
//		CommentDO commentDO=new CommentDO("这个文章真好!");
//		CommentDO commentDO1=new CommentDO("这个文章还不错哦");
//
//		articleDO.addcomment(commentDO);
//		articleDO.addcomment(commentDO1);
//
//		articleService.saveArticle(articleDO);
//
//	}
//	@Test
//	public void updateAuthor(){
//		ArticleDO articleDO=articleService.findArticle(3);
//		articleDO.setTitle("你的姿态，你的青睐");
//		articleDO.setContent("我存在在我的存在");
//		CommentDO commentDO=new CommentDO("不错哦");
//		CommentDO commentDO1=new CommentDO("还可以的");
//		articleService.updateArticle(articleDO);
//	}
//	@Test
//    public void findAuthor(){
//        ArticleDO articleDO=articleService.findArticle(3);
//        System.out.println(com.alibaba.fastjson.JSON.toJSONString(articleDO));
//    }
//    @Test
//	public void deleteAuthor(){
//		articleService.deleteArticle(2);
//	}
//	@Test
//	public void saveComments(){
//		CommentDO commentDO=new CommentDO("关于互联网思维");
//		commentDO.setArticleDO(articleService.findArticle(3));
//		commentDAO.save(commentDO);
//	}
//	@Test
//	public void deleteComments(){
//		commentDAO.deleteById(7);
//
//	}
//}
