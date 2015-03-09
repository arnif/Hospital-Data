var HospitalView = React.createClass({
	getDefaultProps: function() {
		return {
			hospitalData: {}
		}
	},
	render: function() { //TODO display data
		var that = this;
		var objectItems = [] 
		Object.getOwnPropertyNames(this.props.hospitalData).forEach(function(val, idx, array) {
			//console.log(val + ' -> ' + that.props.hospitalData[val]);
  							objectItems.push(<li>{val + ' -> ' + that.props.hospitalData[val]}</li>)
						});
		// console.log(objectItems);
		return (
			<div>
				<ul>
					<li>{objectItems}</li>
				</ul>
			</div>
		)
	}
});