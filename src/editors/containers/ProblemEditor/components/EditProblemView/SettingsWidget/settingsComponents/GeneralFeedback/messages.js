import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  generalFeebackSettingTitle: {
    id: 'authoring.problemeditor.settings.generalFeebackSettingTitle',
    defaultMessage: 'Phản hồi chung',
    description: 'label for general feedback setting',
  },
  generalFeedbackInputLabel: {
    id: 'authoring.problemeditor.settings.generalFeedbackInputLabel',
    defaultMessage: 'Nhập phản hồi chung',
    description: 'label for general feedback input describing rules',
  },
  generalFeedbackDescription: {
    id: 'authoring.problemeditor.settings.generalFeedbackInputDescription',
    defaultMessage: 'Nhập phản hồi để xuất hiện khi sinh viên nộp câu trả lời sai. Điều này sẽ bị ghi đè nếu bạn thêm phản hồi cụ thể cho câu trả lời.',
    description: 'description for general feedback input, clariying useage',
  },
  noGeneralFeedbackSummary: {
    id: 'authoring.problemeditor.settings.generalFeedback.noFeedbackSummary',
    defaultMessage: 'Không có',
    description: 'message which informs use there is no general feedback set.',
  },
});
export default messages;
