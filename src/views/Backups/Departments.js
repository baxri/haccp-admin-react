import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import { realm } from "../../gateway/index";
import TableList from "../../Components/TableList";
import { Badge } from 'reactstrap';

export default class Departmnets extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            department: [],
            headers: [
                {
                    name: 'Department',
                    accessor: 'name'
                }

            ]
        }
    }

    async componentDidMount() {
        let department = await realm('Department', this.props.match.params.id);

        this.setState({
            department: department,
            loading: false,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.loading && <ContentLoaderTable />}
                {!this.state.loading && <TableList headers={this.state.headers} data={this.state.department} />}
            </div>
        )
    }
}
