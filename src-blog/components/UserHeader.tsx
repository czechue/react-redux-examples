import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component<any> {
	render() {
		console.log(this.props.user);
		if (!this.props.user) {
			return null;
		}
		return <div>User Header: {this.props.user.name}</div>;
	}
}

const mapStateToProps = (state: any, ownProps: any) => {
	return {
		user: state.users.find((user: any) => user.id === ownProps.userId)
	};
};

export default connect(mapStateToProps)(UserHeader);
