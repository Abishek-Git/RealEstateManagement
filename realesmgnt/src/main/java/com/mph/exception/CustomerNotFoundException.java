package com.mph.exception;

public class CustomerNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String errorMsg = "Customer is not found";

	public CustomerNotFoundException() {
		super();
	}

	public CustomerNotFoundException(String errorMsg) {
		super();
		this.errorMsg = errorMsg;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	@Override
	public String toString() {
		return "CustomerNotFoundException [errorMsg=" + errorMsg + "]";
	}

}
