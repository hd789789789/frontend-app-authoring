import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  creditTitle: {
    id: 'course-authoring.schedule.credit.title',
    defaultMessage: 'Yêu cầu tín chỉ khóa học',
  },
  creditDescription: {
    id: 'course-authoring.schedule.credit.description',
    defaultMessage: 'Các bước cần thiết để đạt được tín chỉ khóa học',
  },
  creditHelp: {
    id: 'course-authoring.schedule.credit.help',
    defaultMessage:
      'Một yêu cầu xuất hiện trong danh sách này khi bạn xuất bản bài học có chứa yêu cầu đó.',
  },
  creditMinimumGrade: {
    id: 'course-authoring.schedule.credit.minimum-grade',
    defaultMessage: 'Điểm tối thiểu',
  },
  creditProctoredExam: {
    id: 'course-authoring.schedule.credit.proctored-exam',
    defaultMessage: 'Bài kiểm tra có giám sát thành công',
  },
  creditVerification: {
    id: 'course-authoring.schedule.credit.verification',
    defaultMessage: 'Xác minh danh tính',
  },
  creditNotFound: {
    id: 'course-authoring.schedule.credit.not-found',
    defaultMessage: 'Không tìm thấy yêu cầu tín chỉ.',
  },
});

export default messages;
