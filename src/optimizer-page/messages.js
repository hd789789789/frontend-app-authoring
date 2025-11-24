import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-optimizer.heading.title',
    defaultMessage: 'Tối ưu hóa khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-optimizer.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  description1: {
    id: 'course-authoring.course-optimizer.description1',
    defaultMessage: `Công cụ này sẽ quét phiên bản đã xuất bản của khóa học của bạn để tìm liên kết hỏng.
    Các thay đổi chưa xuất bản sẽ không được bao gồm trong quá trình quét.
    Lưu ý rằng quá trình này sẽ mất nhiều thời gian hơn đối với các khóa học lớn hơn.
    Để cập nhật quá trình quét sau khi bạn đã xuất bản các thay đổi mới vào khóa học của mình,
    nhấp lại vào nút "Bắt đầu quét".
    `,
  },
  description2: {
    id: 'course-authoring.course-optimizer.description2',
    defaultMessage: 'Liên kết hỏng là các liên kết trỏ đến các trang web, hình ảnh hoặc video bên ngoài không tồn tại hoặc không còn khả dụng. Những liên kết này có thể gây ra vấn đề cho người học khi họ cố gắng truy cập nội dung.',
  },
  card1Title: {
    id: 'course-authoring.course-optimizer.card1.title',
    defaultMessage: 'Quét khóa học của tôi để tìm liên kết hỏng',
  },
  card2Title: {
    id: 'course-authoring.course-optimizer.card2.title',
    defaultMessage: 'Quét khóa học của tôi để tìm liên kết hỏng',
  },
  buttonTitle: {
    id: 'course-authoring.course-optimizer.button.title',
    defaultMessage: 'Bắt đầu quét',
  },
  preparingStepTitle: {
    id: 'course-authoring.course-optimizer.peparing-step.title',
    defaultMessage: 'Đang chuẩn bị',
  },
  preparingStepDescription: {
    id: 'course-authoring.course-optimizer.peparing-step.description',
    defaultMessage: 'Đang chuẩn bị để bắt đầu quét',
  },
  scanningStepTitle: {
    id: 'course-authoring.course-optimizer.scanning-step.title',
    defaultMessage: 'Đang quét',
  },
  scanningStepDescription: {
    id: 'course-authoring.course-optimizer.scanning-step.description',
    defaultMessage: 'Đang quét liên kết hỏng trong khóa học của bạn (Bạn có thể rời khỏi trang này một cách an toàn, nhưng tránh thực hiện thay đổi lớn đối với nội dung cho đến khi quá trình quét hoàn tất)',
  },
  successStepTitle: {
    id: 'course-authoring.course-optimizer.success-step.title',
    defaultMessage: 'Thành công',
  },
  successStepDescription: {
    id: 'course-authoring.course-optimizer.success-step.description',
    defaultMessage: 'Quá trình quét của bạn đã hoàn tất. Bạn có thể xem danh sách kết quả bên dưới.',
  },
  lastScannedOn: {
    id: 'course-authoring.course-optimizer.last-scanned-on',
    defaultMessage: 'Quét lần cuối vào',
  },
});

export default messages;
