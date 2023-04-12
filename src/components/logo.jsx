import React from 'react';
import PropTypes from 'prop-types';

const SavorLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 172 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fff"
      d="M108.78 8.316c2.4-.382 3.62-.29 5.214-1.685 1.178-1.028 1.217-1.602 1.342-2.643l.026-.22c.02-3.25-2.96-4.297-5.323-3.526-3.956 1.292-6.212 4.75-8.308 8.656-1.324 2.468-2.556 4.984-3.728 7.528l-1.277 2.77-3.78 7.54c-.233.47-.512.922-.856 1.317-2.06 2.358-4.985 2.046-6.344-.96l-6.1-13.498c-.465-1.164.383-2.327 1.507-2.46.123-.014.214-.123.214-.247v-.01c0-.137-.112-.25-.25-.25H64.402c-.138 0-.25.11-.25.25s.107.245.243.252c1.638.087 3.234 1.065 3.933 2.713l15.398 33.905c.062.135.196.222.344.222.147 0 .283-.088.344-.224l5.31-11.896 7.987-16.056c4.675-9.168 6.863-10.807 11.064-11.476l.003.002zM167.326 12.33c-.97-.317-2.038-.483-2.98-.46-3.13.077-5.77.613-9.465 4.46-.888.927-2.382.533-2.382-.756v-4.138c0-.56-.605-.906-1.083-.623l-10.296 6.075-3.03 1.877c-.104.064-.142.197-.088.305l.045.09c.055.11.187.166.296.114 1.215-.57 2.776.177 2.776 1.595v23.62c0 1.43-1.13 2.854-2.742 2.976-.125.01-.225.108-.225.234v.04c0 .128.106.234.234.234h16.843c.13 0 .233-.106.233-.235v-.04c0-.127-.098-.225-.222-.236-1.404-.138-2.742-1.555-2.742-2.973V25.298c0-4.037 2.568-8.305 6.425-8.616 1.558-.123 2.47.057 2.96 1.286.354.887.248 1.437.805 2.523.652 1.27 1.574 1.982 2.256 2.207 1.253.415 3.506.57 4.798-.313 2.67-1.822 4.13-7.92-2.418-10.055h.002zM24.584 27.627L10.928 19.78c-1.952-.98-2.686-1.962-2.686-3.435 0-3.92 4.876-4.903 6.83-4.903.216 0 .428.01.64.023 5.362.568 4.98 4.605 4.054 6.96-.742 1.88-.278 4.064 1.317 5.3.876.678 1.956 1.117 3.07 1.117h.22c2.625 0 4.818-2.2 4.818-5.063 0-4.615-5.135-7.388-10.878-8.59l-.024-.005-.042-.008c-.764-.167-.966-.21-1.752-.322-.074-.01-.314-.032-.314-.032-3.324-.344-6.675.082-9.646 1.846-4.386 2.45-5.61 5.395-5.61 8.092 0 4.168 2.442 7.847 6.828 10.3l13.663 7.848c1.708.98 2.925 2.45 2.68 3.432-1.217 4.415-6.338 4.906-8.78 4.906-7.89 0-12.503-9.198-12.216-13.947.007-.15-.106-.276-.255-.276-.124 0-.23.09-.25.21l-2.588 14.2c-.033.18.057.36.22.443.132.066.288.053.41-.03 1.695-1.126 4.02-1.562 5.897-1.09 2.442.735 5.856 1.228 10.242 1.228 10.004 0 14.392-5.643 14.636-9.81 0-4.17-2.442-7.85-6.828-10.546v-.003zM121.916 11.067C111.94 8.884 101.87 14.965 99.7 25c-2.395 9.94 3.656 20.057 13.763 22.562 9.986 2.184 19.82-3.996 22.216-13.935 2.394-9.94-3.657-20.057-13.765-22.56zm2.658 19.89c-2.298 9.713-5.04 17.36-11.045 15.83-5.87-1.204-5.02-9.405-2.723-19.117 2.298-9.71 5.04-17.36 11.045-15.828 6.094 1.303 5.02 9.403 2.722 19.116zM71.32 47.483c-1.362-.137-2.462-1.535-2.462-2.932V26.405c0-8.117-6.228-14.856-14.143-15.567-2.01-.188-3.165-.29-6.292-.06v.002c-6.152.545-13.71 4.525-13.71 9.985 0 3.19 2.443 5.64 5.367 5.64h.244c1.61 0 3.154-.822 4.224-1.983 1.215-1.32 1.516-3.268.767-4.9-1.236-2.693-1.168-8.075 6.468-8.075 2.93 0 5.61 2.452 5.61 5.64 0 14.467-23.896 11.524-23.896 21.823 0 6.62 6.34 9.073 12.92 9.073h1.462c3.56 0 5.947-.684 7.44-1.362.98-.445 2.104-.2 2.865.566.487.49 1.16.797 1.894.797h11.23c.125 0 .228-.103.228-.23v-.04c0-.124-.097-.22-.217-.232v.003zm-13.926-9.308c0 1.187-.11 2.352-.368 3.432-.89 3.75-4.615 6.172-8.368 5.386-1.4-.294-2.786-.983-3.456-2.442-3.81-8.427 5.77-11.918 10.148-17.834v.008s1.242-1.685 1.92-.84c.177.22.124.706.124 1.187v11.105z"
    />
  </svg>
);

SavorLogo.propTypes = {
  className: PropTypes.string,
};

SavorLogo.defaultProps = {
  className: '',
};

export default SavorLogo;
