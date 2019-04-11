package com.duruo.webserviceClient;

import com.duruo.webserviceClient.xuhuisms.UCPCXFService;
import com.duruo.webserviceClient.xuhuisms.UCPCXFServiceImplService;

import java.net.MalformedURLException;
import java.net.URL;

public class XUHUISMSTest {
	public static void main(String[] args) {
		URL url = null;
		try {
			url = new URL(
					"http://31.0.1.234:9080/WebUCP/webservices/UCPCXFService?wsdl");
		} catch (MalformedURLException e) {
			System.err
					.println("Can not initialize the default wsdl from http://localhost:8080/acproduct/services/netReservationService?wsdl");
			// e.printStackTrace();
		}
		UCPCXFServiceImplService instance = new UCPCXFServiceImplService(url);
		UCPCXFService service = instance.getUCPCXFServiceImplPort();
		//String sessionId = service.login("admin", "888888");
		String sessionId = service.login("weiruan", "weiruan");
		System.out.println(sessionId);
		String result = service.sendProxySMS(sessionId, "13767094798",
				"今天真的很开心");
		System.out.println(result);
	}
}
