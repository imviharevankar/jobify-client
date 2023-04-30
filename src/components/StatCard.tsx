import { currencyFormatter } from "../helper/currencyFormatter";
import { displayDate } from "../helper/dateFormater";
import { resources } from "../util/resources";
import DetailsContainer from "./DetailsContainer";

interface StatCardProps {
  isClient: boolean,
  joinedOn: string,
  amountSpent?: number,
  amountEarned?: number,
  amountOnhold?: number,
}

const StatCard = (props: StatCardProps) => {
  const { isClient, amountSpent, amountEarned, amountOnhold, joinedOn = '' } = props;
  return (
    <div className="box_shadow_sm br_16_0_16_16 flex col_center justify_between g_16 p_16 my_16 wrap">
      {
        isClient
          ? <DetailsContainer
            label={resources.amountSpent}
            value={currencyFormatter(amountSpent || 0).toString()}
          />
          : <>
            <DetailsContainer
              label={resources.amountEarned}
              value={currencyFormatter(amountEarned || 0).toString()}
            />
            <DetailsContainer
              label={resources.amountOnhold}
              value={currencyFormatter(amountOnhold || 0).toString()}
            />
          </>
      }

      <DetailsContainer
        label={resources.memberSince}
        value={displayDate(joinedOn)}
      />
    </div>
  )
}

export default StatCard;
