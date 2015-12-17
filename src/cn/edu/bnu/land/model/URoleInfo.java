package cn.edu.bnu.land.model;

// Generated 2014-5-6 9:39:29 by Hibernate Tools 4.0.0

/**
 * URoleInfo generated by hbm2java
 */
public class URoleInfo implements java.io.Serializable {

	private Integer roleId;
	private String roleNameCn;
	private String roleName;
	private Boolean enabled;
	private String description;

	public URoleInfo() {
	}

	public URoleInfo(String roleNameCn) {
		this.roleNameCn = roleNameCn;
	}

	public URoleInfo(String roleNameCn, String roleName, Boolean enabled,
			String description) {
		this.roleNameCn = roleNameCn;
		this.roleName = roleName;
		this.enabled = enabled;
		this.description = description;
	}

	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleNameCn() {
		return this.roleNameCn;
	}

	public void setRoleNameCn(String roleNameCn) {
		this.roleNameCn = roleNameCn;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Boolean getEnabled() {
		return this.enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
