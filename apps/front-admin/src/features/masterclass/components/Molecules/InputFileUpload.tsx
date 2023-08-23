import {
  Button as UploadButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import VisuallyHiddenInput from '../Atoms/VisuallyHiddenInput';

function InputFileUpload({
  handleUpload,
}: {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <UploadButton
      component="label"
      role={undefined}
      tabIndex={-1}
      color={'inherit'}
    >
      <Stack spacing={1} alignItems={'center'}>
        <SvgIcon fontSize={'large'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
        <Typography variant={'body2'}>Ajouter une vidéo</Typography>
      </Stack>
      <VisuallyHiddenInput type="file" onChange={handleUpload} />
    </UploadButton>
  );
}

export default InputFileUpload;
