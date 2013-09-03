FieldsObject=function(value,elementlocator){
	var value;
	var locator;
	this.value=value;
	this.locator=elementlocator;
}

ErrorObject=function(message,elementLocator){
	var msg;
	var locator;
	this.msg=message;
	this.locator=elementLocator;
}