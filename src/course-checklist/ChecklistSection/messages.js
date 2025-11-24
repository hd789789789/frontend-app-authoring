import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Thêm thông điệp chào mừng',
    description: 'Label for a section that describes a welcome message for a course',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Chào mừng cá nhân người học vào khóa học của bạn và chuẩn bị cho người học có trải nghiệm khóa học tích cực.',
    description: 'Description for a section that prompts a user to enter a welcome message for a course',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Tạo chính sách chấm điểm khóa học của bạn',
    description: 'Label for a section that describes a grading policy for a course',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Thiết lập chính sách chấm điểm của bạn, bao gồm các loại bài tập và điểm đạt. Tất cả các bài tập cộng lại tổng cộng 100%.',
    description: 'Description for a section that prompts a user to enter a grading policy for a course',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Chính sách chấm điểm hiện tại của bạn cộng lại là {percent}%.',
    description: 'Description for a section that displays a course\'s grading policy total',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Kích hoạt chứng chỉ của bạn',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Đảm bảo rằng tất cả văn bản đều chính xác, các chữ ký đã được tải lên và chứng chỉ đã được kích hoạt.',
    description: 'Description for a section that prompts a user to create a course completion certificate',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Đặt các ngày quan trọng của khóa học',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Thiết lập lịch trình khóa học của bạn, bao gồm thời điểm khóa học bắt đầu và kết thúc.',
    description: 'Description for a section that prompts a user to set up a course schedule',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Xác thực thời hạn bài tập',
    description: 'Label for a section that describes course assignment deadlines',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Đảm bảo tất cả thời hạn bài tập nằm trong khoảng thời gian giữa ngày bắt đầu và kết thúc khóa học.',
    description: 'Description for a section that prompts a user to enter course assignment deadlines',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'Các bài tập sau có thời hạn không nằm trong khoảng thời gian giữa ngày bắt đầu và kết thúc khóa học:',
    description: 'Description for a section that displays which assignments are outside of a course\'s start and end date',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Kiểm tra thời lượng video',
    description: 'Label for a section that describes video durations',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Người học tương tác tốt nhất với các video ngắn kèm theo các cơ hội để thực hành. Đảm bảo rằng 80% hoặc hơn các video khóa học có độ dài dưới 10 phút.',
    description: 'Description for a section that prompts a user to follow best practices for video length',
  },
  mobileFriendlyVideoShortDescription: {
    id: 'mobileFriendlyVideoShortDescription',
    defaultMessage: 'Tạo video thân thiện với thiết bị di động',
    description: 'Label for a section that describes mobile friendly videos',
  },
  mobileFriendlyVideoLongDescription: {
    id: 'mobileFriendlyVideoLongDescription',
    defaultMessage: 'Video thân thiện với thiết bị di động có thể được xem trên tất cả các thiết bị được hỗ trợ. Đảm bảo rằng ít nhất 90% video khóa học thân thiện với thiết bị di động bằng cách tải video khóa học lên hệ thống video edX.',
    description: 'Description for a section that prompts a user to follow best practices for mobile friendly videos',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Xây dựng chuỗi học tập đa dạng',
    description: 'Label for a section that describes diverse sequences of educational content',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Nghiên cứu cho thấy trải nghiệm nội dung đa dạng thúc đẩy sự tương tác của người học. Chúng tôi khuyến nghị rằng 80% hoặc hơn các chuỗi học tập hoặc phần phụ của bạn bao gồm nhiều loại nội dung (như video, thảo luận hoặc bài tập).',
    description: 'Description for a section that prompts a user to follow best practices diverse sequences of educational content',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Đặt điểm nổi bật hàng tuần',
    description: 'Label for a section that describes weekly highlights',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Bật và chỉ định các điểm nổi bật hàng tuần để giữ cho người học tương tác và đi đúng hướng trong khóa học của bạn.',
    description: 'Description for a section that prompts a user to follow best practices for course weekly highlights',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Quản lý độ sâu đơn vị',
    description: 'Label for a section that describes course unit depth',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Chia nhỏ nội dung khóa học thành các phần dễ quản lý thúc đẩy sự tương tác của người học. Chúng tôi khuyến nghị các đơn vị chứa không quá ba thành phần.',
    description: 'Description for a section that prompts a user to follow best practices for course unit depth',
  },
  proctoringEmailShortDescription: {
    id: 'proctoringEmailShortDescription',
    defaultMessage: 'Thêm email xử lý vấn đề proctortrack',
    description: 'Label for a section that describes proctoring escalation email',
  },
  proctoringEmailLongDescription: {
    id: 'proctoringEmailLongDescription',
    defaultMessage: 'Các khóa học sử dụng Proctortrack yêu cầu email xử lý vấn đề. Đảm bảo người học và Bộ phận Hỗ trợ có thể liên hệ với đội ngũ khóa học của bạn về các vấn đề giám sát (ví dụ: khiếu nại, đặt lại bài thi, v.v.).',
    description: 'Description for a section that prompts the user to add a Proctortrack escalation email for the course',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Cập nhật',
    description: 'Label for a link that takes the user to a page where they can update settings',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} đã hoàn thành',
    description: 'Label that describes how many tasks have been completed out of a total number of tasks',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'đã hoàn thành',
    description: 'Label that describes a completed task',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'chưa hoàn thành',
    description: 'Label that describes an uncompleted task',
  },
});

export default messages;
