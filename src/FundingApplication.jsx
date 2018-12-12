/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react'
import { Prompt } from 'react-router-dom'
import {
  Form, Text, TextArea, Scope, RadioGroup, Radio, Checkbox,
} from 'informed'

// eslint-disable-next-line react/prefer-stateless-function
class FundingApplication extends React.Component {
  state = {
    preventClose: false,
  }

  componentDidMount() {
    this.setOnBeforeUnload()
  }

  componentDidUpdate() {
    this.setOnBeforeUnload()
  }

  setOnBeforeUnload = () => {
    const { preventClose } = this.state
    if (preventClose) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = undefined
    }
  }

  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    const { preventClose } = this.state
    return (
      <div>
        <Prompt
          when={preventClose}
          message="Are you sure you want to leave?"
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
            id="funding-application-form"
            className="App-funding-application"
            onSubmit={this.handleSubmit}
          >
            <p>
              <label htmlFor="name-of-society-or-group">
                Name of society or group: &nbsp;
                <Text
                  field="name-of-society-or-group"
                  id="name-of-society-or-group"
                  className="App-form-input"
                />
              </label>
            </p>
            <p>
              <label htmlFor="contact-person">
                Contact person: &nbsp;
                <Text
                  field="contact-person"
                  id="contact-person"
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
              <label htmlFor="amount-requested">
                Amount requested: &nbsp;
                <Text
                  field="amount-requested"
                  id="amount-requested"
                  className="App-form-input"
                />
              </label>
            </p>

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
                Please send the files in a separate email to&nbsp;
                <a href="mailto:parksrec@saturnanet.net" target="_blank" rel="noopener noreferrer">
                  parksrec@saturnanet.net
                </a>
                &nbsp;(PDF format preferred). Also please make note of the files in the comments field below.
              </li>
            </ul>

            <p className="App-form-description">
              <label htmlFor="additional-funding-sources">
                List all other funding sources contacted or petitioned and amounts requested:
                <br />
                <TextArea
                  id="additional-funding-sources"
                  field="additional-funding-sources"
                  rows="4"
                  className="App-form-textarea"
                />
              </label>
            </p>

            <fieldset className="App-form-fieldset">
              <legend>
                Do participants/beneficiaries for the program/activity contribute to the expenses involved?
              </legend>
              <RadioGroup field="participants-contribute-to-expenses">
                <label htmlFor="participants-yes">
                  <Radio id="participants-yes" value="yes" />
                  Participants/beneficiaries contribute to expenses
                </label>
                <br />
                <label htmlFor="participants-no">
                  <Radio id="participants-no" value="no" />
                  Participants/beneficiaries do not contribute to expenses
                </label>
              </RadioGroup>
              <p>
                <label htmlFor="participants-contribution-amount">
                  Contribution amount: &nbsp;
                  <Text
                    field="participants-contribution-amount"
                    id="participants-contribution-amount"
                    className="App-form-input"
                  />
                </label>
              </p>
            </fieldset>
            <br />

            <fieldset className="App-form-fieldset">
              <Scope scope="designed-for-age-group">
                <label htmlFor="designed-for-seniors">
                  <Checkbox field="seniors" id="designed-for-seniors" />
                  The program/activity is designed for Seniors
                </label>
                <br />
                <label htmlFor="designed-for-adults">
                  <Checkbox field="adults" id="designed-for-adults" />
                  The program/activity is designed for Adults
                </label>
                <br />
                <label htmlFor="designed-for-children">
                  <Checkbox field="children" id="designed-for-children" />
                  The program/activity is designed for Children
                </label>
              </Scope>
              <p>
                <label htmlFor="number-participants">
                  Number of participants expected: &nbsp;
                  <Text field="number-participants" id="number-participants" className="App-form-input" />
                </label>
              </p>
            </fieldset>

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
              <label htmlFor="submitted-by">
                Submitted by: &nbsp;
                <Text field="submitted-by" id="submitted-by" className="App-form-input" />
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
              provided by way of reimbursement based on submitted receipts
            </p>

            <p>
              <label htmlFor="cheque-payee">
                Cheque Payee: &nbsp;
                <Text field="cheque-payee" id="cheque-payee" className="App-form-input" />
              </label>
            </p>
            <p>
              <label htmlFor="cheque-payee-address">
                Cheque Payee Address (if different from above): &nbsp;
                <Text field="cheque-payee-address" id="cheque-payee-address" className="App-form-input" />
              </label>
            </p>

            <br />
            <p className="App-form-buttons">
              <button
                type="submit"
              >
                Submit Form
              </button>
            </p>

            <br />
            <br />
            <br />
          </Form>

        </section>


      </div>
    )
  }
}

export default FundingApplication
