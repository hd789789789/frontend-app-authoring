import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  toleranceSettingTitle: {
    id: 'problemEditor.settings.tolerance.title',
    defaultMessage: 'Dung sai',
    description: 'Title for tolerance setting menu',
  },
  noneToleranceSummary: {
    id: 'problemEditor.settings.tolerance.summary.none',
    defaultMessage: 'Không có',
    description: 'message provided when no tolerance is set for a problem',
  },
  toleranceSettingText: {
    id: 'problemEditor.settings.tolerance.description.text',
    defaultMessage: 'Biên độ sai số trên mỗi bên của câu trả lời.',
    description: 'Description of the features of setting a tolerance for a problem',
  },
  toleranceValueInputLabel: {
    id: 'problemEditor.settings.tolerance.valueinput',
    defaultMessage: 'Dung sai',
    description: 'floating label for input to set the value of the tolerance',
  },
  toleranceAnswerRangeWarning: {
    id: 'problemEditor.settings.tolerance.answerrangewarning',
    defaultMessage: 'Dung sai không thể được áp dụng cho phạm vi câu trả lời',
    description: 'a warning to users that tolerance cannot be aplied to an answer range.',
  },
  typesPercentage: {
    id: 'problemEditor.settings.tolerance.type.percent',
    defaultMessage: 'Phần trăm',
    description: 'A possible value type for a tolerance',

  },
  typesNumber: {
    id: 'problemEditor.settings.tolerance.type.number',
    defaultMessage: 'Số',
    description: 'A possible value type for a tolerance',

  },
  typesNone: {
    id: 'problemEditor.settings.tolerance.type.none',
    defaultMessage: 'Không có',
    description: 'A possible value type for a tolerance',
  },

});

export default messages;
