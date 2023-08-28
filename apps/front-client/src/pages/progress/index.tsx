import { ReactElement, useEffect, useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { GetServerSidePropsContext } from 'next';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import {ProgressCard, Text} from '@hetic-saline-royale-academy/kit-ui'
import { Button, CardContent, Stack, styled } from '@mui/material';
import { log } from 'console';
import { headers } from 'next/dist/client/components/headers';

interface ProgressType {
  id: string,
  progress: number,
  completed_masterclasses: number,
  total_masterclasses: number,
  completed_chapters: number,
  total_chapters: number,
  user_id: string,
  is_deleted: false,
  created_at: Date,
  updated_at: Date
}

interface PropType {
  session : Session
} 

const ProgressCardContainer = styled(Stack)`
gap: 1rem;
padding: 40px 20px;
flex-direction : row;
`



function Progress(props : PropType) {
  const [progress, setProgress] = useState<ProgressType[]>([])
  const session = props.session
  
  const addProgress =async () =>  {
    console.log('adding progress');
    
    //fetch(``, {headers :{Authorization : `Bearer ${session.access_token}`}})
  }

  const fetchProgress = async () => {
    console.log(session.user.sub);
    
  fetch(`http://localhost:3000/api/progress-tracker/user-id/${session.user.sub}`,{headers : {Authorization : `Bearer ${session.access_token}` }}).then(res => {return res.json()}).then(data => setProgress(data))
  }

  useEffect(()=> {
    fetchProgress()
  }, [])
  
  return (<ProgressCardContainer>
      {progress.map(progress => (
         <ProgressCard key={progress.id}>
         <CardContent>
           <Text  preset="display-md-bold" color="gray-25">
             {progress.completed_masterclasses}
           </Text>
           <Text css='margin : 1rem 0;' preset="text-md-medium" color="gray-25">
             Cours Regardés en entier
           </Text>
         </CardContent>
       </ProgressCard>
      ))}
    <Button variant='outlined' color='secondary' onClick={addProgress}>Add tracker</Button>
</ProgressCardContainer>);
}

Progress.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Ma progression"
      subtitle="Suivre ma progression, mes badges et mes statistiques"
      activeRoute={routes.progress}
    >
      {page}
    </DashboardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return { redirect: { destination: routes.login } };
  }
  
  return { props: { session } };
}

export default Progress;
