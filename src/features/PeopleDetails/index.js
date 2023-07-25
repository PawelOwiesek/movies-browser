//import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { ActorDescriptionTile } from "../../common/TileList/PeopleDetailsTile";
import { SubtitleBirth } from "./styled";
import {
  getPersonId,
  selectDetailsStatus,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
  const { id } = useParams();
  console.log("id", useParams);
  const dispatch = useDispatch();
  const status = useSelector(selectDetailsStatus);
  const details = useSelector(state => selectPeopleDetails(state,id));
  useEffect(() => {
    dispatch(getPersonId(id));
  }, [dispatch, id]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" || !details ? (
    <Loading />
  ) : (
    <Container>
      <ActorDescriptionTile
        poster={details.profile_path}
        name={details.name}
        birthday={details.birthday}
        birthPlace={details.place_of_birth}
        biography={details.biography}
      />
    </Container>
  );
};
