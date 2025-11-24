import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentTypeNameTitle: {
    id: 'course-authoring.grading-settings.assignment.type-name.title',
    defaultMessage: 'Tên loại bài tập',
  },
  assignmentTypeNameDescription: {
    id: 'course-authoring.grading-settings.assignment.type-name.description',
    defaultMessage: 'Danh mục chung cho loại bài tập này, ví dụ: Bài tập về nhà hoặc Thi giữa kỳ. Tên này hiển thị cho người học.',
  },
  assignmentTypeNameErrorMessage1: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-1',
    defaultMessage: 'Loại bài tập phải có tên.',
  },
  assignmentTypeNameErrorMessage2: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-2',
    defaultMessage: 'Để chấm điểm hoạt động, bạn phải thay đổi tất cả các tiểu mục {initialAssignmentName} thành {value}.',
  },
  assignmentTypeNameErrorMessage3: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-3',
    defaultMessage: "Đã có loại bài tập khác với tên này.",
  },
  abbreviationTitle: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.title',
    defaultMessage: 'Chữ viết tắt',
  },
  abbreviationDescription: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.description',
    defaultMessage: "Tên viết tắt này cho loại bài tập (ví dụ: HW hoặc Midterm) xuất hiện bên cạnh bài tập trên trang Tiến độ của người học.",
  },
  weightOfTotalGradeTitle: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.title',
    defaultMessage: 'Trọng số của tổng điểm',
  },
  weightOfTotalGradeDescription: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.description',
    defaultMessage: 'Trọng số của tất cả bài tập thuộc loại này tính theo phần trăm của tổng điểm, ví dụ: 40. Không bao gồm ký hiệu phần trăm.',
  },
  weightOfTotalGradeErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên từ 0 đến 100.',
  },
  totalNumberTitle: {
    id: 'course-authoring.grading-settings.assignment.total-number.title',
    defaultMessage: 'Tổng số',
  },
  totalNumberDescription: {
    id: 'course-authoring.grading-settings.assignment.total-number.description',
    defaultMessage: 'Số lượng tiểu mục trong khóa học có chứa bài tập thuộc loại bài tập này.',
  },
  totalNumberErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.total-number.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên lớn hơn 0.',
  },
  numberOfDroppableTitle: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.title',
    defaultMessage: 'Số lượng có thể bỏ',
  },
  numberOfDroppableDescription: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.description',
    defaultMessage: 'Số lượng bài tập thuộc loại này sẽ được bỏ. Các bài tập có điểm thấp nhất được bỏ trước.',
  },
  numberOfDroppableErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.error.message',
    defaultMessage: 'Vui lòng nhập số nguyên không âm.',
  },
  numberOfDroppableSecondErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.second.error.message',
    defaultMessage: 'Không thể bỏ nhiều bài tập {type} hơn số lượng được giao.',
  },
  assignmentAlertWarningTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng hiện tại của bài tập {type} trong khóa học:',
  },
  assignmentAlertWarningDescription: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.description',
    defaultMessage: 'Không có bài tập thuộc loại này trong khóa học.',
  },
  assignmentAlertWarningUsageTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.usage.title',
    defaultMessage: 'Cảnh báo: Số lượng bài tập {type} được định nghĩa ở đây không khớp với số lượng hiện tại của bài tập {type} trong khóa học:',
  },
  assignmentAlertWarningSuccess: {
    id: 'course-authoring.grading-settings.assignment.alert.success.title',
    defaultMessage: 'Số lượng bài tập {type} trong khóa học khớp với số lượng được định nghĩa ở đây.',
  },
  assignmentDeleteButton: {
    id: 'course-authoring.grading-settings.assignment.delete.button',
    defaultMessage: 'Xóa',
  },
});

export default messages;
