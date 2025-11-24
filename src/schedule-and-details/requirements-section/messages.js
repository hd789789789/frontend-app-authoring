import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  requirementsTitle: {
    id: 'course-authoring.schedule-section.requirements.title',
    defaultMessage: 'Yêu cầu',
  },
  requirementsDescription: {
    id: 'course-authoring.schedule-section.requirements.description',
    defaultMessage: 'Kỳ vọng của học viên tham gia khóa học này',
  },
  timepickerLabel: {
    id: 'course-authoring.schedule-section.requirements.timepicker.label',
    defaultMessage: 'Số giờ nỗ lực mỗi tuần',
  },
  timepickerHelpText: {
    id: 'course-authoring.schedule-section.requirements.timepicker.help-text',
    defaultMessage: 'Thời gian dành cho tất cả công việc khóa học',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.requirements.dropdown.label',
    defaultMessage: 'Khóa học điều kiện tiên quyết',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.help-text',
    defaultMessage: 'Khóa học mà học viên phải hoàn thành trước khi bắt đầu khóa học này',
  },
  dropdownEmptyText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.empty-text',
    defaultMessage: 'Không có',
  },
});

export default messages;
