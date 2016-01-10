package cn.edu.bnu.land.model;

// Generated 2016-1-10 20:27:17 by Hibernate Tools 4.0.0

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Zbgmgl generated by hbm2java
 */
@Entity
@Table(name = "zbgmgl", catalog = "tdlz")
public class Zbgmgl implements java.io.Serializable {

	private Integer id;
	private String zbpcbh;
	private Float dwed;
	private Integer sl;
	private Float dj;
	private String userid;
	private Integer sgsl;
	private Integer dqhj;
	private Boolean clsfqq;
	private String htwz;
	private String sfzmwz;
	private String zzdmwz;
	private String nspzwz;
	private String yyzzwz;
	private String bzjwz;
	private String pzwz;
	private Float bzjed;
	private Float zbdj;
	private Integer zbsl;
	private Boolean sfzj;
	private Float yfkze;
	private String pcbz;
	private String pcqt;
	private Date fbrq;
	private Date sqjzrq;
	private Date bzjjzrq;
	private Date jjksrq;
	private Date jjjsrq;
	private String jylx;
	private String pczt;

	public Zbgmgl() {
	}

	public Zbgmgl(String zbpcbh, Float dwed, Integer sl, Float dj,
			String userid, Integer sgsl, Integer dqhj, Boolean clsfqq,
			String htwz, String sfzmwz, String zzdmwz, String nspzwz,
			String yyzzwz, String bzjwz, String pzwz, Float bzjed, Float zbdj,
			Integer zbsl, Boolean sfzj, Float yfkze, String pcbz, String pcqt,
			Date fbrq, Date sqjzrq, Date bzjjzrq, Date jjksrq, Date jjjsrq,
			String jylx, String pczt) {
		this.zbpcbh = zbpcbh;
		this.dwed = dwed;
		this.sl = sl;
		this.dj = dj;
		this.userid = userid;
		this.sgsl = sgsl;
		this.dqhj = dqhj;
		this.clsfqq = clsfqq;
		this.htwz = htwz;
		this.sfzmwz = sfzmwz;
		this.zzdmwz = zzdmwz;
		this.nspzwz = nspzwz;
		this.yyzzwz = yyzzwz;
		this.bzjwz = bzjwz;
		this.pzwz = pzwz;
		this.bzjed = bzjed;
		this.zbdj = zbdj;
		this.zbsl = zbsl;
		this.sfzj = sfzj;
		this.yfkze = yfkze;
		this.pcbz = pcbz;
		this.pcqt = pcqt;
		this.fbrq = fbrq;
		this.sqjzrq = sqjzrq;
		this.bzjjzrq = bzjjzrq;
		this.jjksrq = jjksrq;
		this.jjjsrq = jjjsrq;
		this.jylx = jylx;
		this.pczt = pczt;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ID", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "ZBPCBH", length = 20)
	public String getZbpcbh() {
		return this.zbpcbh;
	}

	public void setZbpcbh(String zbpcbh) {
		this.zbpcbh = zbpcbh;
	}

	@Column(name = "DWED", precision = 12, scale = 0)
	public Float getDwed() {
		return this.dwed;
	}

	public void setDwed(Float dwed) {
		this.dwed = dwed;
	}

	@Column(name = "SL")
	public Integer getSl() {
		return this.sl;
	}

	public void setSl(Integer sl) {
		this.sl = sl;
	}

	@Column(name = "DJ", precision = 12, scale = 0)
	public Float getDj() {
		return this.dj;
	}

	public void setDj(Float dj) {
		this.dj = dj;
	}

	@Column(name = "USERID", length = 20)
	public String getUserid() {
		return this.userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	@Column(name = "SGSL")
	public Integer getSgsl() {
		return this.sgsl;
	}

	public void setSgsl(Integer sgsl) {
		this.sgsl = sgsl;
	}

	@Column(name = "DQHJ")
	public Integer getDqhj() {
		return this.dqhj;
	}

	public void setDqhj(Integer dqhj) {
		this.dqhj = dqhj;
	}

	@Column(name = "CLSFQQ")
	public Boolean getClsfqq() {
		return this.clsfqq;
	}

	public void setClsfqq(Boolean clsfqq) {
		this.clsfqq = clsfqq;
	}

	@Column(name = "HTWZ", length = 30)
	public String getHtwz() {
		return this.htwz;
	}

	public void setHtwz(String htwz) {
		this.htwz = htwz;
	}

	@Column(name = "sfzmwz", length = 30)
	public String getSfzmwz() {
		return this.sfzmwz;
	}

	public void setSfzmwz(String sfzmwz) {
		this.sfzmwz = sfzmwz;
	}

	@Column(name = "zzdmwz", length = 30)
	public String getZzdmwz() {
		return this.zzdmwz;
	}

	public void setZzdmwz(String zzdmwz) {
		this.zzdmwz = zzdmwz;
	}

	@Column(name = "nspzwz", length = 30)
	public String getNspzwz() {
		return this.nspzwz;
	}

	public void setNspzwz(String nspzwz) {
		this.nspzwz = nspzwz;
	}

	@Column(name = "yyzzwz", length = 30)
	public String getYyzzwz() {
		return this.yyzzwz;
	}

	public void setYyzzwz(String yyzzwz) {
		this.yyzzwz = yyzzwz;
	}

	@Column(name = "BZJWZ", length = 30)
	public String getBzjwz() {
		return this.bzjwz;
	}

	public void setBzjwz(String bzjwz) {
		this.bzjwz = bzjwz;
	}

	@Column(name = "PZWZ", length = 30)
	public String getPzwz() {
		return this.pzwz;
	}

	public void setPzwz(String pzwz) {
		this.pzwz = pzwz;
	}

	@Column(name = "BZJED", precision = 12, scale = 0)
	public Float getBzjed() {
		return this.bzjed;
	}

	public void setBzjed(Float bzjed) {
		this.bzjed = bzjed;
	}

	@Column(name = "ZBDJ", precision = 12, scale = 0)
	public Float getZbdj() {
		return this.zbdj;
	}

	public void setZbdj(Float zbdj) {
		this.zbdj = zbdj;
	}

	@Column(name = "ZBSL")
	public Integer getZbsl() {
		return this.zbsl;
	}

	public void setZbsl(Integer zbsl) {
		this.zbsl = zbsl;
	}

	@Column(name = "SFZJ")
	public Boolean getSfzj() {
		return this.sfzj;
	}

	public void setSfzj(Boolean sfzj) {
		this.sfzj = sfzj;
	}

	@Column(name = "YFKZE", precision = 12, scale = 0)
	public Float getYfkze() {
		return this.yfkze;
	}

	public void setYfkze(Float yfkze) {
		this.yfkze = yfkze;
	}

	@Column(name = "PCBZ", length = 20)
	public String getPcbz() {
		return this.pcbz;
	}

	public void setPcbz(String pcbz) {
		this.pcbz = pcbz;
	}

	@Column(name = "PCQT", length = 50)
	public String getPcqt() {
		return this.pcqt;
	}

	public void setPcqt(String pcqt) {
		this.pcqt = pcqt;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FBRQ", length = 10)
	public Date getFbrq() {
		return this.fbrq;
	}

	public void setFbrq(Date fbrq) {
		this.fbrq = fbrq;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "SQJZRQ", length = 10)
	public Date getSqjzrq() {
		return this.sqjzrq;
	}

	public void setSqjzrq(Date sqjzrq) {
		this.sqjzrq = sqjzrq;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BZJJZRQ", length = 10)
	public Date getBzjjzrq() {
		return this.bzjjzrq;
	}

	public void setBzjjzrq(Date bzjjzrq) {
		this.bzjjzrq = bzjjzrq;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "JJKSRQ", length = 10)
	public Date getJjksrq() {
		return this.jjksrq;
	}

	public void setJjksrq(Date jjksrq) {
		this.jjksrq = jjksrq;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "JJJSRQ", length = 10)
	public Date getJjjsrq() {
		return this.jjjsrq;
	}

	public void setJjjsrq(Date jjjsrq) {
		this.jjjsrq = jjjsrq;
	}

	@Column(name = "JYLX", length = 10)
	public String getJylx() {
		return this.jylx;
	}

	public void setJylx(String jylx) {
		this.jylx = jylx;
	}

	@Column(name = "PCZT", length = 50)
	public String getPczt() {
		return this.pczt;
	}

	public void setPczt(String pczt) {
		this.pczt = pczt;
	}

}
