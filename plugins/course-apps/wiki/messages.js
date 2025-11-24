import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.wiki.heading',
    defaultMessage: 'Cấu hình wiki',
  },
  enableWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.label',
    defaultMessage: 'Wiki',
  },
  enableWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.help',
    defaultMessage: `Wiki khóa học có thể được thiết lập dựa trên nhu cầu của khóa học của bạn. Các cách sử dụng phổ biến có thể bao gồm chia sẻ câu trả lời cho các câu hỏi thường gặp của khóa học, chia sẻ thông tin khóa học có thể chỉnh sửa hoặc cung cấp quyền truy cập vào các tài nguyên do người học tạo.`,
  },
  enableWikiLink: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.link',
    defaultMessage: 'Tìm hiểu thêm về wiki',
  },
  enablePublicWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.label',
    defaultMessage: 'Bật quyền truy cập wiki công khai',
  },
  enablePublicWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.help',
    defaultMessage: `If enabled, any registered user can view the course wiki
    even if they are not enrolled in the course`,
  },
});

export default messages;
