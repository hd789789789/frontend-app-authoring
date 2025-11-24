import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Label for cancel button in the save warning modal',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'Ok',
    description: 'Label for save button in the save warning modal',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Bạn có chắc chắn muốn thoát khỏi trình chỉnh sửa không?',
    description: 'Question in body of save warning modal',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'Không có câu trả lời được chỉ định',
    description: 'Title for no answer modal',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'Chưa chỉ định câu trả lời đúng.',
    description: 'Explanation in body of no answer modal',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'Không nhất quán trong cài đặt OLX',
    description: 'Title for mismatched settings modal',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `Phát hiện sự không nhất quán giữa các cài đặt được xác định trong thẻ bài tập của OLX và các cài đặt được chọn trong thanh bên. Các cài đặt được xác định trong thẻ bài tập của OLX sẽ được lưu và các giá trị tương ứng trong thanh bên sẽ bị loại bỏ.`,
    description: 'Explanation in body of mismatched settings modal',
  },
});

export default messages;
