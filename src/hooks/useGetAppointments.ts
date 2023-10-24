import { Api } from '@services';
import { useQuery } from 'react-query';

const useGetProfile = () => {
  const query = async () => Api.appointments.getAppointments();

  const {
    isSuccess,
    data: appointments,
    isFetching,
  } = useQuery(['appointments'], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isSuccess,
    appointments,
    isFetching,
  };
};
export default useGetProfile;
