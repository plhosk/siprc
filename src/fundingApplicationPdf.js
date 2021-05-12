import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import getFormattedDate from './formattedDate'

pdfMake.vfs = pdfFonts.pdfMake.vfs

const generatePdf = async (values) => {
  const docDefinition = {
    pageSize: 'LETTER',
    pageOrientation: 'portrait',
    defaultStyle: {
      fontSize: 11,
    },
    content: [
      {
        layout: 'noBorders',
        table: {
          headerRows: 0,
          widths: [100, 'auto', 100],
          body: [
            [
              [
                '',
                // {
                //   image: saturnaGreen,
                //   fit: [80, 80],
                //   alignment: 'center',
                // },
              ],

              {
                text: 'Saturna Island Parks & Recreation Commission\n\nApplication for Funding\n\n',
                fontSize: 14,
                bold: true,
                alignment: 'center',
              },

              ' ',
            ],
          ],
        },
      },

      {
        layout: 'noBorders',
        // layout: 'lightHorizontalLines',
        table: {
          headerRows: 0,
          body: [
            [
              'Name of Society or Group:',
              {
                text: values.nameOfSocietyOrGroup || '',
                bold: true,
              },
            ],
            [
              'Contact Person:',
              {
                text: values.contactPerson || '',
                bold: true,
              },
            ],
            [
              'Address:',
              {
                text: values.address || '',
                bold: true,
              },
            ],
            [
              'Phone:',
              {
                text: values.phone || '',
                bold: true,
              },
            ],
            [
              'Email:',
              {
                text: values.email || '',
                bold: true,
              },
            ],
            [
              'Amount Requested:',
              {
                text: values.amountRequested || '',
                bold: true,
              },
            ],
          ],
        },
      },

      '\nList all other funding sources contacted or petitioned and amounts requested:',
      {
        text: values.additionalFundingSources || '',
        bold: true,
      },

      '\nDo participants/beneficiaries for the program/activity contribute to the expenses involved?',
      {
        text: values.participantsContributeToExpenses || '',
        bold: true,
      },

      'Contribution amount:',
      {
        text: values.participantsContributionAmount || '',
        bold: true,
      },

      {
        text: [
          '\nThe program/activity is designed for:  ',
          'Seniors:  ',
          {
            text: values.designedForAgeGroup && values.designedForAgeGroup.seniors ? 'Yes  ' : 'No  ',
            bold: true,
          },
          'Adults:  ',
          {
            text: values.designedForAgeGroup && values.designedForAgeGroup.adults ? 'Yes  ' : 'No  ',
            bold: true,
          },
          'Children:  ',
          {
            text: values.designedForAgeGroup && values.designedForAgeGroup.children ? 'Yes  ' : 'No  ',
            bold: true,
          },
        ],
      },
      'Number of participants expected:',
      {
        text: values.numberOfParticipants || '',
        bold: true,
      },

      {
        text: [
          '\nPlease attach a clear and precise printed description of the nature and scope of the proposed recreational or parks related activity requiring financial support. If the application is for a one-time activity or project, please attach the complete budget for the proposed activity. If the project is part of ongoing work by a Society or Group, in addition, please attach a full annual budget for the Society or Group. Send the files, along with the PDF generated by this form, to ',
          {
            text: 'SaturnaParksandRec@gmail.com',
            link: 'mailto:SaturnaParksandRec@gmail.com',
            bold: true,
            color: 'blue',
          },
          '. Also please make note of the files in the Additional comments/information field below.',
        ],
      },

      '\nAdditional comments/information:',
      {
        text: values.comments || '',
        bold: true,
      },
      '\n',
      {
        layout: 'noBorders',
        // layout: 'lightHorizontalLines',
        table: {
          headerRows: 0,
          body: [
            [
              'Submitted by:',
              {
                text: values.submittedBy || '',
                bold: true,
              },
            ],
            [
              'Date:',
              {
                text: values.date || '',
                bold: true,
              },
            ],
          ],
        },
      },

      '\nYour application for funding will be considered by the Commission at the next regular meeting. While not necessary, you are welcome to attend. If more information is needed to make a decision, you will be contacted and advised. A decision by the Commission to grant the request may be for the full amount or a lesser sum, and may contain conditions as deemed appropriate in SIPRC’s sole discretion. Note: In most cases, funding is provided by way of reimbursement based on submitted receipts.\n\n',

      {
        layout: 'noBorders',
        // layout: 'lightHorizontalLines',
        table: {
          headerRows: 0,
          body: [
            [
              'Cheque Payee:',
              {
                text: values.chequePayee || '',
                bold: true,
              },
            ],
            [
              'Cheque Payee Address (if different from above):',
              {
                text: values.chequePayeeAddress || '',
                bold: true,
              },
            ],
          ],
        },
      },

      {
        text: [
          '\nReturn completed form to Parks & Rec box next to free mail at General Store, or email to ',
          {
            text: 'SaturnaParksandRec@gmail.com',
            link: 'mailto:SaturnaParksandRec@gmail.com',
            bold: true,
            color: 'blue',
          },
          ', or mail to: SIPRC PO Box 58, Saturna Island, BC V0N 2Y0',
        ],
      },
    ],
  }

  const filename = `siprc-funding-application-${getFormattedDate()}.pdf`

  const pdf = await pdfMake.createPdf(docDefinition)
  await pdf.download(filename)
}

export default generatePdf
