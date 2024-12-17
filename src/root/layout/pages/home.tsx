import React, { useEffect } from "react";
import { toast } from "sonner";
import { TResponse } from "../../../interface/response.interface";
import { useGetUsersMutation } from "../../../redux/shared/mutation";

const Home: React.FC = () => {
  const [listState, setListState] = React.useState([]);
  const [getUsers, { isLoading }] = useGetUsersMutation();

  const handleFetchData = async () => {
    try {
      const response = await getUsers("").unwrap();
      const { success, message, data } = response as TResponse;

      if (success) {
        setListState(data);
        toast.success(message ?? "Data fetched successfully!");
      }
    } catch (error: any) {
      toast.info(error?.message ?? "Something went wrong!");
      console.error("error :>> ", error);
    }
  };
  useEffect(() => {
    handleFetchData();
    console.log("listState", listState);
  }, []);

  return <div>Root Home</div>;
};

export default Home;
