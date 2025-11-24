import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: 'Cung cấp thông tin xác định cho bản chạy lại của khóa học này. Khóa học gốc không bị ảnh hưởng theo bất kỳ cách nào bởi bản chạy lại. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: 'Lưu ý: Kết hợp tổ chức, mã số khóa học và kỳ mở khóa học phải xác định duy nhất phiên bản khóa học mới này.',
  },
});

export default messages;
