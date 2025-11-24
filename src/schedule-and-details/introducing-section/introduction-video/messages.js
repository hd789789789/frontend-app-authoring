import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseIntroductionVideoLabel: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.label',
    defaultMessage: 'Video giới thiệu khóa học',
  },
  courseIntroductionVideoDelete: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.delete',
    defaultMessage: 'Xóa video hiện tại',
  },
  courseIntroductionVideoHelpText: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.help-text',
    defaultMessage: 'Nhập ID video YouTube của bạn (cùng với bất kỳ tham số hạn chế nào)',
  },
  courseIntroductionVideoPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.placeholder',
    defaultMessage: 'ID video YouTube',
  },
});

export default messages;
