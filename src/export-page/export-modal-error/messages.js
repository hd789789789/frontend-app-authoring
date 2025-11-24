import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'Đã xảy ra lỗi trong quá trình xuất.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'Không thể xuất khóa học của bạn sang XML. Không có đủ thông tin để xác định thành phần bị lỗi. Hãy kiểm tra khóa học của bạn để xác định bất kỳ thành phần có vấn đề nào và thử lại. Thông báo lỗi thô là: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'Đã có lỗi khi xuất sang XML ít nhất một thành phần. Chúng tôi khuyến nghị bạn vào trang chỉnh sửa và sửa lỗi trước khi thử xuất lần nữa. Vui lòng kiểm tra rằng tất cả các thành phần trên trang đều hợp lệ và không hiển thị bất kỳ thông báo lỗi nào. Thông báo lỗi thô là: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Quay lại xuất',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Hủy',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Đưa tôi đến trang khóa học chính',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Sửa thành phần bị lỗi',
  },
});

export default messages;
