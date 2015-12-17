package cn.edu.bnu.land.model;

// Generated 2014-4-24 21:36:09 by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * RwTable generated by hbm2java
 */
public class Rask implements java.io.Serializable {

	private String rwId;
	private String projectId;
	private String projectName;
	private String rwContent;
	private String rwClass;
	private Date rwGeneratetime;
	private Date rwStarttime;
	private Date rwEndtime;
	private Date rwSubmittime;
	private Boolean rwIsfinished;
	private String rwResponsiblePerson;

	public Rask() {
	}

	public Rask(String rwId, String projectId, String rwContent) {
		this.rwId = rwId;
		this.projectId = projectId;
		this.rwContent = rwContent;
	}

	public Rask(String rwId, String projectId, String projectName,
			String rwContent, String rwClass, Date rwGeneratetime,
			Date rwStarttime, Date rwEndtime, Date rwSubmittime,
			Boolean rwIsfinished, String rwResponsiblePerson) {
		this.rwId = rwId;
		this.projectId = projectId;
		this.projectName = projectName;
		this.rwContent = rwContent;
		this.rwClass = rwClass;
		this.rwGeneratetime = rwGeneratetime;
		this.rwStarttime = rwStarttime;
		this.rwEndtime = rwEndtime;
		this.rwSubmittime = rwSubmittime;
		this.rwIsfinished = rwIsfinished;
		this.rwResponsiblePerson = rwResponsiblePerson;
	}

	public String getRwId() {
		return this.rwId;
	}

	public void setRwId(String rwId) {
		this.rwId = rwId;
	}

	public String getProjectId() {
		return this.projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return this.projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getRwContent() {
		return this.rwContent;
	}

	public void setRwContent(String rwContent) {
		this.rwContent = rwContent;
	}

	public String getRwClass() {
		return this.rwClass;
	}

	public void setRwClass(String rwClass) {
		this.rwClass = rwClass;
	}

	public Date getRwGeneratetime() {
		return this.rwGeneratetime;
	}

	public void setRwGeneratetime(Date rwGeneratetime) {
		this.rwGeneratetime = rwGeneratetime;
	}

	public Date getRwStarttime() {
		return this.rwStarttime;
	}

	public void setRwStarttime(Date rwStarttime) {
		this.rwStarttime = rwStarttime;
	}

	public Date getRwEndtime() {
		return this.rwEndtime;
	}

	public void setRwEndtime(Date rwEndtime) {
		this.rwEndtime = rwEndtime;
	}

	public Date getRwSubmittime() {
		return this.rwSubmittime;
	}

	public void setRwSubmittime(Date rwSubmittime) {
		this.rwSubmittime = rwSubmittime;
	}

	public Boolean getRwIsfinished() {
		return this.rwIsfinished;
	}

	public void setRwIsfinished(Boolean rwIsfinished) {
		this.rwIsfinished = rwIsfinished;
	}

	public String getRwResponsiblePerson() {
		return this.rwResponsiblePerson;
	}

	public void setRwResponsiblePerson(String rwResponsiblePerson) {
		this.rwResponsiblePerson = rwResponsiblePerson;
	}

}
