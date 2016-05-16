// JavaScript Document

var AnimationQueue = Class.extend({
  init: function() {
	
		this.queuedItems = [];
		this.dequeue = jQuery.proxy(this.realDequeue, this);
	}
}); 

AnimationQueue.prototype.queue = function(fn) {
	this.queuedItems.push(fn);
}

AnimationQueue.prototype.realDequeue = function() {
	var fn = this.queuedItems.shift();
	
	if (!fn)
		return;
		
	fn.call();

}
