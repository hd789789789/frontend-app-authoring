import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: 'Khóa học này được tạo dưới dạng chạy lại. Cần một số cấu hình thủ công.',
    description: 'Configuration error alert title in course outline.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: 'Hiện không có nội dung khóa học nào hiển thị và không có người học nào đăng ký. Hãy đảm bảo xem xét và đặt lại tất cả các ngày, bao gồm Ngày bắt đầu khóa học; thiết lập đội ngũ khóa học; xem xét các cập nhật khóa học và các tài sản khác có ngày tháng; và khởi tạo các thảo luận và wiki.',
    description: 'Configuration error alert body in course outline.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: 'Kỳ mở khóa học này đang sử dụng phiên bản nâng cấp của diễn đàn thảo luận {platformName}. Để hiển thị thanh bên thảo luận, các xBlock thảo luận sẽ không còn hiển thị với người học.',
    description: 'Alert text for informing users about upgraded version of discussions forum.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Learn more link in upgraded discussion notification alert',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: 'Chia sẻ phản hồi',
    description: 'Share feedback link in upgraded discussion notification alert',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: 'Khóa học này sử dụng các tính năng không còn được hỗ trợ.',
    description: 'Alert title informing users about deprecated features being used in course that are not supported.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: 'Bạn phải xóa hoặc thay thế các thành phần sau.',
    description: 'Alert body text informing users about deprecated components which needs to be removed or replaced.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: 'Để tránh lỗi, {platformName} khuyến nghị mạnh mẽ rằng bạn nên xóa các tính năng không được hỗ trợ khỏi cài đặt nâng cao của khóa học. Để thực hiện điều này, hãy vào {hyperlink}, tìm cài đặt "Danh sách Mô-đun Nâng cao", sau đó xóa các mô-đun sau khỏi danh sách.',
    description: 'Alert body text informing users about how to remove deprecated components/modules.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: 'Trang Cài đặt Nâng cao',
    description: 'Advanced settings page link text',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: 'Thành phần đã lỗi thời',
    description: 'Default name for a deprecated component.',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: 'Khóa học này có cài đặt kỳ thi giám sát chưa đầy đủ hoặc không hợp lệ.',
    description: 'Proctoring settings errors alert title.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: 'Để cập nhật các cài đặt này, hãy vào {hyperlink}.',
    description: 'Proctoring settings errors alert body text.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: 'Trang Cài đặt Kỳ thi Giám sát',
    description: 'Proctoring settings page link text.',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: 'Không thể {actionName} {type}. Vui lòng thử lại.',
    description: 'Generic alert text.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: '{newFilesLen, plural, one {file} other {files}} mới đã được thêm vào Tệp.',
    description: 'This title is displayed when new files are successfully imported into the course after pasting an unit.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: '{newFilesLen, plural, one {file was} other {files were}} bắt buộc sau đã được nhập vào khóa học này: {newFilesStr}',
    description: 'This description is displayed when new files are successfully imported into the course after pasting an unit',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: 'Xem tệp',
    description: 'This label is used as the text for a button that allows the user to view the imported files.',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: 'Đã xảy ra một số lỗi',
    description: 'This title is displayed when there are errors during the import of files while pasting an unit.',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: '{errorFilesLen, plural, one {file} other {files}} bắt buộc sau không thể được thêm vào khóa học: {errorFilesStr}',
    description: 'This description is displayed when there are errors during the import of files and lists the files that could not be imported.',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: 'Bạn có thể cần cập nhật {conflictingFilesLen, plural, one {file} other {files}} thủ công',
    description: 'This alert title is displayed when files being imported conflict with existing files in the course.',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: '{conflictingFilesLen, plural, one {a file} other {files}} sau đã tồn tại trong khóa học này nhưng không khớp với phiên bản được sử dụng bởi thành phần bạn đã dán: {conflictingFilesStr}',
    description: 'This alert description is displayed when files being imported conflict with existing files in the course and advises the user to update the conflicting files manually.',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Máy chủ Studio gặp lỗi',
    description: 'Generic server error alert title.',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: 'Đã xảy ra lỗi trong Studio và trang không thể được tải. Vui lòng thử lại sau vài phút. Chúng tôi đã ghi nhận lỗi và nhân viên của chúng tôi hiện đang làm việc để giải quyết lỗi này sớm nhất có thể.',
    description: 'Generic server error alert title.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: 'Lỗi mạng',
    description: 'Generic network error alert.',
  },
  forbiddenAlert: {
    id: 'course-authoring.course-outline.page-alert.forbidden.title',
    defaultMessage: 'Quyền truy cập bị hạn chế',
    description: 'Forbidden(403) alert title',
  },
  forbiddenAlertBody: {
    id: 'course-authoring.course-outline.page-alert.forbidden.body',
    defaultMessage: 'Có vẻ như bạn đang cố gắng truy cập một trang mà bạn không có quyền xem. Liên hệ với quản trị viên của bạn nếu bạn nghĩ đây là một sai lầm, hoặc quay lại {LMS}.',
    description: 'Forbidden(403) alert body',
  },
  forbiddenAlertLmsUrl: {
    id: 'course-authoring.course-outline.page-alert.lms',
    defaultMessage: 'LMS',
    description: 'LMS base redirection url',
  },
});

export default messages;
