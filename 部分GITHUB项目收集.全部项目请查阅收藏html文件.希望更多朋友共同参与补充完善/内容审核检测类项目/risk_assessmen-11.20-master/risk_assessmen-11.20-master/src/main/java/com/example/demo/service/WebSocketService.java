package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.model.InMessage ;
import com.example.demo.model.OutMessage ;


/**
 * 
 * 功能描述：简单消息模板，用来推送消息
 *
 * <p> 创建时间：Jan 4, 2018 </p> 
 * <p> 贡献者：小D学院, 官网：www.xdclass.net </p>
 *
 * @author <a href="mailto:xd@xdclass.net">小D老师</a>
 * @since 0.0.1
 */
@Service
public class WebSocketService {

	
	@Autowired
	private SimpMessagingTemplate template;
	
	public void sendTopicMessage(String dest, InMessage message) throws InterruptedException{
	
		for(int i=0; i<20; i++){
			Thread.sleep(500L);
			template.convertAndSend(dest, new OutMessage(message.getContent()+i));
		}
		
		
	}

	public void sendChatMessage(InMessage message) {
		template.convertAndSend("/chat/single/"+message.getTo(),
				new OutMessage(message.getFrom()+" 发送:"+ message.getContent()));
		
	}
	
	
}
