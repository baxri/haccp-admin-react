import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux'
import { loadBackups } from "../../actions/backupActions";
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import TableList from "../../Components/TableList";

class Backups extends Component {

  constructor(props) {
    super(props)

    this.state = {
      headers: [

        {
          name: 'Id',
          accessor: 'id'
        },
        {
          name: 'Date',
          accessor: 'name'
        },
        {
          name: 'Device',
          accessor: 'device'
        },
        {
          name: 'Bundle',
          accessor: 'bundle'
        },
        {
          name: 'Created_at',
          accessor: 'created_at'
        },

        {
          name: 'Download',
          accessor: (item) => {
            return <Button onClick={() => this.download(item.bundle)} block color="ghost-primary">Download</Button>
          }
        },
        {
          name: 'Departments',
          accessor: (item) => {
            return <Button onClick={() => this.navigateToDepartments(item.bundle)} block color="ghost-primary">Departments</Button>
          }
        },
        {
          name: 'Controles',
          accessor: (item) => {
            return <Button onClick={() => this.navigateToControles(item.bundle)} block color="ghost-primary">Controles</Button>
          }
        },
        {
          name: 'Pictures',
          accessor: (item) => {
            return <Button onClick={() => this.navigateToPictures(item.bundle)} block color="ghost-primary">Pictures</Button>
          }
        },
      ]
    }
  }

  componentDidMount = async () => {
    this.props.loadBackups();
  }

  download = (bundle) => {
    window.location.href = "http://haccp.milady.io/zips/" + bundle + ".zip";
  }

  navigateToDepartments = (bundle) => {
    this.props.history.push('/backups/' + bundle + '/departments');
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
        {!this.props.loading && <TableList headers={this.state.headers} data={this.props.backups} />}
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
