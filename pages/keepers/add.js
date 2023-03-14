import { useQuery } from "@apollo/client";
import { AddKeeper } from "../../components/templates";
import { GET_NETWORKS } from "../../data/queries";

const AddKeeperPage = () => {
  const { data, loading, error } = useQuery(GET_NETWORKS);

  return <AddKeeper data={data} loading={loading} error={error} />;
};

export default AddKeeperPage;
