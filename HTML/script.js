var HospitalContainer = React.createClass({
	getInitialState: function() {
		return {
			selected: 'none',
			hospitalData: {}
		}
	},
	changeSelected: function(e) {
		console.log(e.currentTarget.getAttribute('id'));
		this.setState({
			selected: e.currentTarget.getAttribute('id')
		});
	},
	componentDidMount: function() {
		console.log('AJAX');
		var that = this;
		$.get('http://apis.is/hospital', function(data) {
			console.log(data);
			console.log(that);
			that.setState({
				hospitalData: data.results[0]
			});
			console.log(that.state.hospitalData);
		});
	},
	updateData: function(e) {
		
		var sel = e.currentTarget.getAttribute('id') //TODO send to API
var that = this;
		$.get('http://apis.is/hospital', function(data) {
			console.log(data);
			that.setState({
				hospitalData: data.results[0],
				selected: sel
			});
			console.log(that.state.hospitalData);
		});
	},
	render: function() {
		return (
			<div>
				<h3>{this.state.selected}</h3>
				<HospitalButtons makeSelected={this.updateData} />
				<HospitalView hospitalData={this.state.hospitalData} />
			</div>
			
		)
	}
});

var HospitalButtons = React.createClass({
	handleSelected: function(e) {
		this.props.makeSelected(e);
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleSelected} id="last-year">Last year</button>
				<button onClick={this.handleSelected} id="last-month">Last 30 days</button>
				<button onClick={this.handleSelected} id="last-day">Last 7 days</button>
			</div>
		)
	}
});

var HospitalView = React.createClass({
	getDefaultProps: function() {
		return {
			hospitalData: {}
		}
	},
	render: function() { //TODO display data
		var that = this;
		var objectItems = [] 
		var objectItemsArray = {}
		Object.getOwnPropertyNames(this.props.hospitalData).forEach(function(val, idx, array) {
			//console.log(val + ' -> ' + that.props.hospitalData[val]);
  							objectItems.push(<li>{val + ' -> ' + that.props.hospitalData[val]}</li>)
						});
		Object.getOwnPropertyNames(this.props.hospitalData).forEach(function(val, idx, array) {
			//console.log(val + ' -> ' + that.props.hospitalData[val]);
  							objectItemsArray[val] = that.props.hospitalData[val];
						});
		// console.log(objectItems);
		return (
			<div>
				<ul>
					<li>{objectItems}</li>
				</ul>
				<div className="height-div div1">
					Today there are {objectItemsArray.hospitalizedNumbers} hospitalized and {objectItemsArray.dischargedNumbers} discharged
				</div>
			</div>
		)
	}
});

React.render(<HospitalContainer />, document.getElementById('app'));

