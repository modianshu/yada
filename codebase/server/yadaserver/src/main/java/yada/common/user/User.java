package yada.common.user;

import java.util.Date;

import yada.BaseEntity;

public class User extends BaseEntity
{
	public enum UserType {STUDENT, COACH, PARENT, GUEST, SCHOOLADMIN, SYSTEMADMIN};
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getScreenName() {
		return screenName;
	}
	public void setScreenName(String screenName) {
		this.screenName = screenName;
	}
	public String getAccountDisabledReason() {
		return accountDisabledReason;
	}
	public void setAccountDisabledReason(String accountDisabledReason) {
		this.accountDisabledReason = accountDisabledReason;
	}
	public UserType getRole() {
		return role;
	}
	public void setRole(UserType role) {
		this.role = role;
	}
	public Date getLastLoggedIn() {
		return lastLoggedIn;
	}
	public void setLastLoggedIn(Date lastLoggedIn) {
		this.lastLoggedIn = lastLoggedIn;
	}
	public Date getMemberSince() {
		return memberSince;
	}
	public void setMemberSince(Date memberSince) {
		this.memberSince = memberSince;
	}
	public Date getAcctExpirationDate() {
		return acctExpirationDate;
	}
	public void setAcctExpirationDate(Date acctExpirationDate) {
		this.acctExpirationDate = acctExpirationDate;
	}
	public String[] getGuardians() {
		return guardians;
	}
	public void setGuardians(String[] guardians) {
		this.guardians = guardians;
	}
	public boolean isAccountDisabled() {
		return accountDisabled;
	}
	public void setAccountDisabled(boolean accountDisabled) {
		this.accountDisabled = accountDisabled;
	}
	public boolean isCanShareWithClass() {
		return canShareWithClass;
	}
	public void setCanShareWithClass(boolean canShareWithClass) {
		this.canShareWithClass = canShareWithClass;
	}
	public boolean isCanShareWithSchool() {
		return canShareWithSchool;
	}
	public void setCanShareWithSchool(boolean canShareWithSchool) {
		this.canShareWithSchool = canShareWithSchool;
	}
	public boolean isCanShareWithPublic() {
		return canShareWithPublic;
	}
	public void setCanShareWithPublic(boolean canShareWithPublic) {
		this.canShareWithPublic = canShareWithPublic;
	}
	private String email, screenName, accountDisabledReason ;
	private UserType role; 
	private Date lastLoggedIn, memberSince, acctExpirationDate;
	private String[] guardians;
	private boolean accountDisabled, canShareWithClass, canShareWithSchool, canShareWithPublic;
	
	}
