import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Loại bài tập nâng cao',
    description: 'Button label for advance problem types option',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Bài tập nâng cao',
    description: 'Title for advanced problem menu',
  },
  advanceMenuGoBack: {
    id: 'authoring.problemEditor.advanceProblem.menu.goBack',
    defaultMessage: 'Quay lại',
    description: 'Return to the previous menu that shows basic problem types',
  },
  advanceProblemTypeLabel: {
    id: 'authoring.problemEditor.advanceProblem.problemType.label',
    defaultMessage: '{problemType}',
    description: 'Label for advance problem type radio select',
  },
  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: 'Text for advance problem type\'s support status',
  },
  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: `{supportStatus,  select,
      Provisional {Các công cụ được hỗ trợ tạm thời có thể thiếu tính mạnh mẽ của chức năng
        mà các khóa học của bạn yêu cầu. edX không kiểm soát chất lượng phần mềm,
        hoặc nội dung có thể được cung cấp bằng các công cụ này.
        \n \n
        Hãy kiểm tra kỹ lưỡng các công cụ này trước khi sử dụng chúng trong khóa học của bạn, đặc biệt là trong các
        phần được chấm điểm. Tài liệu đầy đủ có thể không có sẵn cho các công cụ được hỗ trợ tạm thời
        hoặc tài liệu có thể có sẵn từ các nguồn khác ngoài edX.}
      Not_supported {Các công cụ không được hỗ trợ không được duy trì bởi edX, và có thể bị loại bỏ
        trong tương lai. Chúng không được khuyến nghị sử dụng trong các khóa học do không tuân thủ một
        hoặc nhiều yêu cầu cơ bản, chẳng hạn như kiểm tra, khả năng tiếp cận, quốc tế hóa,
        và tài liệu.}
      other { } 
    }`,
    description: 'Message for support status tooltip',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: 'Bài tập {previewTitle}',
    description: 'Title for the problem preview column',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `Hình minh họa xem trước của một {problemType, select,
      multiplechoiceresponse {single select}
      stringreponse {text input}
      numericalresponse {numerical input}
      optionresponse {dropdown}
      choiceresponse {multiple select}
      other {null}
    } problem`,
    description: 'Alt text for the illustration of the problem preview',
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Description of the selected problem type',
  },
  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Label for Learn more button',
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm về các loại bài tập nâng cao',
    description: 'Label for Learn more about advanced problem types button',
  },
});

export default messages;
