package com.example.demo.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.InMessage;
import com.example.demo.model.OutMessage;


@Controller
public class GameInfoController {

	
	@MessageMapping("/v1/chat")
	@SendTo("/topic/game_chat")
	public OutMessage gameInfo(InMessage message){
		
		return new OutMessage(message.getContent());
	}


}



