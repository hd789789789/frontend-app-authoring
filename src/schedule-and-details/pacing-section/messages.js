import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Tốc độ khóa học',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Đặt tốc độ cho khóa học này',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Tốc độ khóa học không thể thay đổi khi khóa học đã bắt đầu',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Theo tiến độ giảng viên',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Khóa học theo tiến độ giảng viên tiến triển theo tốc độ mà tác giả khóa học đặt ra. Bạn có thể cấu hình ngày phát hành cho nội dung khóa học và ngày hạn nộp cho bài tập.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Tự định tốc độ',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage: 'Khóa học tự định tốc độ cung cấp các ngày hạn nộp đề xuất cho bài tập hoặc bài kiểm tra dựa trên ngày đăng ký của người học và thời lượng khóa học dự kiến. Các khóa học này cung cấp cho người học sự linh hoạt để sửa đổi ngày hạn nộp bài tập khi cần thiết.',
  },
});

export default messages;
