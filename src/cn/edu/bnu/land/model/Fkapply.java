package cn.edu.bnu.land.model;
// Generated 2014-1-17 21:23:58 by Hibernate Tools 4.0.0

import java.util.Date;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 * Fkapply generated by hbm2java
 */
public class Fkapply implements java.io.Serializable {

	private String applyId;
	private String projectname;
	private String conUnit;
	private String projectId;
	private Date applyDate;
	private String note;
	private String fileCheck;
	private String checkResult;
	//private CommonsMultipartFile file;

	public Fkapply() {
	}

	public Fkapply(String applyId) {
		this.applyId = applyId;
	}

	public Fkapply(String applyId, String projectname, String conUnit,
			String projectId, Date applyDate, String note, String fileCheck,String checkResult) {
		this.applyId = applyId;
		this.projectname = projectname;
		this.conUnit = conUnit;
		this.projectId = projectId;
		this.applyDate = applyDate;
		this.note = note;
		this.fileCheck=fileCheck;
		this.checkResult=checkResult;
	}

	public String getApplyId() {
		return this.applyId;
	}

	public void setApplyId(String applyId) {
		this.applyId = applyId;
	}

	public String getProjectname() {
		return this.projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}

	public String getConUnit() {
		return this.conUnit;
	}

	public void setConUnit(String conUnit) {
		this.conUnit = conUnit;
	}

	public String getProjectId() {
		return this.projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public Date getApplyDate() {
		return this.applyDate;
	}

	public void setApplyDate(Date applyDate) {
		this.applyDate = applyDate;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}
/*
	public CommonsMultipartFile getFile() {
		return file;
	}

	public void setFile(CommonsMultipartFile file) {
		this.file = file;
	}*/

	public String getFileCheck() {
		return fileCheck;
	}

	public void setFileCheck(String fileCheck) {
		this.fileCheck = fileCheck;
	}

	public String getCheckResult() {
		return checkResult;
	}

	public void setCheckResult(String checkResult) {
		this.checkResult = checkResult;
	}

}
