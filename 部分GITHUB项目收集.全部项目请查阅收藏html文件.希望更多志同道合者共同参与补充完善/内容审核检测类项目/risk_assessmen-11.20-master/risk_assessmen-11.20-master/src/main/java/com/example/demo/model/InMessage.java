package com.example.demo.model;

import java.util.Date;

public class InMessage {
	
	//从哪里来
	private String from;
	
	//到哪里去
	private String to;
	
	private String content;
	
	private Date time;

	public String getFrom() {
		return from;
	}

	
	public InMessage(){}
	
	public InMessage(String content) {
		this.content = content;
	}
	
	
	
	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}
	
	
	


}
