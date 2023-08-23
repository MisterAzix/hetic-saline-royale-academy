import { Box, CircularProgress, Modal, Stack } from '@mui/material';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import ModalTitle from '../Atoms/ModalTitle';
import ModalDescription from '../Atoms/ModalDescription';
import InputFileUpload from '../Molecules/InputFileUpload';
import { useUploadMasterclass } from '../../hooks';

const UploadMasterclassModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { uploadMasterclass, isLoading } = useUploadMasterclass();

  return (
    <Modal
      open={isOpen}
      onClose={() => !isLoading && onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(500px, 100%)',
          backgroundColor: palette.gray[50],
          boxShadow: 24,
          borderRadius: '12px',
          border: 'none',
          padding: 4,
          alignItems: 'center',
        }}
        spacing={3}
      >
        <Stack spacing={1}>
          <ModalTitle align={'center'}>
            Sélectionnez le fichier vidéo que vous souhaitez mettre en ligne
          </ModalTitle>
          <ModalDescription align={'center'}>
            La vidéo doit être au format MP4 et ne doit pas dépasser 2Go
          </ModalDescription>
        </Stack>
        {isLoading ? (
          <Box sx={{ color: palette.primary[500] }}>
            <CircularProgress color={'inherit'} />
          </Box>
        ) : (
          <InputFileUpload handleUpload={uploadMasterclass} />
        )}
      </Stack>
    </Modal>
  );
};

export default UploadMasterclassModal;
