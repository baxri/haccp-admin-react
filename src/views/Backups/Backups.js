import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux'
import { loadBackups } from "../../actions/backupActions";
import ContentLoaderTable from '../../Components/ContentLoaderTable'

class Backups extends Component {

  componentDidMount = async () => {
    this.props.loadBackups();
  }

  download = (bundle) => {
    window.location.href = "http://haccp.milady.io/zips/" + bundle + ".zip";
  }

  navigateToControles = (bundle) => {
    this.props.history.push('/backups/' + bundle + '/controles');
  }

  navigateToPictures = (bundle) => {
    this.props.history.push('/backups/' + bundle + '/pictures');
  }

  render() {
    return (
      <div className="animated fadeIn">

        {this.props.loading && <ContentLoaderTable />}

        {!this.props.loading && <Table responsive striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Device</th>
              <th>Bundle</th>
              <th>Filename</th>
              <th>Created_at</th>
              <th>Download</th>
              <th>Controles</th>
              <th>Pictures</th>
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
                  <Button onClick={() => this.navigateToControles(backup.bundle)} block color="ghost-primary">Controles</Button>
                </td>
                <td>
                  <Button onClick={() => this.navigateToPictures(backup.bundle)} block color="ghost-primary">Pictures</Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>}

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
