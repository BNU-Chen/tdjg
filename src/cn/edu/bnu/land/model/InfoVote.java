package cn.edu.bnu.land.model;

// Generated 2013-12-12 16:33:00 by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * InfoVote generated by hbm2java
 */
public class InfoVote implements java.io.Serializable {

	private Integer voteId;
	private String voteTitle;
	private String voteVoter;
	private String voteIntroduction;
	private Date voteStarttime;
	private Date voteEndtime;
	private String voteClass;
	private String voteState;

	public InfoVote() {
	}

	public InfoVote(String voteTitle, String voteVoter,
			String voteIntroduction, Date voteStarttime, Date voteEndtime,
			String voteClass, String voteState) {
		this.voteTitle = voteTitle;
		this.voteVoter = voteVoter;
		this.voteIntroduction = voteIntroduction;
		this.voteStarttime = voteStarttime;
		this.voteEndtime = voteEndtime;
		this.voteClass = voteClass;
		this.voteState = voteState;
	}

	public Integer getVoteId() {
		return this.voteId;
	}

	public void setVoteId(Integer voteId) {
		this.voteId = voteId;
	}

	public String getVoteTitle() {
		return this.voteTitle;
	}

	public void setVoteTitle(String voteTitle) {
		this.voteTitle = voteTitle;
	}

	public String getVoteVoter() {
		return this.voteVoter;
	}

	public void setVoteVoter(String voteVoter) {
		this.voteVoter = voteVoter;
	}

	public String getVoteIntroduction() {
		return this.voteIntroduction;
	}

	public void setVoteIntroduction(String voteIntroduction) {
		this.voteIntroduction = voteIntroduction;
	}

	public Date getVoteStarttime() {
		return this.voteStarttime;
	}

	public void setVoteStarttime(Date voteStarttime) {
		this.voteStarttime = voteStarttime;
	}

	public Date getVoteEndtime() {
		return this.voteEndtime;
	}

	public void setVoteEndtime(Date voteEndtime) {
		this.voteEndtime = voteEndtime;
	}

	public String getVoteClass() {
		return this.voteClass;
	}

	public void setVoteClass(String voteClass) {
		this.voteClass = voteClass;
	}

	public String getVoteState() {
		return this.voteState;
	}

	public void setVoteState(String voteState) {
		this.voteState = voteState;
	}

}
