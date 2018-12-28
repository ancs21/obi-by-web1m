import React, { Component } from 'react'
import NavLinkHead from '../components/NavLinkHead'
import { navigate } from '@reach/router'
import firebase from '../utils/fb'
import { collectionData } from 'rxfire/firestore'
import { tap } from 'rxjs/operators'
import stateContext from '../state/context'
import uuidv4 from 'uuid/v4'
import _ from 'lodash'

class Dataset extends Component {
  static contextType = stateContext
  state = {
    lenFiles: null,
    count: null,
    listFiles: []
  }

  componentDidMount() {
    const projectId = this.props.id
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const datasetRef = firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('projects')
          .doc(projectId)
          .collection('dataset')
          .orderBy('date', 'desc')
          .limit(5)

        collectionData(datasetRef, 'id')
          .pipe(tap(files => console.log('Connect db success!')))
          .subscribe(files => {
            let newFiles = _.uniqBy(files, 'name')
            this.setState({
              listFiles: newFiles
            })
          })
      } else {
        // No user is signed in.
        navigate('/')
      }
    })
  }

  handleFile = async e => {
    const { user } = this.context.state
    const projectId = this.props.id
    const uuid = uuidv4()
    let filesList = []
    const files = Array.from(e.target.files)
    this.setState({
      lenFiles: files.length,
      count: 0
    })
    await files.map(async file => {
      const storageRef = firebase.storage().ref()
      await storageRef
        .child(`${this.props.id}/dataset/${file.name}`)
        .put(file)
        .then(result => {
          const { contentType, size, name, updated } = result.metadata
          firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .collection('projects')
            .doc(projectId)
            .collection('dataset')
            .doc(uuid)
            .set({
              id: uuid,
              name: name,
              type: contentType,
              size: size,
              date: updated
            })
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
    const { user } = this.context.state
    return (
      <>
        {user && (
          <>
            {' '}
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
                      <input
                        onChange={this.handleFile}
                        type="file"
                        accept="image/jpeg,image/png,text/xml"
                        multiple
                      />
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
                      {this.state.listFiles.length > 0 ? (
                        this.state.listFiles.map(file => (
                          <tr key={file.id}>
                            <td>{file.name}</td>
                            <td>{file.size} kb</td>
                            <td>{file.type}</td>
                            <td>{file.date}</td>
                            <td className="w-1">
                              <i className="fe fe-trash" />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr style={{ textAlign: 'center' }}>
                          <td>No data</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}

export default Dataset
