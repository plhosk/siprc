import React from 'react'
import { Prompt } from 'react-router-dom'
import shortid from 'shortid'
import produce from 'immer'

// const discardConfirmation = () => 'Discard changes?'
const discardConfirmation = () => null

// eslint-disable-next-line react/prefer-stateless-function
class FundingForm extends React.Component {
  state = {
    files: [],
  }

  componentDidMount() {
    window.onbeforeunload = discardConfirmation
  }

  fileAdd = () => {
    this.setState(produce((draft) => {
      draft.files.push({
        name: `file${draft.files.length + 1}`,
        key: shortid.generate(),
      })
    }))
  }

  render() {
    const { files } = this.state

    return (
      <section>
        <Prompt
          // when={!!editing}
          message={discardConfirmation}
        />
        <h1>
          Saturna Island Parks & Recreation Commission
          <br />
          <br />
          Application for Funding
          <br />
          <br />
        </h1>

        <form
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="funding-application"
          action="/form-submitted"
          style={{
            textAlign: 'right', margin: '0 auto', maxWidth: 700,
          }}
        >
          <input type="hidden" name="form-name" value="funding-application" />
          <p style={{ display: 'none' }}>
            <label htmlFor="bot-field">
              Don’t fill this out: &nbsp;
              <input name="bot-field" id="bot-field" />
            </label>
          </p>
          <p>
            <label htmlFor="name-of-society-or-group">
              Name of society or group: &nbsp;
              <input type="text" name="name-of-society-or-group" id="name-of-society-or-group" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="contact-person">
              Contact person: &nbsp;
              <input type="text" name="contact-person" id="contact-person" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="address">
              Address: &nbsp;
              <input type="text" name="address" id="address" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="phone">
              Phone: &nbsp;
              <input type="text" name="phone" id="phone" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email: &nbsp;
              <input type="text" name="email" id="email" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="amount-requested">
              Amount requested: &nbsp;
              <input type="text" name="amount-requested" id="amount-requested" style={{ width: 300 }} />
            </label>
          </p>

          <ul style={{ textAlign: 'left' }}>
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
            </li>
          </ul>

          {files.map(file => (
            <p key={file.key}>
              <label htmlFor={file.name}>
                Attach PDF file: &nbsp;
                <input type="file" name={file.name} id={file.name} accept=".pdf, .PDF" style={{ width: 300 }} />
              </label>
            </p>
          ))}

          <button type="button" onClick={this.fileAdd}>Click to add PDF file...</button>
          <br />
          <br />

          <p style={{ textAlign: 'left' }}>
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="additional-funding-sources">
              List all other funding sources contacted or petitioned and amounts requested:
              <br />
              <textarea name="additional-funding-sources" id="additional-funding-sources" rows="4" style={{ width: '100%' }} />
            </label>
          </p>

          <fieldset style={{ textAlign: 'left' }}>
            <legend>Do participants/beneficiaries for the program/activity contribute to the expenses involved?</legend>
            <label htmlFor="participants1">
              <input type="radio" id="participants1" name="participants-contribute-to-expenses" value="Yes" />
              Yes
            </label>
            <br />
            <label htmlFor="participants2">
              <input type="radio" id="participants2" name="participants-contribute-to-expenses" value="No" />
              No
            </label>
            <p>
              <label htmlFor="participants3">
                Amount: &nbsp;
                <input type="text" name="participants-contribute-to-expenses-amount" id="participants3" style={{ width: 300 }} />
              </label>
            </p>
          </fieldset>
          <br />

          <fieldset style={{ textAlign: 'left' }}>
            <legend>The program/activity is designed for</legend>
            <label htmlFor="designed1">
              <input type="checkbox" id="designed1" name="designed-for" value="seniors" />
              Seniors
            </label>
            <br />
            <label htmlFor="designed2">
              <input type="checkbox" id="designed2" name="designed-for" value="adults" />
              Adults
            </label>
            <br />
            <label htmlFor="designed3">
              <input type="checkbox" id="designed3" name="designed-for" value="children" />
              Children
            </label>
            <p>
              <label htmlFor="number-participants">
                Number of participants expected: &nbsp;
                <input type="text" name="number-participants" id="number-participants" style={{ width: 300 }} />
              </label>
            </p>
          </fieldset>

          <p style={{ textAlign: 'left' }}>
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="comments">
              Additional comments/information:
              <br />
              <textarea name="comments" id="comments" rows="4" style={{ width: '100%' }} />
            </label>
          </p>

          <p>
            <label htmlFor="submitted-by">
              Submitted by: &nbsp;
              <input type="text" name="submitted-by" id="submitted-by" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="date">
              Date: &nbsp;
              <input type="text" name="date" id="date" style={{ width: 300 }} />
            </label>
          </p>

          <p style={{ textAlign: 'left' }}>
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
              <input type="text" name="cheque-payee" id="cheque-payee" style={{ width: 300 }} />
            </label>
          </p>
          <p>
            <label htmlFor="cheque-payee-address">
              Address (if different from above): &nbsp;
              <input type="text" name="cheque-payee-address" id="cheque-payee-address" style={{ width: 300 }} />
            </label>
          </p>

          <br />
          <p style={{ textAlign: 'center' }}>
            <button type="submit">Submit Form</button>
          </p>

        </form>

      </section>
    )
  }
}

export default FundingForm
