/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react'
import { Prompt } from 'react-router-dom'
import {
  Form, Text, TextArea, Scope, RadioGroup, Radio, Checkbox,
} from 'informed'
import Modal from 'react-responsive-modal'
import Loader from 'react-loader-spinner'

// import generatePdf from './fundingApplicationPdf'

// eslint-disable-next-line react/prefer-stateless-function
class FundingApplication extends React.Component {
  state = {
    preventClose: true,
    showSubmitModal: false,
    loading: false,
  }

  componentDidMount() {
    const { preventClose } = this.state
    this.setOnBeforeUnload(preventClose)
  }

  componentDidUpdate() {
    const { preventClose } = this.state
    this.setOnBeforeUnload(preventClose)
  }

  componentWillUnmount() {
    this.setOnBeforeUnload(false)
  }

  setOnBeforeUnload = (preventClose) => {
    if (preventClose) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = undefined
    }
  }

  handleShowSubmitModal = () => {
    this.setState({
      showSubmitModal: true,
    })
  }

  handleHideSubmitModal = () => {
    this.setState({
      showSubmitModal: false,
    })
  }

  setLoadingIndicator = (loading) => {
    this.setState({ loading })
  }

  handleSubmit = async (values) => {
    // console.log(values)
    this.setLoadingIndicator(true)
    const generatePdf = await import('./fundingApplicationPdf')
    generatePdf.default(values)
    this.handleShowSubmitModal()
    this.setLoadingIndicator(false)
  }

  render() {
    const { preventClose, showSubmitModal, loading } = this.state
    return (
      <div>
        <Prompt
          when={preventClose}
          message="Are you sure you want to leave this page?"
        />

        <section>
          <h1 className="App-form-header">
            Saturna Island Parks & Recreation Commission
            <br />
            <br />
            Application for Funding
            <br />
            <br />
          </h1>

          <Form
            id="fundingApplicationForm"
            className="App-funding-application"
            onSubmit={this.handleSubmit}
          >
            <p>
              <label htmlFor="nameOfSocietyOrGroup">
                Name of society or group: &nbsp;
                <Text
                  field="nameOfSocietyOrGroup"
                  id="nameOfSocietyOrGroup"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="contactPerson">
                Contact person: &nbsp;
                <Text
                  field="contactPerson"
                  id="contactPerson"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="address">
                Address: &nbsp;
                <Text
                  field="address"
                  id="address"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="phone">
                Phone: &nbsp;
                <Text
                  field="phone"
                  id="phone"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                Email: &nbsp;
                <Text
                  field="email"
                  id="email"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="amountRequested">
                Amount requested: &nbsp;
                <Text
                  field="amountRequested"
                  id="amountRequested"
                  className="App-form-input"
                />
              </label>
            </p>

            <p className="App-form-description">
              <label htmlFor="additionalFundingSources">
                List all other funding sources contacted or petitioned and amounts requested:
                <br />
                <TextArea
                  id="additionalFundingSources"
                  field="additionalFundingSources"
                  rows="4"
                  className="App-form-textarea"
                />
              </label>
            </p>

            <fieldset className="App-form-fieldset">
              <legend>
                Do participants/beneficiaries for the program/activity contribute to the expenses involved?
              </legend>
              <RadioGroup field="participantsContributeToExpenses">
                <label htmlFor="participantsYes">
                  <Radio id="participantsYes" value="Yes" />
                  Participants/beneficiaries contribute to expenses
                </label>
                <br />
                <label htmlFor="participantsNo">
                  <Radio id="participantsNo" value="No" />
                  Participants/beneficiaries do not contribute to expenses
                </label>
              </RadioGroup>
              <p>
                <label htmlFor="participantsContributionAmount">
                  Contribution amount: &nbsp;
                  <Text
                    field="participantsContributionAmount"
                    id="participantsContributionAmount"
                    className="App-form-input"
                  />
                </label>
              </p>
            </fieldset>
            <br />

            <fieldset className="App-form-fieldset">
              <Scope scope="designedForAgeGroup">
                <label htmlFor="designedForSeniors">
                  <Checkbox field="seniors" id="designedForSeniors" />
                  The program/activity is designed for Seniors
                </label>
                <br />
                <label htmlFor="designedForAdults">
                  <Checkbox field="adults" id="designedForAdults" />
                  The program/activity is designed for Adults
                </label>
                <br />
                <label htmlFor="designedForChildren">
                  <Checkbox field="children" id="designedForChildren" />
                  The program/activity is designed for Children
                </label>
              </Scope>
              <p>
                <label htmlFor="numberOfParticipants">
                  Number of participants expected: &nbsp;
                  <Text field="numberOfParticipants" id="numberOfParticipants" className="App-form-input" />
                </label>
              </p>
            </fieldset>

            <ul className="App-form-description">
              <li>
                Please attach a clear and precise printed description of the nature and scope of the
                proposed recreational or parks related activity requiring financial support.
                <br />
                <br />
              </li>
              <li>
                If the application is for a one-time activity or project, please attach the complete budget
                for the proposed activity. If the project is part of ongoing work by a Society or Group, in
                addition, please attach a full annual budget for the Society or Group.
                <br />
                <br />
              </li>
              <li>
                Send the files, along with the PDF generated by this form, to&nbsp;
                <a href="mailto:parksrec@saturnanet.net" target="_blank" rel="noopener noreferrer">
                  parksrec@saturnanet.net
                </a>
                . Also please make note of the files in the Additional comments/information field below.
              </li>
            </ul>

            <p className="App-form-description">
              <label htmlFor="comments">
                Additional comments/information:
                <br />
                <TextArea
                  id="comments"
                  field="comments"
                  rows="4"
                  className="App-form-textarea"
                />
              </label>
            </p>

            <p>
              <label htmlFor="submittedBy">
                Submitted by: &nbsp;
                <Text field="submittedBy" id="submittedBy" className="App-form-input" />
              </label>
            </p>
            <p>
              <label htmlFor="date">
                Date: &nbsp;
                <Text field="date" id="date" className="App-form-input" />
              </label>
            </p>

            <p className="App-form-description">
              Your application for funding will be considered by the Commission at the next regular
              meeting. While not necessary, you are welcome to attend. If more information is needed
              to make a decision, you will be contacted and advised. A decision by the Commission to
              grant the request may be for the full amount or a lesser sum, and may contain conditions
              as deemed appropriate in SIPRC’s sole discretion. Note: In most cases, funding is
              provided by way of reimbursement based on submitted receipts.
            </p>

            <p>
              <label htmlFor="chequePayee">
                Cheque Payee: &nbsp;
                <Text field="chequePayee" id="chequePayee" className="App-form-input" />
              </label>
            </p>
            <p>
              <label htmlFor="chequePayeeAddress">
                Cheque Payee Address (if different from above): &nbsp;
                <Text field="chequePayeeAddress" id="chequePayeeAddress" className="App-form-input" />
              </label>
            </p>

            <br />
            <div className="App-form-buttons">
              {loading
                && (
                  <Loader
                    type="Audio"
                    color="#6EA86A"
                    height="50"
                    width="50"
                  />
                )
              }
              <button
                type="submit"
              >
                Create PDF File
              </button>
            </div>

            <br />
            <br />
            <br />
          </Form>

        </section>

        <Modal
          open={showSubmitModal}
          contentLabel="Your PDF has been generated. It will now download to your computer."
          onClose={this.handleHideSubmitModal}
        >
          <h2>Thank You</h2>
          <p>
            A PDF file containing your form responses has been generated.
            It will now download to your computer or device.
            To complete your application, please send the PDF file, along with any supporting documents, to: &nbsp;
            <a href="mailto:parksrec@saturnanet.net" target="_blank" rel="noopener noreferrer">
          parksrec@saturnanet.net
            </a>
          </p>
        </Modal>
      </div>
    )
  }
}

export default FundingApplication
