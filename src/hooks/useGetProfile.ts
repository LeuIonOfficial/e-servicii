import { Api } from "@services";
import { useQuery } from "react-query";

const useGetProfile = () => {
  const query = () => Api.profile.getProfile();

  const {
    isLoading,
    data: profile,
    isSuccess,
  } = useQuery(["profile"], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isLoading,
    profile,
    isSuccess,
  };
};
export default useGetProfile;
