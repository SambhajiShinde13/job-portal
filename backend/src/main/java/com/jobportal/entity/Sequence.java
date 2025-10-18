package com.jobportal.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "database_sequences") // match the collection name in MongoDB
public class Sequence {
	@Id
	private String id;
	private Long seq;

	// Constructors
	public Sequence() {}
	public Sequence(String id, Long seq) {
		this.id = id;
		this.seq = seq;
	}

	// Getters and Setters
	public String getId() { return id; }
	public void setId(String id) { this.id = id; }

	public Long getSeq() { return seq; }
	public void setSeq(Long seq) { this.seq = seq; }
}
