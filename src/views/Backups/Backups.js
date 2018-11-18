import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux'
import { loadBackups } from "../../actions/backupActions";


class Backups extends Component {

  componentDidMount = async () => {
    this.props.loadBackups();
  }

  download = (bundle) => {
    window.location.href = "http://haccp.milady.io/zips/" + bundle + ".zip";
  }

  open = (backup) => {
    alert("open");
  }

  render() {

    console.log(this.props.backups);

    return (
      <div className="animated fadeIn">

        <Table responsive striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Device</th>
              <th>Bundle</th>
              <th>Filename</th>
              <th>Created_at</th>
              <th>Download</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            {this.props.backups.map((backup, key) => {
              return <tr key={key}>
                <td>{backup.id}</td>
                <td>{backup.name}</td>
                <td>{backup.device}</td>
                <td>{backup.bundle}</td>
                <td>{backup.filename}</td>
                <td>{backup.created_at}</td>
                <td>
                  <Button onClick={() => this.download(backup.bundle)} block color="ghost-primary">Download</Button>
                </td>
                <td>
                  <Button onClick={() => this.open(backup)} block color="ghost-primary">View</Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.backups.loading,
    backups: state.backups.list,
  };
}

export default connect(mapStateToProps, { loadBackups })(Backups);
