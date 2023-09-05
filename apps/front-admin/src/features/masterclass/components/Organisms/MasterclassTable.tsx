import styled from '@emotion/styled';
import {
  DataGrid,
  gridClasses,
  GridColDef,
  GridComparatorFn,
  GridRenderCellParams,
  GridRowParams,
  GridRowsProp,
  gridStringOrNumberComparator,
} from '@mui/x-data-grid';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import Video from '../Molecules/Video';
import { MasterclassTableRowProps, VideoProps } from '../../types';
import { routes } from '../../../../routes';
import { useRouter } from 'next/router';
import { useGetMasterclasses } from '../../hooks/useGetMasterclasses';

const Table = styled(DataGrid)`
  --unstable_DataGrid-radius: 8px;

  .${gridClasses.row} {
    cursor: pointer;

    &.even {
      background-color: ${palette.gray[50]};

      &:hover {
        background-color: ${palette.gray[100]};
      }
    }
  }
`;

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const sortVideo: GridComparatorFn = (
  v1: VideoProps,
  v2: VideoProps,
  param1,
  param2
) => gridStringOrNumberComparator(v1.title, v2.title, param1, param2);
const MasterclassTable = () => {
  const router = useRouter();
  const { masterclasses, isMasterclassesLoading } = useGetMasterclasses();

  const columns: GridColDef[] = [
    {
      field: 'video',
      headerName: 'Video',
      width: 384,
      sortComparator: sortVideo,
      renderCell: Video,
    },
    { field: 'status', headerName: 'Status', width: 128 },
    {
      field: 'date',
      headerName: 'Date',
      width: 256,
      renderCell: (params: GridRenderCellParams<Date>) =>
        dateFormatter.format(new Date(params.value)),
    },
  ];

  const rows: GridRowsProp<MasterclassTableRowProps> = masterclasses.map(
    ({ id, title, description, status, cover_url, created_at }) => ({
      id,
      video: {
        title,
        description: description || '',
        thumbnail: cover_url || '',
      },
      status,
      date: created_at as Date,
    })
  );

  if (isMasterclassesLoading || !masterclasses) {
    return null;
  }

  return (
    <Table
      columns={columns}
      rows={rows}
      disableColumnMenu
      rowHeight={100}
      columnHeaderHeight={48}
      rowSelection={false}
      onRowClick={async ({ id }: GridRowParams<MasterclassTableRowProps>) => {
        await router.push(`${routes.masterclass}/${id}`);
      }}
      getRowClassName={({ indexRelativeToCurrentPage }) =>
        indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
    />
  );
};

export default MasterclassTable;
