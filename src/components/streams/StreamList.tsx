import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component<any> {
  componentDidMount(): void {
    const { fetchStreams } = this.props;
    fetchStreams();
  }

  render() {
    return <div>Stream List</div>;
  }
}

export default connect(
  null,
  { fetchStreams }
)(StreamList);