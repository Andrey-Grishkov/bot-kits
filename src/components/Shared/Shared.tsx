import {
  togglePayoutsVisibility,
  toggleStatsVisibility,
} from "../../redux/visibilitySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import RefLinkSection from "./components/RefLinkSection";
import StatsTable from "./components/StatsTable";
import PayoutsTable from "./components/PayoutsTable";
import "./Shared.scss";

const SharedAccess = () => {
  const dispatch = useDispatch();
  const isStatsVisible = useSelector(
    (state: RootState) => state.visibility.isStatsVisible
  );

  const isPayoutsVisible = useSelector(
    (state: RootState) => state.visibility.isPayoutsVisible
  );

  const link = "botkits.ru/?ref=12345";

  return (
    <div className="partners">
      <div className="partners__header">
        <h2 className="partners__title">Партнерская программа</h2>
        <button className="partners__btn-request">Запросить выплату</button>
      </div>
      <RefLinkSection link={link} />
      <div className="partners__content">
        <StatsTable
          isStatsVisible={isStatsVisible}
          toggleStatsVisibility={() => dispatch(toggleStatsVisibility())}
        />
        <PayoutsTable
          isPayoutsVisible={isPayoutsVisible}
          togglePayoutsVisibility={() => dispatch(togglePayoutsVisibility())}
        />
      </div>
    </div>
  );
};

export default SharedAccess;
