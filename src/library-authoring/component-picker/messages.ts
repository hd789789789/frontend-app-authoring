import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  selectLibraryInfo: {
    id: 'course-authoring.library-authoring.pick-components.select-library.info',
    defaultMessage: 'Chọn thư viện mà bạn muốn tham chiếu các thành phần từ đó.',
    description: 'The info text for the select library component',
  },
  selectLibrarySearchPlaceholder: {
    id: 'course-authoring.library-authoring.pick-components.select-library.search-placeholder',
    defaultMessage: 'Tìm kiếm thư viện',
    description: 'The placeholder text for the search field in the select library component',
  },
  selectLibraryPaginationLabel: {
    id: 'course-authoring.library-authoring.pick-components.select-library.pagination-label',
    defaultMessage: 'Phân trang thư viện',
    description: 'The pagination label for the select library component',
  },
  selectLibraryNoSearchResultsTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.results.title',
    defaultMessage: 'Chúng tôi không thể tìm thấy kết quả nào',
    description: 'The title for the no search results state in the select library component',
  },
  selectLibraryNoSearchResultsMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.message',
    defaultMessage: 'Không có thư viện nào với các bộ lọc hiện tại.',
    description: 'The message for the no search results state in the select library component',
  },
  selectLibraryNoLibrariesTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.title',
    defaultMessage: 'Không tìm thấy thư viện',
    description: 'The title for the no libraries state in the select library component',
  },
  selectLibraryNoLibrariesMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.message',
    defaultMessage: 'Bạn chưa tạo bất kỳ thư viện nào hoặc bạn không có quyền truy cập vào bất kỳ thư viện nào. Để '
      + 'create a new library, go to Studio Home or contact your system administrator.',
    description: 'The message for the no libraries state in the select library component',
  },
  selectLibraryNextButton: {
    id: 'course-authoring.library-authoring.pick-components.select-library.next-button',
    defaultMessage: 'Tiếp theo',
    description: 'The text for the next button in the select library component',
  },
  pickerInfoBanner: {
    id: 'course-authoring.library-authoring.pick-components.component-picker.information-alert',
    defaultMessage: 'Chỉ nội dung đã xuất bản mới hiển thị và có sẵn để tái sử dụng.',
    description: 'The alert text on top of component-picker if only published content is visible.',
  },
});

export default messages;
