import React, { Component } from 'react'
import ContentLoaderTable from '../../Components/ContentLoaderTable'
import { realm } from "../../gateway/index";
import TableList from "../../Components/TableList";
import Lightbox from "react-images";

export default class Pictures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            root: 'http://haccp.milady.io/uploads/375a3892440333de-1537483997/',
            loading: true,
            total: 0,
            pictures: [],
            headers: [
                {
                    name: 'Picture',
                    accessor: (item, key) => {
                        return <a onClick={() => this.OnImgClick(item, key)} href="javascript:void(0)">
                            <img height="100" src={this.state.root + item.source} />
                        </a>;
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

        console.log(pictures.list.map((item) => this.state.root + item.source));

        this.setState({
            pictures: pictures.list,
            total: pictures.total,
            loading: false,

            lightboxIsOpen: false,
            currentImage: 0,
        });
    }

    OnImgClick = (item, key) => {
        console.log(key);

        this.setState({
            currentImage: key,
            lightboxIsOpen: true,
        });
    }

    closeLightbox = () => {
        this.setState({
            lightboxIsOpen: false,
        });
    }

    gotoPrevLightboxImage = () => {
        this.setState({
            currentImage: --this.state.currentImage,
        });
    }

    gotoNextLightboxImage = () => {
        this.setState({
            currentImage: ++this.state.currentImage,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.loading && <ContentLoaderTable />}

                {!this.state.loading && <Lightbox
                    images={
                        this.state.pictures.map((item) => {
                            return { src: this.state.root + item.source }
                        })
                    }
                    isOpen={this.state.lightboxIsOpen}
                    currentImage={this.state.currentImage}
                    onClickPrev={this.gotoPrevLightboxImage}
                    onClickNext={this.gotoNextLightboxImage}
                    onClose={this.closeLightbox}
                />}

                {!this.state.loading && <TableList onCLick={this.OnItemClick} title="List of pictures" total={this.state.total} headers={this.state.headers} data={this.state.pictures} />}
            </div>
        )
    }
}
