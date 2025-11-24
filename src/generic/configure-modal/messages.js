import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: 'Cài đặt {title}',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Quyền chỉnh sửa cho: {title}',
    description: 'The visibility modal title for unit',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Cơ bản',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Không tính điểm',
  },
  releaseDateAndTime: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date-and-time',
    defaultMessage: 'Ngày và giờ phát hành',
  },
  releaseDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date',
    defaultMessage: 'Ngày phát hành:',
  },
  releaseTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-time-UTC',
    defaultMessage: 'Giờ phát hành theo UTC:',
  },
  visibilityTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.title',
    defaultMessage: 'Hiển thị',
  },
  visibilitySectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility',
    defaultMessage: 'Hiển thị {visibilityTitle}',
  },
  unitVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-visibility',
    defaultMessage: 'Hiển thị bài học',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Quyền truy cập bài học',
  },
  libraryContentAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.library-content-access',
    defaultMessage: 'Quyền truy cập nội dung thư viện',
  },
  splitTestAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.split-test-access',
    defaultMessage: 'Quyền truy cập Split Test',
  },
  discussionEnabledSectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.section-title',
    defaultMessage: 'Thảo luận',
  },
  discussionEnabledCheckbox: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.checkbox',
    defaultMessage: 'Bật thảo luận',
  },
  discussionEnabledDescription: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.description',
    defaultMessage: 'Chủ đề cho các bài học chưa công bố sẽ không được tạo',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Ẩn khỏi người học',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Hạn chế quyền truy cập cho',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage: 'Nếu bạn hiển thị phần này cho người học, người học sẽ có thể xem nội dung của nó sau khi ngày phát hành đã qua và bạn đã công bố phần này. Chỉ các bài học được ẩn rõ ràng khỏi người học mới vẫn ẩn sau khi bạn bỏ chọn tùy chọn này cho phần.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'Nếu bài học trước đây đã được công bố và phát hành cho người học, bất kỳ thay đổi nào bạn thực hiện đối với bài học khi nó bị ẩn bây giờ sẽ hiển thị cho người học.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'Nếu bạn chọn tùy chọn khác ngoài "Ẩn toàn bộ tiểu mục", các bài học đã công bố trong tiểu mục này sẽ có sẵn cho người học trừ khi chúng được ẩn rõ ràng.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group',
    defaultMessage: 'Chọn một hoặc nhiều nhóm:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-type',
    defaultMessage: 'Chọn loại nhóm',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'Nhóm này không còn tồn tại. Chọn nhóm khác hoặc xóa hạn chế truy cập.',
    description: 'The alert text of no longer available group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'Tất cả Người học và Giảng viên',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.configure-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.course-outline.configure-modal.button.label',
    defaultMessage: 'Lưu',
  },
  grading: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grading',
    defaultMessage: 'Chấm điểm',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grade-as',
    defaultMessage: 'Chấm điểm là:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Hạn nộp:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Giờ hạn nộp theo UTC:',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'Hiển thị tiểu mục',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Hiển thị toàn bộ tiểu mục',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Người học xem tiểu mục đã công bố và có thể truy cập nội dung của nó',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Ẩn nội dung sau hạn nộp',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage: 'Sau khi hạn nộp của tiểu mục đã qua, người học không thể truy cập nội dung của nó nữa. Tiểu mục không được tính trong tính toán điểm.',
  },
  hideContentAfterEnd: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end',
    defaultMessage: 'Ẩn nội dung sau ngày kết thúc',
  },
  hideContentAfterEndDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end-description',
    defaultMessage: 'Sau khi ngày kết thúc của khóa học đã qua, người học không thể truy cập nội dung của nó nữa. Tiểu mục không được tính trong tính toán điểm.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Ẩn toàn bộ tiểu mục',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage: 'Người học không thấy tiểu mục trong đề cương khóa học. Tiểu mục không được tính trong tính toán điểm.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Hiển thị Kết quả Đánh giá',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Luôn hiển thị kết quả đánh giá',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage: 'Khi người học gửi câu trả lời cho một đánh giá, họ ngay lập tức thấy câu trả lời đúng hay sai và điểm số nhận được.',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Không bao giờ hiển thị kết quả đánh giá',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage: 'Người học không bao giờ thấy câu trả lời của họ cho đánh giá đúng hay sai, cũng như điểm số nhận được.',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Hiển thị kết quả đánh giá khi tiểu mục đã quá hạn',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage: 'Người học không thấy câu trả lời của họ cho đánh giá đúng hay sai, cũng như điểm số nhận được, cho đến sau khi hạn nộp của tiểu mục đã qua. Nếu tiểu mục không có hạn nộp, người học luôn thấy điểm số của họ khi gửi câu trả lời cho đánh giá.',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Đặt làm bài kiểm tra đặc biệt',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'Không có',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'Có giới hạn thời gian',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage: 'Sử dụng bài kiểm tra có giới hạn thời gian để giới hạn thời gian người học có thể dành cho các câu hỏi trong tiểu mục này. Người học phải gửi câu trả lời trước khi hết thời gian. Bạn có thể cho phép thêm thời gian cho từng người học thông qua Bảng điều khiển giảng viên.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Có giám sát',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage: 'Bài kiểm tra có giám sát được giới hạn thời gian và ghi lại video của mỗi người học làm bài kiểm tra. Sau đó các video được xem xét để đảm bảo rằng người học tuân thủ tất cả các quy tắc kiểm tra. Xin lưu ý rằng việc đặt bài kiểm tra này là có giám sát sẽ thay đổi cài đặt hiển thị thành "Ẩn nội dung sau hạn nộp."',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Giới thiệu',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage: 'Sử dụng Giới thiệu để giới thiệu người học về giám sát, xác minh danh tính của họ và tạo hồ sơ giới thiệu. Người học phải hoàn thành bước hồ sơ giới thiệu trước khi làm bài kiểm tra có giám sát. Đánh giá hồ sơ mất hơn 2 ngày làm việc.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Bài kiểm tra có giám sát thử',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage: 'Sử dụng bài kiểm tra có giám sát thử để giới thiệu người học về các công cụ và quy trình giám sát. Kết quả của bài kiểm tra thử không ảnh hưởng đến điểm của người học.',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Nâng cao',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Thời gian cho phép (HH:MM):',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage: 'Chọn thời gian cho phép cho bài kiểm tra. Nếu trên 24 giờ, nhập số thời gian. Bạn có thể cấp thêm thời gian cho từng người học để hoàn thành bài kiểm tra thông qua Bảng điều khiển giảng viên.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Sử dụng làm Điều kiện tiên quyết',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Đặt tiểu mục này có sẵn làm điều kiện tiên quyết cho nội dung khác',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Giới hạn quyền truy cập',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage: 'Chọn tiểu mục điều kiện tiên quyết và nhập phần trăm điểm tối thiểu và phần trăm hoàn thành tối thiểu để giới hạn quyền truy cập vào tiểu mục này. Giá trị cho phép là 0-100',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'Không có điều kiện tiên quyết',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Điều kiện tiên quyết:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Điểm tối thiểu:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Hoàn thành tối thiểu:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Phần trăm điểm tối thiểu phải là số nguyên từ 0 đến 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Phần trăm hoàn thành tối thiểu phải là số nguyên từ 0 đến 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage: 'Tiểu mục này đã được phát hành cho người học như một bài kiểm tra có giám sát, nhưng đã được hoán đổi trở lại thành bài kiểm tra cơ bản hoặc có giới hạn thời gian. Bạn không thể định cấu hình nó làm bài kiểm tra có giám sát bây giờ. Liên hệ Hỗ trợ edX để được trợ giúp.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage: 'Bài kiểm tra có giám sát này đã được phát hành cho người học. Bạn không thể chuyển đổi nó sang loại bài kiểm tra đặc biệt khác. Bạn có thể hoán đổi tiểu mục này trở lại thành bài kiểm tra cơ bản bằng cách chọn Không có, hoặc bài kiểm tra có giới hạn thời gian, nhưng bạn SẼ KHÔNG thể định cấu hình nó làm bài kiểm tra có giám sát trong tương lai.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Quy tắc xem xét',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Chỉ định bất kỳ quy tắc hoặc ngoại lệ quy tắc nào mà nhóm xem xét giám sát nên thực thi khi xem xét video. Ví dụ: bạn có thể chỉ định rằng máy tính được phép. Các quy tắc được chỉ định này hiển thị cho người học trước khi người học bắt đầu bài kiểm tra.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Chỉ định bất kỳ quy tắc hoặc ngoại lệ quy tắc nào mà nhóm xem xét giám sát nên thực thi khi xem xét video. Ví dụ: bạn có thể chỉ định rằng máy tính được phép. Các quy tắc được chỉ định này hiển thị cho người học trước khi người học bắt đầu bài kiểm tra, cùng với {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'quy tắc bài kiểm tra có giám sát chung',
  },
});

export default messages;
