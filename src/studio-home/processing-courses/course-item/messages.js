import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  itemInProgressFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress',
    defaultMessage: 'Khóa học mới sẽ được thêm vào danh sách khóa học của bạn trong 5-10 phút. Quay lại trang này hoặc {refresh} để cập nhật danh sách khóa học. Khóa học mới sẽ cần một số cấu hình thủ công.',
  },
  itemInProgressFooterHyperlink: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress.hyperlink',
    defaultMessage: 'làm mới nó',
  },
  itemInProgressActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.in-progress',
    defaultMessage: 'Đang cấu hình như đợt chạy lại',
  },
  itemIsFailedActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.failed',
    defaultMessage: 'Lỗi cấu hình',
  },
  itemFailedFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed',
    defaultMessage: 'Đã xảy ra lỗi hệ thống khi khóa học của bạn đang được xử lý. Vui lòng chuyển đến khóa học gốc để thử chạy lại một lần nữa, hoặc liên hệ với PM của bạn để được hỗ trợ.',
  },
  itemFailedFooterButton: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed.button',
    defaultMessage: 'Đóng',
  },
});

export default messages;
