import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  about: {
    id: 'course-authoring.advanced-settings.sidebar.about.title',
    defaultMessage: 'Cài đặt nâng cao dùng để làm gì?',
  },
  aboutDescription1: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-1',
    defaultMessage: 'Cài đặt nâng cao kiểm soát chức năng cụ thể của khóa học. Trên trang này, bạn có thể chỉnh sửa các chính sách thủ công, đó là các cặp khóa và giá trị dựa trên JSON để kiểm soát các cài đặt khóa học cụ thể.',
  },
  aboutDescription2: {
    id: 'course-authoring.advanced-settings.sidebar.about.description-2',
    defaultMessage: 'Bất kỳ chính sách nào bạn sửa đổi ở đây sẽ ghi đè tất cả thông tin khác mà bạn đã xác định ở nơi khác trong Studio. Không chỉnh sửa các chính sách trừ khi bạn quen thuộc với cả mục đích và cú pháp của chúng.',
  },
  other: {
    id: 'course-authoring.advanced-settings.sidebar.other.title',
    defaultMessage: 'Cài đặt khóa học khác',
  },
  otherCourseSettingsLinkToScheduleAndDetails: {
    id: 'course-authoring.advanced-settings.sidebar.links.schedule-and-details',
    defaultMessage: 'Chi tiết & lịch trình',
    description: 'Link to Studio Details & schedule page',
  },
  otherCourseSettingsLinkToGrading: {
    id: 'course-authoring.advanced-settings.sidebar.links.grading',
    defaultMessage: 'Chấm điểm',
    description: 'Link to Studio Grading page',
  },
  otherCourseSettingsLinkToCourseTeam: {
    id: 'course-authoring.advanced-settings.sidebar.links.course-team',
    defaultMessage: 'Đội ngũ khóa học',
    description: 'Link to Studio Course team page',
  },
  otherCourseSettingsLinkToGroupConfigurations: {
    id: 'course-authoring.advanced-settings.sidebar.links.group-configurations',
    defaultMessage: 'Cấu hình nhóm',
    description: 'Link to Studio Group configurations page',
  },
  otherCourseSettingsLinkToProctoredExamSettings: {
    id: 'course-authoring.advanced-settings.sidebar.links.proctored-exam-settings',
    defaultMessage: 'Cài đặt kỳ thi giám sát',
    description: 'Link to Proctored exam settings page',
  },
});

export default messages;
