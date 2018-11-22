import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import { realm } from "../../gateway/index";
import TableList from "../../Components/TableList";

export default class Pictures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            pictures: [],
            headers: [
                {
                    name: 'Picture',
                    accessor: (item) => {
                        return <img height="100" src={'http://haccp.milady.io/uploads/375a3892440333de-1537483997/' + item.source} />;
                    }
                },
                {
                    name: 'Department',
                    accessor: (item) => {
                        return item.department.name;
                    }
                },
                {
                    name: 'User',
                    accessor: (item) => {
                        return item.user.name + ' ' + item.user.lastname;
                    }
                },
                {
                    name: 'Date',
                    accessor: 'date'
                },
            ]
        }
    }

    async componentWillMount() {
        let pictures = await realm('Picture', this.props.match.params.id);

        

        this.setState({
            pictures: pictures,
            loading: false,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.loading && <ContentLoaderTable />}
                {!this.state.loading && <TableList headers={this.state.headers} data={this.state.pictures} />}
            </div>
        )
    }
}
