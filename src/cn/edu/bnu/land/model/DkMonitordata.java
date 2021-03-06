package cn.edu.bnu.land.model;

// Generated 2014-4-24 21:36:09 by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * DkMonitordata generated by hbm2java
 */
public class DkMonitordata implements java.io.Serializable {

	private Integer recordId;
	private String rwId;
	private String projectName;
	private String dkId;
	private Date monitorTime;
	private Double tdpzPercent;
	private Double ntslPercent;
	private Double tjdlPercent;
	private String head;
	private String photoPath;
	private String monitorContent;
	private String coordinateXy;

	public DkMonitordata() {
	}

	public DkMonitordata(String rwId, String projectName, String dkId,
			Date monitorTime, Double tdpzPercent, Double ntslPercent,
			Double tjdlPercent, String head, String photoPath,
			String monitorContent, String coordinateXy) {
		this.rwId = rwId;
		this.projectName = projectName;
		this.dkId = dkId;
		this.monitorTime = monitorTime;
		this.tdpzPercent = tdpzPercent;
		this.ntslPercent = ntslPercent;
		this.tjdlPercent = tjdlPercent;
		this.head = head;
		this.photoPath = photoPath;
		this.monitorContent = monitorContent;
		this.coordinateXy = coordinateXy;
	}

	public Integer getRecordId() {
		return this.recordId;
	}

	public void setRecordId(Integer recordId) {
		this.recordId = recordId;
	}

	public String getRwId() {
		return this.rwId;
	}

	public void setRwId(String rwId) {
		this.rwId = rwId;
	}

	public String getProjectName() {
		return this.projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getDkId() {
		return this.dkId;
	}

	public void setDkId(String dkId) {
		this.dkId = dkId;
	}

	public Date getMonitorTime() {
		return this.monitorTime;
	}

	public void setMonitorTime(Date monitorTime) {
		this.monitorTime = monitorTime;
	}

	public Double getTdpzPercent() {
		return this.tdpzPercent;
	}

	public void setTdpzPercent(Double tdpzPercent) {
		this.tdpzPercent = tdpzPercent;
	}

	public Double getNtslPercent() {
		return this.ntslPercent;
	}

	public void setNtslPercent(Double ntslPercent) {
		this.ntslPercent = ntslPercent;
	}

	public Double getTjdlPercent() {
		return this.tjdlPercent;
	}

	public void setTjdlPercent(Double tjdlPercent) {
		this.tjdlPercent = tjdlPercent;
	}

	public String getHead() {
		return this.head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public String getPhotoPath() {
		return this.photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public String getMonitorContent() {
		return this.monitorContent;
	}

	public void setMonitorContent(String monitorContent) {
		this.monitorContent = monitorContent;
	}

	public String getCoordinateXy() {
		return this.coordinateXy;
	}

	public void setCoordinateXy(String coordinateXy) {
		this.coordinateXy = coordinateXy;
	}

}
