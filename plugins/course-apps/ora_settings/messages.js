import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.ora.heading',
    defaultMessage: 'Cấu hình Chấm điểm Đồng đẳng Linh hoạt',
    description: 'Title for the modal dialog header',
  },
  ORASettingsHelpLink: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.link',
    defaultMessage: 'Tìm hiểu thêm về cài đặt đánh giá câu trả lời mở',
    description: 'Descriptive text for the hyperlink to the docs site',
  },
  enableFlexPeerGradeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.label',
    defaultMessage: 'Chấm điểm Đồng đẳng Linh hoạt',
    description: 'Label for form switch',
  },
  enableFlexPeerGradeHelp: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.help',
    defaultMessage: 'Bật Chấm điểm Đồng đẳng Linh hoạt cho tất cả các đánh giá câu trả lời mở trong khóa học có chấm điểm đồng đẳng.',
    description: 'Help text describing what happens when the switch is enabled',
  },
  enabledBadgeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.enabled-badge.label',
    defaultMessage: 'Đã bật',
    description: 'Label for badge that show users that a setting is enabled',
  },
  cancelLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.cancel-button.label',
    defaultMessage: 'Hủy',
    description: 'Label for button that cancels user changes',
  },
  saveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-button.label',
    defaultMessage: 'Lưu',
    description: 'Label for button that saves user changes',
  },
  pendingSaveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.pending-save-button.label',
    defaultMessage: 'Đang lưu',
    description: 'Label for button that has pending api save calls',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.title',
    defaultMessage: 'Chúng tôi không thể áp dụng các thay đổi của bạn.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.message',
    defaultMessage: 'Vui lòng kiểm tra các mục nhập và thử lại.',
  },
});

export default messages;
