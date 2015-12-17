package cn.edu.bnu.land.model;

// Generated 2013-9-8 16:59:33 by Hibernate Tools 4.0.0

/**
 * Evaluationindextable generated by hbm2java
 */
public class Evaluationindextable implements java.io.Serializable {

	private Integer projectId;
	private String projectName;
	private String organicmatter;
	private String soilThickness;
	private String phvalue;
	private String totalnitrogen;
	private String totalphosphorus;
	private String totalpotassium;
	private String economyBenefit;
	private String drainagedensity;
	private String roaddensity;
	private String ecologyBenefit;

	public Evaluationindextable() {
	}

	public Evaluationindextable(String projectName, String organicmatter,
			String soilThickness, String phvalue, String totalnitrogen,
			String totalphosphorus, String totalpotassium,
			String economyBenefit, String drainagedensity, String roaddensity,
			String ecologyBenefit) {
		this.projectName = projectName;
		this.organicmatter = organicmatter;
		this.soilThickness = soilThickness;
		this.phvalue = phvalue;
		this.totalnitrogen = totalnitrogen;
		this.totalphosphorus = totalphosphorus;
		this.totalpotassium = totalpotassium;
		this.economyBenefit = economyBenefit;
		this.drainagedensity = drainagedensity;
		this.roaddensity = roaddensity;
		this.ecologyBenefit = ecologyBenefit;
	}

	public Integer getProjectId() {
		return this.projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return this.projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getOrganicmatter() {
		return this.organicmatter;
	}

	public void setOrganicmatter(String organicmatter) {
		this.organicmatter = organicmatter;
	}

	public String getSoilThickness() {
		return this.soilThickness;
	}

	public void setSoilThickness(String soilThickness) {
		this.soilThickness = soilThickness;
	}

	public String getPhvalue() {
		return this.phvalue;
	}

	public void setPhvalue(String phvalue) {
		this.phvalue = phvalue;
	}

	public String getTotalnitrogen() {
		return this.totalnitrogen;
	}

	public void setTotalnitrogen(String totalnitrogen) {
		this.totalnitrogen = totalnitrogen;
	}

	public String getTotalphosphorus() {
		return this.totalphosphorus;
	}

	public void setTotalphosphorus(String totalphosphorus) {
		this.totalphosphorus = totalphosphorus;
	}

	public String getTotalpotassium() {
		return this.totalpotassium;
	}

	public void setTotalpotassium(String totalpotassium) {
		this.totalpotassium = totalpotassium;
	}

	public String getEconomyBenefit() {
		return this.economyBenefit;
	}

	public void setEconomyBenefit(String economyBenefit) {
		this.economyBenefit = economyBenefit;
	}

	public String getDrainagedensity() {
		return this.drainagedensity;
	}

	public void setDrainagedensity(String drainagedensity) {
		this.drainagedensity = drainagedensity;
	}

	public String getRoaddensity() {
		return this.roaddensity;
	}

	public void setRoaddensity(String roaddensity) {
		this.roaddensity = roaddensity;
	}

	public String getEcologyBenefit() {
		return this.ecologyBenefit;
	}

	public void setEcologyBenefit(String ecologyBenefit) {
		this.ecologyBenefit = ecologyBenefit;
	}

}
