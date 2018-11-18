import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'


export default class Controles extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                {/* <h1>Controles {this.props.match.params.id}</h1> */}
                <ContentLoaderTable />
            </div>
        )
    }
}
