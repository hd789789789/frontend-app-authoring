import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: 'Cấu hình tiến độ',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: 'Tiến độ',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `Khi sinh viên hoàn thành các bài tập được chấm điểm, điểm số sẽ xuất hiện trong thẻ tiến độ. Thẻ tiến độ chứa biểu đồ của tất cả các bài tập được chấm điểm trong khóa học, cùng với danh sách tất cả các bài tập và điểm số bên dưới.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: 'Tìm hiểu thêm về tiến độ',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: 'Bật biểu đồ tiến độ',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: 'Nếu được bật, sinh viên có thể xem biểu đồ tiến độ',
  },
});

export default messages;
