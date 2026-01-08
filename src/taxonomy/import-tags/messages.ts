import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  importWizardButtonCancel: {
    id: 'course-authoring.import-tags.wizard.button.cancel',
    defaultMessage: 'Hủy',
  },
  importWizardButtonNext: {
    id: 'course-authoring.import-tags.wizard.button.next',
    defaultMessage: 'Tiếp theo',
  },
  importWizardButtonPrevious: {
    id: 'course-authoring.import-tags.wizard.button.previous',
    defaultMessage: 'Trước',
  },
  importWizardButtonImport: {
    id: 'course-authoring.import-tags.wizard.button.import',
    defaultMessage: 'Nhập',
  },
  importWizardButtonContinue: {
    id: 'course-authoring.import-tags.wizard.button.continue',
    defaultMessage: 'Tiếp tục',
  },
  importWizardButtonConfirm: {
    id: 'course-authoring.import-tags.wizard.button.confirm',
    defaultMessage: 'Có, nhập tệp',
  },
  importWizardStepExportTitle: {
    id: 'course-authoring.import-tags.wizard.step-export.title',
    defaultMessage: 'Cập nhật "{name}"',
  },
  importWizardStepExportBody: {
    id: 'course-authoring.import-tags.wizard.step-export.body',
    defaultMessage: 'Để cập nhật phân loại này, bạn cần nhập tệp CSV hoặc JSON mới. Phân loại hiện tại sẽ được thay thế hoàn toàn bởi nội dung của tệp đã nhập (ví dụ: nếu một thẻ trong phân loại hiện tại không có trong tệp đã nhập, nó sẽ bị xóa - cả khỏi phân loại và khỏi bất kỳ nội dung khóa học được gắn thẻ nào). {br}Bạn có thể muốn xuất phân loại ở trạng thái hiện tại trước khi nhập tệp mới.',
  },
  importWizardStepExportCSVButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-csv',
    defaultMessage: 'Tệp CSV',
  },
  importWizardStepExportJSONButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-json',
    defaultMessage: 'Tệp JSON',
  },
  importWizardStepUploadTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.title',
    defaultMessage: 'Tải tệp lên',
  },
  importWizardStepUploadClearFile: {
    id: 'course-authoring.import-tags.wizard.step-upload.clear-file',
    defaultMessage: 'Xóa tệp',
  },
  importWizardStepUploadBody: {
    id: 'course-authoring.import-tags.wizard.step-upload.body',
    defaultMessage: 'Bạn có thể tải lên tệp CSV hoặc JSON để tạo phân loại mới. Bạn có thể sử dụng bất kỳ công cụ bảng tính nào (cho tệp CSV), hoặc bất kỳ trình soạn thảo văn bản nào (cho tệp JSON) để tạo tệp mà bạn muốn nhập. Để xem ví dụ về định dạng yêu cầu, tải xuống {csvTemplateUrl} hoặc {jsonTemplateUrl}. {br}Sau khi tệp sẵn sàng để nhập, kéo và thả nó vào ô bên dưới hoặc nhấp để tải lên.',
  },
  importWizardStepReuploadBody: {
    id: 'course-authoring.import-tags.wizard.step-reupload.body',
    defaultMessage: 'Bạn có thể sử dụng bất kỳ công cụ bảng tính nào (cho tệp CSV), hoặc bất kỳ trình soạn thảo văn bản nào (cho tệp JSON) để tạo '
    + 'tệp mà bạn muốn nhập.'
    + '{br}Sau khi tệp sẵn sàng để nhập, kéo và thả nó vào ô bên dưới hoặc nhấp để tải lên.',
  },
  csvTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.csv-template',
    defaultMessage: 'Mẫu CSV',
  },
  jsonTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.json-template',
    defaultMessage: 'Mẫu JSON',
  },
  importWizardStepPopulateTitle: {
    id: 'course-authoring.import-tags.wizard.step-populate.title',
    defaultMessage: 'Điền thông tin phân loại',
  },
  importWizardStepPopulateTaxonomyName: {
    id: 'course-authoring.import-tags.wizard.step-populate.name',
    defaultMessage: 'Tên phân loại',
  },
  importWizardStepPopulateTaxonomyDesc: {
    id: 'course-authoring.import-tags.wizard.step-populate.desc',
    defaultMessage: 'Mô tả phân loại',
  },
  importWizardStepPlanTitle: {
    id: 'course-authoring.import-tags.wizard.step-plan.title',
    defaultMessage: 'Sự khác biệt giữa các tệp',
  },
  importWizardStepPlanBody: {
    id: 'course-authoring.import-tags.wizard.step-plan.body',
    defaultMessage: 'Việc nhập tệp này sẽ thực hiện {changeCount} cập nhật cho phân loại hiện có. '
    + 'Nội dung của tệp đã nhập sẽ thay thế bất kỳ giá trị hiện có nào không khớp với các giá trị mới.'
    + '{br}Việc nhập tệp này sẽ gây ra các cập nhật sau:',
  },
  importWizardStepPlanNoChanges: {
    id: 'course-authoring.import-tags.wizard.step-plan.no-changes',
    defaultMessage: 'Không có thay đổi',
  },
  importWizardStepConfirmTitle: {
    id: 'course-authoring.import-tags.wizard.step-confirm.title',
    defaultMessage: 'Nhập và thay thế thẻ',
  },
  importWizardStepConfirmBody: {
    id: 'course-authoring.import-tags.wizard.step-confirm.body',
    defaultMessage: 'Cảnh báo! Bạn sắp thực hiện {changeCount} thay đổi đối với phân loại hiện có. Bất kỳ thẻ nào được áp dụng '
    + 'vào nội dung khóa học sẽ được cập nhật hoặc xóa. Điều này không thể hoàn tác.'
    + '{br}Bạn có chắc chắn muốn tiếp tục nhập tệp này?',
  },
  promptTaxonomyName: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name',
    defaultMessage: 'Nhập tên cho phân loại mới',
  },
  promptTaxonomyNameRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name.required',
    defaultMessage: 'Bạn phải nhập tên cho phân loại mới',
  },
  promptTaxonomyExportId: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id',
    defaultMessage: "Nhập Export ID cho phân loại mới. Chỉ được chứa các ký tự chữ số hoặc '_' '-' '.'",
  },
  promptTaxonomyExportIdRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.required',
    defaultMessage: 'Bạn phải nhập Export ID cho phân loại mới.',
  },
  promptTaxonomyExportIdInvalid: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.invalid',
    defaultMessage: "Export ID không hợp lệ. Chỉ được chứa các ký tự chữ số hoặc '_' '-' '.'",
  },
  promptTaxonomyDescription: {
    id: 'course-authoring.import-tags.prompt.taxonomy-description',
    defaultMessage: 'Nhập mô tả cho phân loại mới',
  },
  importTaxonomySuccess: {
    id: 'course-authoring.import-tags.success',
    defaultMessage: 'Phân loại đã được nhập thành công',
  },
  importTaxonomyError: {
    id: 'course-authoring.import-tags.error',
    defaultMessage: 'Nhập thất bại - xem chi tiết trong console trình duyệt',
  },
  importNewTaxonomyToast: {
    id: 'course-authoring.import-tags.new.toast.success',
    defaultMessage: '"{name}" đã nhập',
  },
  importTaxonomyToast: {
    id: 'course-authoring.import-tags.toast.success',
    defaultMessage: '"{name}" đã cập nhật',
  },
  importTaxonomyErrorAlert: {
    id: 'course-authoring.import-tags.error-alert.title',
    defaultMessage: 'Lỗi nhập',
  },
});

export default messages;
