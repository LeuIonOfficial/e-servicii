import { Api } from "@services";
import { useQuery } from "react-query";

const useGetProfile = () => {
  const query = async () => Api.profile.getProfile();

  const {
    isSuccess,
    data: profile,
    isFetching,
  } = useQuery(["user"], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isSuccess,
    profile,
    isFetching,
  };
};
export default useGetProfile;
