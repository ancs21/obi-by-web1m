import React, { Component } from 'react'

class Dataset extends Component {
  render() {
    return (
      <div className="container mt-6 mb-6">
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
              <button type="button" className="btn btn-dark">
                <i className="fe fe-upload mr-2" />
                Upload file
              </button>
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
                  <td colSpan="2">
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
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
    )
  }
}

export default Dataset
