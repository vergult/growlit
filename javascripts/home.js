$(document).ready(function () {
	$("#growlit-notice-launcher").click(function() {
		$.growlit("This is the default notification!")
	});
	$("#growlit-error-launcher").click(function() {
		$.growlit("This is the error notification!", { messageType: "error", duration: 5000 })
	});
	$("#growlit-success-launcher").click(function() {
		$.growlit("This is the success notification!", { messageType: "success", duration: 4000 })
	});
	$("#growlit-sticky-notice-launcher").click(function() {
		$.growlit("This is the sticky notice notification!", { messageType: "notice", sticky: true })
	});
	$("#growlit-sticky-success-launcher").click(function() {
		$.growlit("This is the sticky success notification!", { messageType: "success", sticky: true })
	});
	$("#growlit-sticky-error-launcher").click(function() {
		$.growlit("This is the sticky error notification!", { messageType: "error", sticky: true })
	});
});