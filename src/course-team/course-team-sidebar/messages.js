import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitle: {
    id: 'course-authoring.course-team.sidebar.title',
    defaultMessage: 'Vai trò đội ngũ khóa học',
  },
  sidebarAbout_1: {
    id: 'course-authoring.course-team.sidebar.about-1',
    defaultMessage: 'Các thành viên đội ngũ khóa học có vai trò Nhân viên là đồng tác giả khóa học. Họ có đầy đủ quyền viết và chỉnh sửa đối với tất cả nội dung khóa học.',
  },
  sidebarAbout_2: {
    id: 'course-authoring.course-team.sidebar.about-2',
    defaultMessage: 'Quản trị viên là thành viên đội ngũ khóa học có thể thêm và xóa các thành viên đội ngũ khóa học khác.',
  },
  sidebarAbout_3: {
    id: 'course-authoring.course-team.sidebar.about-3',
    defaultMessage: 'Tất cả các thành viên đội ngũ khóa học có thể truy cập nội dung trong Studio, LMS và Insights, nhưng không được tự động đăng ký vào khóa học.',
  },
  ownershipTitle: {
    id: 'course-authoring.course-team.sidebar.ownership.title',
    defaultMessage: 'Chuyển quyền sở hữu',
  },
  ownershipDescription: {
    id: 'course-authoring.course-team.sidebar.ownership.description',
    defaultMessage: 'Mỗi khóa học phải có một Quản trị viên. Nếu bạn là Quản trị viên và bạn muốn chuyển quyền sở hữu khóa học, hãy nhấp {strong} để đặt một người dùng khác làm Quản trị viên, sau đó yêu cầu người dùng đó xóa bạn khỏi danh sách Đội ngũ khóa học.',
  },
  addAdminAccess: {
    id: 'course-authoring.course-team.sidebar.ownership.addAdminAccess',
    defaultMessage: 'Thêm quyền quản trị',
  },
});

export default messages;
