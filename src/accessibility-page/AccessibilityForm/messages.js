import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessibilityPolicyFormEmailLabel: {
    id: 'accessibilityPolicyFormEmailLabel',
    defaultMessage: 'Địa chỉ Email',
    description: 'Label for the email form field',
  },
  accessibilityPolicyFormErrorHighVolume: {
    id: 'accessibilityPolicyFormErrorHighVolume',
    defaultMessage: 'Chúng tôi hiện đang có lượng truy cập cao. Hãy thử lại sau hôm nay hoặc gửi email đến {emailLink}.',
    description: 'Error message when site is experiencing high volume that will include an email link',
  },
  accessibilityPolicyFormErrorMissingFields: {
    id: 'accessibilityPolicyFormErrorMissingFields',
    defaultMessage: 'Đảm bảo điền đầy đủ tất cả các trường.',
    description: 'Error message to instruct user to fill in all fields',
  },
  accessibilityPolicyFormHeader: {
    id: 'accessibilityPolicyFormHeader',
    defaultMessage: 'Phản hồi Khả năng Tiếp cận Studio',
    description: 'The heading for the form',
  },
  accessibilityPolicyFormMessageLabel: {
    id: 'accessibilityPolicyFormMessageLabel',
    defaultMessage: 'Tin nhắn',
    description: 'Label for the message form field',
  },
  accessibilityPolicyFormNameLabel: {
    id: 'accessibilityPolicyFormNameLabel',
    defaultMessage: 'Tên',
    description: 'Label for the name form field',
  },
  accessibilityPolicyFormSubmitAria: {
    id: 'accessibilityPolicyFormSubmitAria',
    defaultMessage: 'Gửi Biểu mẫu Phản hồi Khả năng Tiếp cận',
    description: 'Detailed aria-label for the submit button',
  },
  accessibilityPolicyFormSubmitLabel: {
    id: 'accessibilityPolicyFormSubmitLabel',
    defaultMessage: 'Gửi',
    description: 'General label for the submit button',
  },
  accessibilityPolicyFormSubmittingFeedbackLabel: {
    id: 'accessibilityPolicyFormSubmittingFeedbackLabel',
    defaultMessage: 'Đang gửi',
    description: 'Loading message while form feedback is being submitted',
  },
  accessibilityPolicyFormSuccess: {
    id: 'accessibilityPolicyFormSuccess',
    defaultMessage: 'Cảm ơn bạn đã liên hệ với PiStudy!',
    description: 'Simple thank you message when form submission is successful',
  },
  accessibilityPolicyFormSuccessDetails: {
    id: 'accessibilityPolicyFormSuccessDetails',
    defaultMessage: 'Cảm ơn bạn đã phản hồi về khả năng tiếp cận của Studio. Chúng tôi thường phản hồi trong vòng một ngày làm việc ({day_start} đến {day_end}, {time_start} đến {time_end}).',
    description: 'Detailed thank you message when form submission is successful',
  },
  accessibilityPolicyFormValidEmail: {
    id: 'accessibilityPolicyFormValidEmail',
    defaultMessage: 'Nhập địa chỉ email hợp lệ.',
    description: 'Error message for when an invalid email is entered into the form',
  },
  accessibilityPolicyFormValidMessage: {
    id: 'accessibilityPolicyFormValidMessage',
    defaultMessage: 'Nhập tin nhắn.',
    description: 'Error message an invalid message is entered into the form',
  },
  accessibilityPolicyFormValidName: {
    id: 'accessibilityPolicyFormValidName',
    defaultMessage: 'Nhập tên.',
    description: 'Error message an invalid name is entered into the form',
  },
});

export default messages;
