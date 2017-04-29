var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () =>{
	it('should exist', () =>{
		expect(Timer).toExist();
	});

	it('should count properly', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>)

		expect(timer.state.count).toBe(0);
		timer.handleStatusChange('started');
		//timer.startTimer(); big fucking mistake
		setTimeout(() => {
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});

	describe('handleStatusChange', () => {
		it('should stop count properly', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			//timer.startTimer(); big fucking mistake
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');

			setTimeout(() => {				
				expect(timer.state.count).toBe(0);		
				done();
		}, 3001);
		});

		it('should pause count properly', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			//timer.startTimer(); big fucking mistake
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');
			expect(timer.state.countdownStatus).toBe('paused');
			var sameCount = timer.state.count;
			
			setTimeout(() => {
				expect(timer.state.countdownStatus).toBe('paused');				
				expect(timer.state.count).toBe(sameCount);		
				done();
		}, 3001);		
		});

		it('should resume count properly', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			//timer.startTimer(); big fucking mistake
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');
			expect(timer.state.countdownStatus).toBe('paused');
			var sameCount = timer.state.count;
			timer.handleStatusChange('started');
			expect(timer.state.countdownStatus).toBe('started');
			
			
			setTimeout(() => {
				expect(timer.state.countdownStatus).toBe('started');				
				expect(timer.state.count).toNotBe(sameCount);		
				done();
		}, 3001);		
		});
	});
});