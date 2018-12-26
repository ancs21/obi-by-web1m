import React, { Component } from 'react'
import firebase from '../utils/fb'
import NavLinkHead from '../components/NavLinkHead'

class Dataset extends Component {
  state = {
    lenFiles: null,
    count: null
  }

  handleFile = async e => {
    let filesList = []
    const files = Array.from(e.target.files)
    this.setState({
      lenFiles: files.length,
      count: 0
    })
    await files.map(async file => {
      const storageRef = firebase.storage().ref()
      await storageRef
        .child(`ancs/catod/${file.name}`)
        .put(file)
        .then(result => {
          const { contentType, size, name, updated } = result.metadata
          filesList.push({
            name: name,
            type: contentType,
            size: size,
            date: updated
          })
          this.setState({
            count: this.state.count + 1
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
  render() {
    return (
      <>
        <NavLinkHead id={this.props.id} />
        <div className="container mt-6 mb-6">
          {this.state.lenFiles > 0 && (
            <div
              className="alert alert-info"
              style={{ textAlign: 'center' }}
              role="alert"
            >
              Do not close the tab. Uploading {this.state.count}/
              {this.state.lenFiles}
            </div>
          )}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Dataset</h2>
              <div className="page-subtitle">1 - 20 of 8888</div>
              <div className="page-options d-flex">
                <div className="input-icon mr-4">
                  <span className="input-icon-addon">
                    <i className="fe fe-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control w-10"
                    placeholder="Search file"
                  />
                </div>
                <span className="btn btn-default btn-file btn-dark">
                  <input onChange={this.handleFile} type="file" multiple />
                  <i className="fe fe-upload mr-2" />
                  Upload file
                </span>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.jpg</td>
                    <td>300 kb</td>
                    <td>image/jpeg</td>
                    <td>May 6, 2018</td>
                    <td className="w-1">
                      <i className="fe fe-trash" />
                    </td>
                  </tr>
                  <tr>
                    <td>1.jpg</td>
                    <td>300 kb</td>
                    <td>image/jpeg</td>
                    <td>May 6, 2018</td>
                    <td className="w-1">
                      <i className="fe fe-trash" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Dataset
