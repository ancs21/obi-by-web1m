import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Formik } from 'formik'
import './newproject.css'
import stateContext from '../state/context'
import uuidv4 from 'uuid/v4'
import firebase from '../utils/fb'
import { navigate } from '@reach/router'

export default class NewProject extends React.Component {
  static contextType = stateContext

  state = { modal: false }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    const { user } = this.context.state
    const id = uuidv4()
    return (
      <>
        <button
          onClick={this.toggle}
          type="button"
          className="btn btn-outline-primary"
        >
          <i className="fe fe-plus mr-2" />
          New Project
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add new project</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                name: '',
                description: '',
                createdAt: +new Date(),
                id: id
              }}
              onSubmit={(values, { setSubmitting }) => {
                firebase
                  .firestore()
                  .collection('users')
                  .doc(user.uid)
                  .collection('projects')
                  .doc(id)
                  .set(values)
                  .then(() => {
                    navigate(`projects/${id}/welcome`)
                  })
                  .catch(err => console.log(err))
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      Project name<span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Description<span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className="form-control"
                    />
                  </div>
                  <Button
                    type="submit"
                    color="primary"
                    disabled={isSubmitting}
                    className="btn-block"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </ModalBody>
        </Modal>
      </>
    )
  }
}
