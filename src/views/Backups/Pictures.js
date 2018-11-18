import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'

export default class Pictures extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                {/* <h1>Pictures {this.props.match.params.id}</h1> */}
                <ContentLoaderTable />
            </div>
        )
    }
}
