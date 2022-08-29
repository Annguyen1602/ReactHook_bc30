import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useRootes from "../../../hooks/useRootes";

export default function DemoUseRoute() {
  const { navigate, searchParams, params } = useRootes();
  const { search, setSearch } = searchParams;

  console.log(navigate, searchParams, params);

  return <div>DemoUseRoute</div>;
}
