import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createUnitModalTitle: {
    id: 'course-authoring.library-authoring.modals.create-unit.title',
    defaultMessage: 'Bài học mới',
    description: 'Title of the Create Unit modal',
  },
  createUnitModalCancel: {
    id: 'course-authoring.library-authoring.modals.create-unit.cancel',
    defaultMessage: 'Hủy',
    description: 'Label of the Cancel button of the Create Unit modal',
  },
  createUnitModalCreate: {
    id: 'course-authoring.library-authoring.modals.create-unit.create',
    defaultMessage: 'Tạo',
    description: 'Label of the Create button of the Create Unit modal',
  },
  createUnitModalNameLabel: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name',
    defaultMessage: 'Đặt tên cho bài học của bạn',
    description: 'Label of the Name field of the Create Unit modal form',
  },
  createUnitModalNamePlaceholder: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name.placeholder',
    defaultMessage: 'Đưa ra tiêu đề mô tả',
    description: 'Placeholder of the Name field of the Create Unit modal form',
  },
  createUnitModalNameInvalid: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name.invalid',
    defaultMessage: 'Yêu cầu nhập tên bài học',
    description: 'Message when the Name field of the Create Unit modal form is invalid',
  },
  createUnitSuccess: {
    id: 'course-authoring.library-authoring.modals.create-unit.success',
    defaultMessage: 'Bài học đã được tạo thành công',
    description: 'Success message when creating a library unit',
  },
  createUnitError: {
    id: 'course-authoring.library-authoring.modals.create-unit.error',
    defaultMessage: 'Có lỗi khi tạo bài học thư viện',
    description: 'Error message when creating a library unit',
  },
});

export default messages;
